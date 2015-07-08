from gevent import monkey; monkey.patch_all()

from socketio import socketio_manage
from socketio.server import SocketIOServer
from socketio.namespace import BaseNamespace
from socketio.mixins import RoomsMixin, BroadcastMixin
import time
import thread

import socket
from multiprocessing import Process

import client_module


class Application(object):
    def __init__(self):
        print ("Application haseratu da.....")
        self.buffer = []
        self.request = {
        }

    def __call__(self, environ, start_response):
        
        path = environ['PATH_INFO'].strip('/')
        if not path:
            start_response('200 OK', [('Content-Type', 'text/html')])
            return ['<h1>Paraninfo. </h1>']

        if path.startswith('static/') or  path =='proba.html':
            try:
                data = open(path).read()
            except Exception:
                return "not_found(start_response)"

            if path.endswith(".js"):
                content_type = "text/javascript"
            elif path.endswith(".css"):
                content_type = "text/css"
            elif path.endswith(".swf"):
                content_type = "application/x-shockwave-flash"
            else:
                content_type = "text/html"

            start_response('200 OK', [('Content-Type', content_type)])
            return [data]

        if path.startswith("socket.io"):
            socketio_manage(environ, {'': ParaninfoNamespace}, self.request)
        else:
            return self.not_found(start_response)

    def not_found(self, start_response):
            start_response('404 Not Found', [])
            return ['<h1>Not Found...</h1>']


class ParaninfoNamespace(BaseNamespace, RoomsMixin, BroadcastMixin):

    client = None
   
    def on_cmd(self, cmd):
        if not self.client:
            print "Haseratu.....!!!!!!!!!!!!!"
            self.client = client_module.Client('192.168.110.237', 4321)
            print "---1---"
            thread.start_new_thread(self.receive, ())
            
        #s=self.client_module.Client('192.168.110.237', 4321)
        #self.client = client_module.Client('localhost', 4321)
        
        print "bidali php zerbitzarita:: "+str(cmd)
        self.client.send(cmd)
                

    def receive(self):
       
        while True:
            r=self.client.receive()
            if r:
                if "\0" in r:
                    for c in r.split("\0"):
                        print "jaso da php zerbitzaritik::: "+str(c)
                        self.broadcast_event('result', c.strip() )
                else:
                    print "jaso da php zerbitzaritik::: "+str(r)
                    self.broadcast_event('result', r.strip() )
    
           
    def on_agindu(self):
        print "agindu........."


    def on_recv_disconnect(self):
        print "jaso recv_disconnect"
        self.disconnect(silent=True)

    def on_user_message(self, msg):
        print "jaso on_user_message" + msg
        #self.emit_to_room('main_room', 'msg_to_room', self.socket.session['nickname'], msg)

    def on_connect(self, message):
        print ("CONNECT JASO DA")
        self.broadcast_event('announcement', 'Konexioa egin dut!!!!!!!!!!')

    def on_recv_message(self, message):
        print "jaso recv_message"+str(message)




if __name__ == '__main__':
    print 'Listening on port 8080'
    SocketIOServer(('0.0.0.0', 8080), Application(),resource="socket.io", policy_server=False).serve_forever()


import socket
from multiprocessing import Process
import os
import time
import thread


class Client():

    addr = None
    port = None
    socket = None
    timeout = None
    time_min=None
    recv_process = None
    connected=False

    def __init__(self,addr,port):
        self.addr=addr
        self.port=port
        self.connect()
        

    def connect(self,timeout=5,tmin=0):
        print "Connect..."
        try:
            self.socket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
            #self.socket.settimeout(timeout)
            self.socket.connect((self.addr, int(self.port)))
            self.socket.connected = True
            if tmin > 0:
                time.sleep(tmin/2)
            print "Client Class connected  to " + self.addr+":" + str(self.port)
        except:
            self.connected = False
        
        print "--00---"
        return self.socket
        
        #thread.start_new_thread(self.receive, ())

        
    def receive(self):
        
        result=None
        
        try:
            #print "jasotzera.........."
            result = self.socket.recv( 2048 )
        except socket.timeout:
            print "Timeout..........." 
        except socket.error:
            print("socket error occured: ")
        except:
            print "Receive error !!!"
        return result
            
   

    def send(self,cmd,timeout=5,tmin=0):
        conn=False
        try:
            print "Client Class send cmd:::  " + str(cmd) + " to " + self.addr+":" + str(self.port)
            self.socket.send(str(cmd).strip()+"\n")
                    
        except socket.timeout, e:
            # For Python 2.7
            print "There was an error: %r" % e
            return
         
        except :
            print "There was an error in client connection" 
            return 
        
        
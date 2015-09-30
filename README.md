# areto-ui

**Areto** is an open source automation software designed for conference rooms. We use it to control projectors, lights, audio system, TV screens, etc...

The default user interface for Areto is **Areto-UI**, HTML5 hybrid mobile app.

## components

|Name          | Description                      |
|--------------|----------------------------------|
|**proxy**     | Python daemon (realtime engine)  |
|**ui**        | HTML5 web (Ionic Framework)      |

We're using [Socket.IO](http://socket.io/) as a real-time engine.

## Proxy

**areto-proxy** is a Python daemon who works as a Socket.IO server app and talks to **areto-server**. For testing purposes you can run it directly with Python:

```sh
python proxy/areto-proxy
```

Another better option is to run it as a SystemD service. You can install the service using the `bootstrap.sh` script:

```sh
proxy/bootstrap.sh
```

Now, you can use SystemD commands to control de service:

```sh
# Start the service
systemctl start areto-proxy

# Stop the service
systemctl stop areto-proxy

# Show the output
journalctl -u areto-proxy -f
```

## UI

### Installation

Areto-UI is based on Ionic Framework. So first of all we need:
- [Node.js](https://nodejs.org/en/)
- [Ionic Framework](http://ionicframework.com/)

After installing Node and Ionic, you have to create a blank project and move the files generated to the areto-ui source:

```sh
# Download it using git clone
git clone git@github.com:Tknika/areto-ui.git
cd areto-ui/ui

# Initialize the Ionic environment with plugins
ionic platform add android

# Install node dependencies
npm install
```

### Testing

You can test the application with Ionic serve:

```
ionic serve
```

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

**areto-proxy** is a Python daemon who works as a Socket.IO server app and talks to [**areto-server**](https://github.com/Tknika/areto-server). For testing purposes you can run it directly with Python:

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
- [Android SDK](http://developer.android.com/sdk/index.html#Other)

More info about configuring Android SDK in your system: https://spring.io/guides/gs/android/

```sh
sudo npm install -g cordova ionic
```

After installing Node and Ionic, you can download de source and configure the environment: 

```sh
# Download it using git clone
git clone git@github.com:Tknika/areto-ui.git
cd areto-ui/ui

# Initialize the Ionic environment with plugins
ionic platform add android

# Install node dependencies
npm install

# Before generate android package:
export ANDROID_HOME=/home/<user>/Android/Sdk/

# Generate APKs
ionic build android
# or
ionic build android --release
```

### Testing

You can test the application with Ionic serve:

```
ionic serve
```

Or if you have Android SDK correctly installed:

```
ionic emulate android
```

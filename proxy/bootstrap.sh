#! /bin/sh

# Created by Xabi Ezpeleta <xezpeleta@tknika.eus>


##
## Systemd service
##

# Copy service to Systemd directory (Debian Jessie)
cp areto-proxy.service /lib/systemd/system

# Mark the unit for autostart
systemctl enable areto-proxy.service

# Start the service
systemctl start areto-proxy.service

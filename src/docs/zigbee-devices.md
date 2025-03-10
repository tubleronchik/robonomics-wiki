---
title: Zigbee Devices in Zigbee2MQTT

contributors: [nakata5321, PaTara43]
tools:
  - Zigbee2MQTT 1.40.1
    https://github.com/Koenkk/zigbee2mqtt

---

**If, during the installation process, you insert a ZigBee coordinator, you can add ZigBee devices to your smart home. This article will explain how to do it.**

{% roboWikiPicture {src:"docs/home-assistant/zigbee2mqtt.png", alt:"zigbee2mqt"} %}{% endroboWikiPicture %}

## Pairing Device

Open a web browser and go to `http://%PC_IP_ADDRESS%:8099`. You can find the IP address of Raspberry Pi
using [Fing mobile app](https://www.fing.com/products) or [nmap CLI tool](https://vitux.com/find-devices-connected-to-your-network-with-nmap/). If you set up everything on your PC use `http://localhost:8099`.

You will see web-interface of Zigbee2MQTT:


{% roboWikiPicture {src:"docs/home-assistant/z2m-webinterface.jpg", alt:"z2m-webinterface"} %}{% endroboWikiPicture %}


It's time to connect your smart device.
First, press `Permit join (All)` button at the top of web-interface of Zigbee2MQTT.

Then, start to pair devices. The most common way to switch a device to connect mode is to hold its power button or switch them on/off 5 times. Make sure Zigbee2MQTT is running.

When the device connects, you will see them in web-interface:

{% roboWikiPicture {src:"docs/home-assistant/device_connected.jpg", alt:"device_connected"} %}{% endroboWikiPicture %}

Now you should see this sensor in your Home Assistant WebUI. Go to `Settings` -> `Devices & Services` -> `Devices`. 

After adding all the sensors, you can close web-interface of Zigbee2MQTT.

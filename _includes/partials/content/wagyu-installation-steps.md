### Linux

1. [Download](#download) the app
1. Find the downloaded file and [make it executable](https://discourse.appimage.org/t/how-to-run-an-appimage/80)
1. Double-click the file to launch the app

On Ubuntu 22.04, you might need to install `libfuse2` first before running the app with something like:

```
sudo add-apt-repository universe
sudo apt install libfuse2
```

As an alternative to having FUSE, you can manually extract the AppImage asset and run it. In a Terminal, it would look like:

```
chmod 777 Wagyu.Key.Gen-1.7.0.AppImage
./Wagyu.Key.Gen-1.7.0.AppImage --appimage-extract
cd squashfs-root
./AppRun
```

---


### Windows

1. [Download](#download) the app
1. Find the downloaded file and double-click it to launch the app


---


### macOS

1. [Download](#download) the app
1. Find the downloaded file and double-click it
1. In the popup window, drag the Wagyu Key Gen app into the Applications folder to install it
1. In your Applications folder, double-click the app to launch it
1. If presented with the message `"Wagyu Key Gen" cannot be opened because the developer cannot be verified`:
	1. Select "Cancel"
	1. Open the Settings app and go to Privacy & Security
	1. Scroll down to the Security section and look for the message "Wagyu Key Gen was blocked from use because it is not from an identified developer"
	1. Select "Open Anyway"
	1. Enter your password if prompted
	1. A new message will appear: `macOS cannot verify the developer of "Wagyu Key Gen". Are you sure you want to open it?`
	1. Select "Open" and the app will launch
	1. From now on you can just open it from your Applications folder like any other app

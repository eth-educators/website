---
layout: markdown
title: Solo Staking Guide (Advanced)
permalink: /solo-staking-guides/advanced
---


## Step 0: Will my internet support staking?

You *do not* have to have 100% uptime in order to stake at home. Offline penalties are extremely minor - you only lose the equivalent of what you would have made had the node been online. And you’ll never get slashed for being offline.

|          | Minimum Requirements
-----------|---------------------
Speeds     | 10 Mbps up & down
Bandwidth  | 2 TB per month on the high end. Minimal setups can reduce this to under 1 TB*
Connection | Ethernet (not recommended to run over wifi)
Autonomy   | You will want administrative access to your router

\* *<small>You can minimize bandwidth requirements by minimizing peers or making sure your open ports are correctly configured. It may be suboptimal performance but it will still be profitable.</small>*



---



## Step 1: Choose & purchase your hardware

The EthStaker knowledge base has [a good overview of hardware requirements](https://docs.ethstaker.cc/ethstaker-knowledge-base/hardware/hardware-requirements) summarized below, but please follow the link for more in-depth information.

#### Hardware requirements

Component  | Minimum Requirements
-----------| --------------------
OS         | Linux is recommended
RAM        | Minimum 16 GB
Hard drive | 2 TB SSD (no HDDs!)
CPU        | Minimum 6000 score on Passmark
USB        | Minimum 2 GB


##### Options

If you're not comfortable building your own computer, here are some off-the-shelf options.

Link | RAM | Hard Drive | Performance
-----|-----|------------|------------
[ASUS PN51](https://www.newegg.com/asus-pn51-business-desktops-workstations/p/1VK-001S-014K1) | 16 GB | 2 TB NVMe SSD | [PassMark](https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5700U)
[NUC 11 Pro](https://www.newegg.com/intel-nuc-11-pro-nuc11tnhi30-business-desktops-workstations/p/1VK-004K-081R0) | 16 GB | 2 TB PCIe NVMe SSD | [PassMark](https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-1115G4+%40+3.00GHz)
[NUC 12 Pro](https://www.amazon.com/Intel-12-NUC12WSKi70Z-Computer-Bluetooth/dp/B09N9FZGVP/) | 32 GB | 2 TB PCIe NVMe SSD | [PassMark](https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-1260P)
[ASUS PN50](https://www.newegg.com/asus-pn50-business-desktops-workstations/p/1VK-001S-00KY2) | 16 GB | 2 TB NVMe SSD | [PassMark](https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+4700U)



---



## Step 2: Install OS and create your keys

Wait until you have your hardware before continuing with this step.

{% include partials/components/callout.html 
  type="warning"
  title="⚠️ Warning ⚠️"
  content="This step should be done on an **AIRGAPPED** computer. Turning your wifi off is **NOT** the same as airgapping a computer."
%}


#### Create an airgapped environment

The options listed below for creating your keys should be performed in an airgapped environment. The following are options for doing so

##### Options (choose one of the following)

| Tool | Description | Requirements | Download link | Guide |
| --- | --- | --- | --- | --- |
| TailsOS from bootable USB | This creates a secure environment - you install this onto a USB stick (min 8 GB) and boot from there.  | Linux, MacOS (NOT Apple M1 or M2 chip), Windows | https://tails.boum.org/install/index.en.html | https://tails.boum.org/install/index.en.html |
| Ubuntu from bootable USB | This creates a secure environment - you install this onto a USB stick (min 4 GB) and boot from there.  | Linux, MacOS, Windows | https://ubuntu.com/download/desktop | Windows or Linux: https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview
MacOS: https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#1-overview |
| Old computer | This is the easiest method | Any! | n/a | 1. Wipe & restore this computer to clear of it any potential existing vulnerabilities <br>2. DO NOT connect it to the internet <br>3. Download either the staking-deposit-cli or wagyu-ken-gen using your online computer <br>4. Put it on a freshly reformatted USB stick (min 250 MB)  <br>5. Plug the USB in and use the tool you downloaded on your airgapped computer |

#### Create your keys

| Tool | Skill level | Created by | Requirements | Download link | Guide |
| --- | --- | --- | --- | --- | --- |
| Staking deposit CLI | Advanced | Ethereum Foundation | Linux, MacOS, Windows |  | https://github.com/ethereum/staking-deposit-cli#tutorial-for-users |


---


## Step 3: Secure your keys


There are a number of different ways to do this and you can find a trove of guidance online, but it is IMPERATIVE that you keep your 24 word seed SAFE and ACCESSIBLE TO YOU.

#### Do NOT

- Do not give it to ANYONE. No one needs your 24 word seed to help you troubleshoot. Even if you think you trust someone - if they ask you to input your seed into something that’s online, they are trying to scam you
- Do not put it online
    - Do not keep it in an online password manager (e.g. LastPass, 1Password, Bitwarden, Apple Keychain, etc)
    - Do not keep a cloud backup of it
    - Do not email to ANYONE, including yourself
    - Do not type it on an online computer
- Do not store it on network attached storage (NAS) that has ports open to the outside world (e.g. if you have a Plex server that others have access to)
- Do not keep all 24 written words in your wallet or anywhere else easily accessible

#### Do

**Low tech**

- Consider writing it down on a piece of paper and keeping that piece of paper in a locked location
- Consider splitting up the 24 word seed [into three pieces](https://www.bitcoininsider.org/article/56719/shamirs-secret-explained-distributing-seed-phrase-multiple-parts) and storing the pieces in different, locked locations
- Consider engraving it on a piece of metal or buying a product that will store it in metal (e.g. [Cryptosteel](https://cryptosteel.com/)) and storing that in a locked location

**High tech**

- Consider storing it on one or more encrypted, fresh, never-online USB drives
- Consider keeping it in a password manager on an airgapped computer (a computer that has never been online)
- Use a [Safe multisig](https://safe.global/) for a withdrawal address and use multiple methods to back up the keys of each of the signers on the multisig


---


## Step 4: Choose your setup process

This is the most involved part - these methods will take you from start to finish to setting up your validator, once you have your hardware and your keys

##### Options (Choose one of the following)

| Process | Skill level | Created by | Link | Comments |
| --- | --- | --- | --- | --- |
| Someresat | Advanced | Someresat |  | CLI, but lots of copy-paste. Best option if you want a deep understanding of the inner workings of your validator |
| CoinCashew | Advanced | CoinCashew | https://www.coincashew.com/ | CLI. Slightly more beginner-friendly than Someresat |
| eth-wizard | Intermediate | EthStaker |  | CLI still required but it basically automates Someresat’s process in a way that’s much more beginner-friendly |
| Eth Docker | Intermediate | EthStaker | https://eth-docker.net/ | CLI but it’s containerized - meaning you don’t have to worry about installing dependencies or understanding commands deeply |


---


## Step 5: Set up monitoring & alerting


You can choose either one of these methods to monitor your validator, or use both! Grafana will give you in-depth look at your validator to help troubleshoot any issues whereas [beaconcha.in](http://beaconcha.in) will only let you know when you miss duties or if it goes offline. beaconcha.in can notify you via email or with push notifications with their app

| Method | Skill level | Link |
| --- | --- | --- |
| Grafana | Advanced | https://github.com/eth-educators/ethstaker-guides/blob/main/monitoring.md
https://github.com/eth-educators/ethstaker-guides/blob/main/alerting.md |
| beaconcha.in | Beginner | https://kb.beaconcha.in/beaconcha.in-explorer/beaconcha.in-notifications |



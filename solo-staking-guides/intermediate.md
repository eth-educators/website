---
layout: markdown
title: Solo Staking Guide (Intermediate)
permalink: /solo-staking-guides/intermediate
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


## Step 2: Install Ubuntu

Wait until you have your hardware before continuing with this step.

{% include partials/components/callout.html 
  type="warning"
  title="⚠️ **Warning** ⚠️"
  content="This step should be done on an **AIRGAPPED** computer. Turning your wifi off is **NOT** the same as airgapping a computer."
%}

#### Create an airgapped environment

You need a USB stick (min 2 GB) for this. 

1. Create a bootable USB for Ubuntu using the guide for your primary computer OS
    1. [Using macOS](https://ubuntu.com/tutorials/create-a-usb-stick-on-macos)
    1. [Using Ubuntu](https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu)
    1. [Using Windows](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows)
1. Install Ubuntu on your new node computer using the bootable USB (**DO NOT** connect it to the network!)


---


## Step 3: Create and secure your keys

#### Install and run Wagyu Key Gen app

You need a USB stick for this.

1. Using your primary computer again, download [Wagyu Key Gen](https://ethstaker.cc/wagyu) **for Linux** and put the installation file on a USB
1. Using the USB, install Wagyu Key Gen on the node computer
1. Run the Wagyu Key Gen app and follow the tutorial

#### Secure your keys

There are a number of different ways to secure your keys and you can find a trove of guidance online, but it is **IMPERATIVE** that you keep your 24 word seed **safe** and **accessible to you**.

{% include partials/components/callout.html 
  type="danger"
  title="🚨 **DO NOT** . . ."
  content="
- Do not give it to ANYONE. No one needs your 24 word seed to help you troubleshoot. Even if you think you trust someone - if they ask you to input your seed into something that’s online, they are trying to scam you
- Do not put it online
    - Do not keep it in an online password manager (e.g. LastPass, 1Password, Bitwarden, Apple Keychain, etc)
    - Do not keep a cloud backup of it
    - Do not email to ANYONE, including yourself
    - Do not type it on an online computer
- Do not store it on network attached storage (NAS) that has ports open to the outside world (e.g. if you have a Plex server that others have access to)
- Do not keep all 24 written words in your wallet or anywhere else easily accessible"
%}


{% include partials/components/callout.html 
  type="success"
  title="✅ **DO** . . ."
  content="
**Low tech**

- Consider writing it down on a piece of paper and keeping that piece of paper in a locked location
- Consider splitting up the 24 word seed [into three pieces](https://www.bitcoininsider.org/article/56719/shamirs-secret-explained-distributing-seed-phrase-multiple-parts) and storing the pieces in different, locked locations
- Consider engraving it on a piece of metal or buying a product that will store it in metal (e.g. [Cryptosteel](https://cryptosteel.com/)) and storing that in a locked location

**High tech**

- Consider storing it on one or more encrypted, fresh, never-online USB drives
- Consider keeping it in an offline password manager on an airgapped computer (a computer that has never been online)
- Use a [Safe multisig](https://safe.global/) for a withdrawal address and use multiple methods to back up the keys of each of the signers on the multisig"
%}

We cannot stress this enough. **DO NOT LOSE THIS SEED PHRASE**. There is **NO WAY** to get your funds back if you lose this seed phrase or if someone else is able to access it.


---


## Step 4: Validator setup




---


## Step 5: Monitoring & alerting

You can setup alerts with [beaconcha.in](https://kb.beaconcha.in/beaconcha.in-explorer/beaconcha.in-notifications) to let you know when you miss duties or the validator goes offline. beaconcha.in can notify you via email or with push notifications with their app.


---


## Step infinite: updating



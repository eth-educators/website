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

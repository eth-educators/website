This is the most involved part where you will be setting up your validator, once you have completed the previous steps. We'll be using Eth-Docker since it's containerized using [Docker](https://www.docker.com/), meaning you don’t have to worry about installing dependencies or understanding commands deeply.

See [ethdocker.com](https://ethdocker.com/) for full documentation.

#### Open Terminal

![](/assets/img/solo-staking-guides/terminal-search.png)

1. On a Ubuntu 18.04 system you can find a launcher for the terminal by clicking on the Activities item at the top left of the screen, then typing the first few letters of “terminal”, “command”, “prompt” or “shell”
1. Select the app to open it

#### Install

Enter each of the following commands individually into the Terminal app.

1. Download Eth Docker:<br> `cd ~ && git clone https://github.com/eth-educators/eth-docker.git && cd eth-docker`
1. Install pre-requisites such as Docker:<br> `./ethd install`
1. Configure Eth Docker (have an Ethereum address handy where you want Execution Layer rewards to go):<br> `./ethd config`
1. Start Eth Docker:<br> `./ethd up`

Additional commands:

Purpose      | Command
-------------|----------------
Help options | `./ethd`
Stop         | `./ethd stop`
Start        | `./ethd start`
Update       | `./ethd update`

**Note:** Docker will restart running clients automatically after a reboot, but they will remain stopped if you stopped them with `./ethd stop` or equivalent Docker commands.

#### Import validator keys

1. Make a copy of the files downloaded from the Wagyu Key Gen app
1. Move the copy to your staking machine
1. Add the files to the `.eth/validator_keys` directory.


#### Setup networking

- If you're a home staker, establish a static IP
    - You can configure your router to use a [DHCP reservation](https://homenetworkadmin.com/dhcp-reservation/). How to do this depends on your router.
    - You could instead choose an IP address outside your DHCP range and [configure it as a static IP](https://linuxhint.com/setup_static_ip_address_ubuntu/).
- If you're a home staker, [setup port forwarding](https://portforward.com/) on your router


#### Setup SSH

For security reasons, you want some form of two-factor authentication for SSH login, particularly if SSH is exposed to the Internet. These instructions accomplish that by creating an SSH key with passphrase. Alternatively or in addition, you could set up [two-factor authentication with one-time passwords](https://www.coincashew.com/coins/overview-eth/guide-or-security-best-practices-for-a-eth2-validator-beaconchain-node#setup-two-factor-authentication-for-ssh-optional).

1. Create an SSH key pair:<br> `ssh-keygen -t ed25519`
1. Set a strong passphrase for the key


See [ethdocker.com](https://ethdocker.com/) for full documentation.

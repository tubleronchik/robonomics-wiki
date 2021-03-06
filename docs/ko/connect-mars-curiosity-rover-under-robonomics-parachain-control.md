---
title: Connect Mars Curiosity rover under Robonomics parachain control
contributors: [Vourhey, PaTara43]
translated: false
---

**Let's see how Robonomics Parachain control allows to make Mars Curiosity rover move. Requirements:**
- Ubuntu 18.04 LTS
- ROS Melodic + Gazebo + RViz (installation manual [here](http://wiki.ros.org/melodic/Installation))
- extra packages:
```shell
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
```
- IPFS 0.4.22 (download from [here](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) and install)
- Python dependencies:
```
pip install ipfshttpclient
```
- Robonomics node (binary file) (download latest release [here](https://github.com/airalab/robonomics/releases))
- IPFS browser extension (optional)

Here is the video showing successful launch:

https://youtu.be/pl3eIEC_T2o

## 1. Set up a simulation
Download Curiosity rover package:
```
mkdir -p robonomics_ws/src
cd robonomics_ws/src
git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
cd ..
```
We need to adjust starting conditions to make our rover spawn smoothly:
- Go to

`/robonomics_ws/src/master/curiosity_mars_rover_description/worlds` and change line 14 of the file` mars_curiosity.world` to
`<pose>0 0 9 0 0 0</pose>`.

- Go to

`/robonomics_ws/src/master/curiosity_mars_rover_description/launch` and change line 4 of the file `mars_curiosity_world.launch` to
`<arg name="paused" default="false"/>`.

Don’t forget to add source command to `~/.bashrc`:
```
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
```

## 2. Download controller package
In terminal do the following. This will download a sample script used in the demo:
```
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd ../..
catkin build
```

## 3. Manage accounts in DAPP
Since we are testing, let's create a local robonomics network node with robonomics binary file:
```
./robonomics --dev --rpc-cors all
```
**Important!** Before next launches it is necessary to remove a directory `db` with

```
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
```

After a successful launch create accounts for the rover and for it's employer following [this](/docs/create-account-in-dapp) manual. **Do not forget to save each account's seed (RAW SEED) and address! You will need them for transactions**. Add these addresses, seeds and path to robonomics binary file to file `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Transfer some money (units) to these accounts:

![Config](../images/curiosity-demo/config.jpg "Config")

![Balances](../images/curiosity-demo/balances.jpg "Balances")

## 4. Start Robonomics
Up to now the **only thing running** should be the robonomics local node.
In a separate terminal launch IPFS:
```
ipfs init # you only need to do this once
ipfs daemon
```
In another separate terminal launch Curiosity simulation:
```
roslaunch curiosity_mars_rover_description main_real_mars.launch
```
Wait till it stays still and after that in another terminal launch the controller:
```
rosrun robonomics_sample_controller sample_controller.py
```

![Curiosity](../images/curiosity-demo/curiosity.jpg "Curiosity")

Now you can send a transaction triggering the Rover to start moving and collecting data. To do so, you should use the [Robonomics IO](https://wiki.robonomics.network/docs/rio-overview/)  `write` subcommand of robonomics binary file:
```
echo "ON" | ./robonomics io write launch -r <CURIOSITY ADDRESS> -s <EMPLOYER’S KEY>
```
Where `<CURIOSITY ADDRESS>`  and `<EMPLOYER’S KEY>` are replaced with  previously saved strings accordingly.
You should see the log `"Arming..."` and the robot should start moving its camera and arm. Later, when the job is done (there is a log informing user when the program has finished), on the Robonomics portal go to `Developer` -> `Chain state` and add a CURIOSITY datalog using `“+”` button with selected `datalog` as state query:

![Datalog](../images/curiosity-demo/hash_in_chain.jpg "Datalog")

The IPFS hash of the telemetry has been saved in the blockchain. To see the data simply copy the hash and add it to the local [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) address `localhost:8080/ipfs/`:

![Voila](../images/curiosity-demo/datalog.jpg "Voila")

## Troubleshooting

If due to some reason addresses in IO module and on the portal are displayed unequally (e.g. `5...` and `4...`) and the program outputs "Not my job is paid", fill in configuration file with address of the same type as in IO module.

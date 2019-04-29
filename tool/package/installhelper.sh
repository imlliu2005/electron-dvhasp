dpkg -i $(readlink -f $(dirname $0))/冠状动脉生理功能评估软件.deb 
cp $(readlink -f $(dirname $0))/com.ubuntu.deepvesselffr.policy /usr/share/polkit-1/actions/
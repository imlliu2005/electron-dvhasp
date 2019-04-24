#!/bin/bash

echo "正在安装: 冠状动脉生理功能评估软件"
/usr/bin/pkexec dpkg -i $(readlink -f $(dirname $0))/冠状动脉生理功能评估软件.deb
cp $(readlink -f $(dirname $0))/冠状动脉生理功能评估软件.desktop ~/Desktop/
chmod +x ~/Desktop/冠状动脉生理功能评估软件.desktop

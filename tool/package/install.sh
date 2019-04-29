#!/bin/bash

echo "正在安装: 冠状动脉生理功能评估软件"
cp $(readlink -f $(dirname $0))/冠状动脉生理功能评估软件.desktop ~/Desktop/
chmod +x ~/Desktop/冠状动脉生理功能评估软件.desktop
/usr/bin/pkexec bash $(readlink -f $(dirname $0))/installhelper.sh

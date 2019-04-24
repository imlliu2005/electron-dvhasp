#!/bin/bash
set -e
echo "正在卸载: 冠状动脉生理功能评估软件"
/usr/bin/pkexec dpkg -r deepvesselffr
if [$ -eq 126]
then 
echo 'you click cancle'
exit 0
fi
rm ~/Desktop/冠状动脉生理功能评估软件.desktop
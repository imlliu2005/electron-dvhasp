## linux 上的图标问题

两种解决办法

1.强制进行解压安装，然后补齐依赖

sudo dpkg -i google-chrome-stable_current_amd64 --force

sudo apt-get install -f

2.先补齐依赖 libappindicator1，然后在进行相应的解压安装命令

sudo apt-get -f install libappindicator1 libindicator7

## findhasp 插件需要的编译需要和electron的node版本一致
1. 解决办法 electeon-rebuild 参见package.json

## 安装脚本
install.sh
uninstall.sh


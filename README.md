Ionic App Base
=====================

## 参考文档
1. [ionic cli 2.ix文档](https://ionicframework.com/docs/cli/)
2. [cordova 6.x android平台说明文档](https://cordova.apache.org/docs/en/6.x/guide/platforms/android/index.html)

## app开发环境配置
环境搭建前，需要安装好android的开发环境，直接安装android studio就行，它会自动安装android sdk这些，但java需要自己提前安装好，关于cordova的android环境
搭建可以参照[官方说明](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
1. 安装[node.js](https://nodejs.org/zh-cn/download/)
2. 安装Cordova [可以参考cordova的android环境搭建](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)
```bash
npm install -g cordova
```
3. 安装Ionic CLI
```bash
npm install -g ionic
```
> Note: If you see errors you don't understand, you may want to uninstall previous versions of ionic-cli with npm uninstall -g ionic, clear your cache with npm cache clean and then now install ionic-cli with npm install -g ionic

4. 添加ANDROID_HOME环境变量，配置path环境变量
```bash
set ANDROID_HOME=C:\<installation location>\android-sdk-windows
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
```
5. 根据本机中已经安装的android 版本来配置项目运行的android版本
```bash
cordova platform rm android    //卸载
cordova platform add android@^5.0.0 --save  //配置当前项目运行的android版本，根据自己情况而定
```


## 开发环境检查
```bash
ionic info
```

## 通过web的形式来访问应用
```bash
ionic serve
```
打开浏览器，输入 `http://localhost:8100`



##　编译成android的apk应用
1. 为项目指定运行的android版本(根据自己情况，可选配置)
```bash
cordova platform rm android    //卸载
cordova platform add android@^5.0.0 --save  //安装指定版本的android
```
2. 添加android平台到工程
```bash
ionic platform add android
```
3. 构建android应用
```bash
ionic build android
```
> This builds the application, and puts the built apk in the platforms/android/build/outputs folder.
4. 启动模拟器并运行
```bash
ionic run android
```
这时会出现一个命令行窗口[qemu-system-i386.exe](http://www.file.net/process/qemu-system-i386.exe.html)，保持命令行窗口打开状态，等待模拟器启动即可

## 常见问题

### 错误-01
```
Error: Android SDK not found. Make sure that it is installed.      
If it is not at the default location, set the ANDROID_HOME environment variable.
```
**错误原因**
> cordova 6.x以后默认安装的android版本是6.1.x，google最新的sdk和他们不兼容，需要把covdova中android的版本升级到最新6.2.1

**解决方法**
运行如下命令，升级cordova中的android 版本，同时保存android版本到项目中
```bash
`cordova platform rm android`   //卸载旧版本
`cordova platform add android@6.2.1 --save` //安装最新版本cordova android6.2.1
```



### 错误-02
```
Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK
```
**解决方法**
1. 通过`cordova platform ls`命令查看本机已经安装的android平台版本
```bash
//运行命令后显示如下信息：
Installed platforms:

Available platforms:
  amazon-fireos ~3.6.3 (deprecated)
  android ~6.1.1
  blackberry10 ~3.8.0
  browser ~4.1.0
  firefoxos ~3.6.3
  webos ~3.7.0
  windows ~4.4.0
  wp8 ~3.8.2 (deprecated)
```
> 可参照Cordova中和android相关的[官方文档说明](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
2. 指定cordova中的android版本来运行项目
上一步显示cordova中android的版本是6.1.1，查看本机是否安装了对应的android版本，如果本机安装的android版本比cordova中的androd的版本要低
此时需要把cordova中的android版本降级。我本机安装的是android 5.0的模拟器，所以需要把cordova中的android版本降为5.0,通过如下命令来降级，安装新的android平台
```bash
cordova platform rm android    //卸载
cordova platform add android@^5.0.0 --save  //安装指定版本的android
```
安装完成后，通过：cordova platform ls 来查看cordova中的android版本：
``` bash
C:\GitHub\angular2-mobile-app>ionic platform ls
Installed platforms:
  android 5.0.0
Available platforms:
  amazon-fireos ~3.6.3 (deprecated)
  blackberry10 ~3.8.0
  browser ~4.1.0
  firefoxos ~3.6.3
  webos ~3.7.0
  windows ~4.4.0
  wp8 ~3.8.2 (deprecated)
```
> 参考说明：  
Google broke Cordova Android 6.1.x and some other frameworks with their latest sdk tools update.   
Cordova Android 6.2.1 has been released and it's now compatible with latest Android SDK.  
You can update your current incompatible android platform with cordova platform update android@6.2.1  
Or you can remove the existing platform and add the new one (will delete any manual change you did inside yourProject/platforms/android/ folder)  
`cordova platform rm android`  
`cordova platform add android@6.2.1`  
You have to specify the version because current CLI installs 6.1.x by default.    
参考[文章地址](http://stackoverflow.com/questions/42668185/could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-your-andr)


More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/docs/v2/getting-started/) page.

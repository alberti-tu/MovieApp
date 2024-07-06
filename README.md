
# **Movie App**

This is an hybrid mobile application created with React Native to get a movie catalog and interact with in.

## 1. Set up

First of all you need to install its node dependencies, for that reason, install NodeJS in your computer and execute the following comand.

```bash
npm install
```

## 2. Android

### 2.1 Debug

To execute the Android version on virtual machine or physical device execute:

```bash
npm run android
npm start
```

### 2.2 Release

To generate an apk file with the builded application execute:

```bash
npm run android:release
```

or you can custom the app information with:

```bash
npm run android:release -- -PversionName=1.0.0 -PversionCode=1
```

File will be located on /android/build/outputs/apk/release/app-release.apk

## 3. iOS

To execute the iOS version on virtual machine or physical device execute:

```bash
cd ios && pod install 
npm run ios
```
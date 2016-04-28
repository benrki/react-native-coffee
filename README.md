# react-native-coffee

Cloned from https://github.com/pixshatterer/react-native-webpack-starter-kit

## Requirements

- [Node](https://nodejs.org) 4.x or better
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional)
- [Android SDK](https://developer.android.com/sdk/) for Android development (optional)
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or better for Android device testing (optional)

## Stack

- [React Native](http://facebook.github.io/react-native/) for native app development
- [Babel](http://babeljs.io/) for ES6+ support
- [Webpack](https://webpack.github.io/) module loader and bundler
- [Docker](https://www.docker.com/) and [VirtualBox](https://www.virtualbox.org) for Windows-based development

## Installation

Clone repo and install dependencies once your [environment is set-up](https://facebook.github.io/react-native/docs/getting-started.html):

```sh
git clone -o upstream -b master --single-branch \
  https://github.com/benrki/react-native-coffee.git && cd $_
npm i
```

See [Using with Docker](#using-with-docker) for experimental Windows setup.

## Running

Once dependencies are installed, run the starter kit with:

```sh
npm start
```

This will start the React Packager and a [Webpack Dev Server](https://github.com/webpack/webpack-dev-server). The dev server will watch your JS files for changes and automatically lint and generate the `index.[platform].js` files expected by your React Native iOS or Android app.

### iOS

**Status:** All systems go.

Open `ios/App.xcodeproj` in Xcode, build and run the project.

Unlike the app currently generated by `react-native init` this app removes the `UIViewControllerBasedStatusBarAppearance` key to prevent an App Store rejection I received building the [Lumpen Radio] RN iOS app. The key may be added back, if desired.

### Android

**Status:** [Bug in simulator](https://github.com/jhabdas/react-native-webpack-starter-kit/issues/58). Test on actual device using adb with `npm run android-setup-port`.

For android development use the following:

```sh
npm run android-setup-port # Note that this option is available on devices running android 5.0+ (API 21)
react-native run-android
```

If you run into any issues please see the [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) guide for React Native before submitting an issue.

## Testing

As a minimalist seed this project does not introduce a testing framework. Instead it leverages simple static code analysis to help prevent coding mistakes and introduce some good practices for building React Native apps with ES6 and ES7.

Webpack is configured with a pre-loader to lint the application with ESLint using the Babel parser during app development. And the `npm test` command may be run at anytime to lint source code otherwise. See the `.eslintrc` file to adjust [linter rules](http://eslint.org/docs/rules/) to your liking.

## Bundling

Building the app for distribution.

1. Execute `npm run bundle` to generate the [offline JS bundle](https://facebook.github.io/react-native/docs/running-on-device-ios.html#using-offline-bundle).
1. For iOS, update `AppDelegate.m` to load from pre-bundled file on disk.
1. Test the application, create an archive and submit to the store.

## Submitting to Store

Please see [Submitting to App Store](http://habd.as/reflecting-on-react-native-development/#submitting-to-app-store) for instructions on iOS. If you have any good Android instructions, please send a PR this way. Good luck and have fun out there!

## Using with Docker

**Status:** Experimental.

Windows users may experience problems with React Native development. This kit includes a `Dockerfile` which can be used to create a virtualized development environment for building your app on a Windows machine. To use it [set-up Docker Machine](https://docs.docker.com/machine/get-started/) then run the following commands with [cmder](http://cmder.net/) (or similar) to get going:

1. Clone this repo then update `.watchmanconfig` to the following: `{"ignore_dirs": ["node_modules"]}`.
1. Run `docker build --rm .` command from the project root directory to build a virtualized Linunx environment configured for development using this starter kit.
1. Get the ID of the built Docker image by running `docker images` and looking for the most recently created image.
1. Then shell into the box with `docker run -it 09608e4ec865 /bin/bash` (where `09608e4ec865` is the Image ID) and run the app with `npm start`.

If iOS and Android device emulators are not available for your development environment (anything except OS X, basically) consider shipping code directly to a native device using [Exponent](https://exponentjs.com/).


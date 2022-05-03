# Simple sample react native app
Very simple app for interview purpose.

## specification


## setup

```javascript

# Install JavaScript dependencies using yarn
yarn install

# Install iOS dependencies using pod install command from the ios directory
cd ios && pod install
```

## run

bundler

```

```

Android

```
yarn android
```

ios

```
yarn ios
```

with debugger:
```
REACT_DEBUGGER="open -g 'rndebugger://set-debugger-loc?port=8081' ||" npx react-native run-ios
```

### troubleshooting

clear all and do fresh build:

```
watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start --reset-cache
```

## info
- updated Typescript
- added navigation
- added Redux toolikt
- added redux persist
- added theme

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


# TODO
1) better fix of ( `Argument of type 'AsyncThunkAction<any, void, {}>' is not assignable to parameter of type 'AnyAction'`)
- currently solved with TS-ignore

Can be solved also like this:
```javascript
const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootStateType, void, Action>,
) => {
  return {
    onFetchSecondData: () => dispatch(fetchDataSecond()),
  };
};

... then in Component
useEffect(() => {
    if (fetchStatus === 'idle') {
    const kvak = mapDispatchToProps(dispatch);
    kvak.onFetchSecondData();
```

see: [stackoverflow 1](https://stackoverflow.com/questions/70143816/argument-of-type-asyncthunkactionany-void-is-not-assignable-to-paramete)

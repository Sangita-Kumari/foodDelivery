import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
// import {Header} from 'react-native-elements';
import {colors} from './src/global/style';
import Headers from './src/components/Headers';
import SignInScreen from './src/screens/authScreen/signInScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'blue'} /> */}
      {/* <Headers title="My Account" headerType="arrow-left" /> */}
      <SignInScreen />
    </SafeAreaView>
  );
};

export default App;

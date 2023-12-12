import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
// import {Header} from 'react-native-elements';
import {colors} from './src/global/style';
import Headers from './src/components/Headers';
import SignInScreen from './src/screens/authScreen/signInScreen';
import SignInWelcomeScreen from './src/screens/authScreen/SignInWelcomeScreen';
import AuthNavigation from './src/navigation/AuthNavigation';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthNavigation />
    </SafeAreaView>
  );
};

export default App;

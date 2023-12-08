import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Headers from '../../components/Headers';
import normalize from 'react-native-normalize';
import {colors, titleStyle} from '../../global/style';
import Animatable from 'react-native-animatable';
import {Icon} from 'react-native-elements';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Headers title={'My Account'} headerType={'arrow-left'} />
      <View style={{marginTop: normalize(10)}}>
        <Text style={titleStyle}>SignIn</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: normalize(10)}}>
        <Text style={styles.text1}>Pls Enter email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <TextInput style={styles.textInput1} placeholder="Email" />
      <View>
        <Animatable.View>
          <Icon name="lock" type="material" />
        </Animatable.View>
        <TextInput style={styles.textInput1} placeholder="Password" />
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey,
    fontSize: normalize(15),
    // marginTop: normalize(5),
    // marginLeft:normalize(10)
  },
  textInput1: {
    width: '80%',
    borderRadius: normalize(10),
    borderColor: colors.grey,
    borderWidth: 1,
    padding: normalize(5),
    margin: normalize(20),
  },
});

export default SignInScreen;

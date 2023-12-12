import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Headers from '../../components/Headers';
import normalize from 'react-native-normalize';
import {colors, titleStyle} from '../../global/style';
import Animatable from 'react-native-animatable';
import GButton from '../../global/button';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Headers title={'My Account'} headerType={'arrow-left'} />
      <View style={{marginTop: normalize(10)}}>
        {/* <Text style={titleStyle}>SignIn</Text> */}
      </View>
      <View style={{alignItems: 'center', marginTop: normalize(10)}}>
        <Text style={styles.text1}>Pls Enter email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <TextInput style={styles.textInput1} placeholder="Email" />
      <View>
        <Icon name="lock" size={15} color="grey" />
        <TextInput style={styles.textInput1} placeholder="Password" />
      </View>
      <View
        style={{
          marginTop: normalize(10),
        }}>
        <GButton
          title={'SignIn'}
          backgroundColor={colors.buttons}
          width={327}
          color={'#D9D9D9'}
          onPress={''}
          disabled={''}
        />
      </View>
      <Text
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          alignSelf: 'center',
          marginTop: normalize(10),
        }}>
        Forgot Password?
      </Text>
      <Text
        style={{
          color: '#000000',
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: normalize(20),
        }}>
        OR
      </Text>
      {/* <View
        style={{
          marginTop: normalize(20),
        }}>
        <GButton
          title={'SignIn with Facebook'}
          backgroundColor={'blue'}
          width={327}
          color={'#D9D9D9'}
          onPress={''}
          disabled={''}
        />
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: normalize(10),
        }}>
        <View style={{position: 'absolute', left: 80, zIndex: 20}}>
          <Icon name="facebook" size={20} color="pink" />
        </View>
        <View style={{zIndex: -1}}>
          <GButton
            title={`Sign In with facebook`}
            backgroundColor={'blue'}
            width={327}
            color={'#D9D9D9'}
            onPress={''}
            disabled={''}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: normalize(20),
        }}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{position: 'absolute', left: 80, zIndex: 20}}>
            <Icon name="google" size={20} color="pink" />
          </View>
          <View style={{zIndex: -1}}>
            <GButton
              title={`Sign In with Google`}
              backgroundColor={'red'}
              width={327}
              color={'#D9D9D9'}
              onPress={''}
              disabled={''}
            />
          </View>
        </View>
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
    borderRadius: normalize(10),
    borderColor: colors.grey,
    borderWidth: 1,
    padding: normalize(5),
    margin: normalize(10),
    alignSelf: 'center',
    height: normalize(48),
    width: normalize(327),
  },
});

export default SignInScreen;

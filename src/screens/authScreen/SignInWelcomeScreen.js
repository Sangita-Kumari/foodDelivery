import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import GButton from '../../global/button';
import {colors} from '../../global/style';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';

const SignInWelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3, marginTop: normalize(20)}}>
        <Text style={styles.title}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.title}>In YOUR AREA </Text>
      </View>
      <View style={{flex: 8, justifyContent: 'center'}}>
        <Swiper>
          <View style={{flex: 1}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NsuFbv3CDY0iOLtiyvZYw6DSdr8EzOVzn_ZzfGO7DQ&s',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </Swiper>
        <View style={{flex: 1}}>
          <View
            style={{
              position: 'absolute',
              bottom: normalize(100),
              alignSelf: 'center',
            }}>
            <GButton
              title={`Sign In `}
              backgroundColor={colors.buttons}
              width={327}
              color={'white'}
              // onPress={''}
              onPress={() => navigation.navigate('SignIn')}
              disabled={''}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: normalize(30),
              alignSelf: 'center',
            }}>
            <GButton
              title={`Create your Account`}
              backgroundColor={colors.white}
              width={327}
              color={colors.black}
              onPress={''}
              disabled={''}
              borderColor={colors.black}
              borderWidth={1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.title,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
  },
});

export default SignInWelcomeScreen;

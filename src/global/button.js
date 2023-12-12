import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import normalize from 'react-native-normalize';
import { colors } from './style';
// import {CustomFonts} from '../../data/DynamicData';

const GButton = ({
  onPress,
  title,
  width,
  backgroundColor,
  color,
  activeOpacity,
  underlayColor,
  borderColor,
  borderWidth,
}) => {
  return (
    <TouchableHighlight
      style={{
        ...styles.buttonContainer,
        width: normalize(width),
        backgroundColor: backgroundColor,
        borderColor: borderColor ? borderColor : '',
        borderWidth: borderWidth ? borderWidth : 0,
        activeOpacity: activeOpacity ? activeOpacity : 0,
      }}
      underlayColor={underlayColor ? underlayColor : 'grey'}
      onPress={onPress}>
      <View>
        <Text
          style={{...styles.buttonText, color: color}}
          allowFontScaling={false}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default GButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: normalize(48),
    alignSelf: 'center',
    borderRadius: normalize(8),
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    // activeOpacity:activeOpacity
  },
  buttonText: {
    fontSize: moderateScale(16),
    lineHeight: scale(16),
    fontWeight: '500',
    textAlign: 'center',
    // fontFamily: CustomFonts.medium,
  },
});

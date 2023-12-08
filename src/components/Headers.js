import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from '../global/style';
import {Icon} from 'react-native-elements';

const Headers = ({title, headerType}) => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.buttons} />

      <Icon
        type="material-community"
        name={headerType}
        color={colors.headerText}
        size={20}
      />
      <Text> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
  },
});
export default Headers;

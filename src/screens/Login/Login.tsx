import {horizontalScale, moderateScale, verticalScale} from '@utils/metric';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login with Google or Facebook</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <GoogleLogin />
        <FacebookLogin />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(15),
  },
  logo: {
    fontWeight: 'bold',
    fontSize: moderateScale(30),
    color: '#fb5b5a',
    marginBottom: verticalScale(50),
  },
});

export default LoginScreen;

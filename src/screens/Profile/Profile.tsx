import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomHeader from '@components/CustomHeader/CustomHeader';
import {horizontalScale, moderateScale, verticalScale} from '@utils/metric';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

export default function Authenticated() {
  const [isGoogleSignIn, setIsGoogleSignIn] = useState(false);
  const user = auth().currentUser;

  const {navigate} = useNavigation();

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setIsGoogleSignIn(isSignedIn);
  };

  useEffect(() => {
    isSignedIn();
  }, []);

  const logOut = async () => {
    isGoogleSignIn && (await GoogleSignin.signOut());

    auth().signOut();
    navigate('Login' as never);
  };

  return (
    <>
      <CustomHeader title="Profile" />
      <View style={styles.screen}>
        <Text style={styles.title}>You're Logged In</Text>
        <Image source={{uri: user?.photoURL}} style={styles.image} />
        <Text style={styles.text}>{user?.displayName}</Text>
        <Text style={styles.text}>{user?.email}</Text>
        <View style={{marginTop: 30}}>
          <Button title="Signout" onPress={logOut} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fb5b5a',
    fontSize: moderateScale(25),
    marginBottom: verticalScale(30),
  },
  image: {
    height: horizontalScale(150),
    width: verticalScale(150),
    borderRadius: moderateScale(150),
    marginBottom: verticalScale(20),
  },
  text: {
    fontSize: moderateScale(20),
  },
});

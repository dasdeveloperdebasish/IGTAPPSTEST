import {horizontalScale, moderateScale, verticalScale} from '@utils/metric';
import React, {useRef, useState} from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrCode = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  let myQRCode = useRef();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Generation of QR Code in React Native
        </Text>
        <QRCode
          getRef={ref => (myQRCode = ref)}
          value={qrvalue ? qrvalue : 'NA'}
          size={250}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
        <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={inputText => setInputText(inputText)}
          placeholder="Enter Any Value"
          value={inputText}
        />
        <View style={{marginTop: verticalScale(20)}}>
          <Button
            title="Generate QrCode"
            onPress={() => setQrvalue(inputText)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default QrCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    marginBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(25),
    color: '#fb5b5a',
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: verticalScale(40),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(35),
    margin: verticalScale(10),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(20),
  },
});

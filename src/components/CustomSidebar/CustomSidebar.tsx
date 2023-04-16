import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomDrawerContent = ({navigation}: any) => {
  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        onPress={() => navigation.closeDrawer()}
        style={styles.closeButton}>
        <Ionicons name="close-outline" size={30} />
      </TouchableOpacity>
      <View style={styles.drawerItems}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.drawerItem}>
          <Ionicons name="home-outline" size={30} />
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('QrCode')}
          style={styles.drawerItem}>
          <Ionicons name="qr-code" size={30} />
          <Text style={styles.drawerItemText}>QrCode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.drawerItem}>
          <Ionicons name="person-outline" size={30} />
          <Text style={styles.drawerItemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawer: {
    width: '80%',
    backgroundColor: '#fff',
  },
  drawerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 20,
  },
  drawerItems: {
    marginTop: 50,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  drawerItemText: {
    fontSize: 20,
    marginLeft: 20,
  },
});

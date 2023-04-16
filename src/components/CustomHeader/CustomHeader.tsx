import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({title}: any) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 60,
      }}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{paddingLeft: 20}}>
        <Ionicons name="menu-outline" size={30} />
      </TouchableOpacity>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 40}}>
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;

import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity>
      <Image
        source={icon}
        resizeMode="contain"
        style={{width: 25, height: 25, tintColor: COLORS.white}}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

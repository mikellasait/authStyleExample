import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const IconTextButton = ({constainerStyle, icon, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: COLORS.gray500,
        ...constainerStyle,
      }}
      onPress={onPress}>
      <Image source={icon} style={{width: 30, height: 30, borderRadius: 15}} />
      <Text
        style={{...FONTS.l2, marginLeft: SIZES.radius, color: COLORS.gray50}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;

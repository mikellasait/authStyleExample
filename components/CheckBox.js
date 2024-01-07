import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const CheckBox = ({containerStyle, isSelected, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', ...containerStyle}}
      onPress={onPress}>
      <Image
        source={isSelected ? icons.checkbox_on : icons.checkbox_off}
        style={{width: 20, height: 20}}
      />
      {label && (
        <Text
          style={{
            ...FONTS.ps2,
            marginLeft: SIZES.base,
            color: COLORS.contentPrimary,
          }}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;

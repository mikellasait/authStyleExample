import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const FormInput = ({
  rootContainerStyle,
  containerStyle,
  inputContainerStyle,
  placeHolder,
  inputStyle,
  label = '',
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  onPress,
  editable,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  maxLength,
  placeHolderTextColor = COLORS.contentTertiary,
}) => {
  return (
    <View style={{...rootContainerStyle}}>
      {label != '' && (
        <Text style={{...FONTS.l3, color: COLORS.contentPrimary}}>{label}</Text>
      )}
      <View style={{marginTop: SIZES.base, ...containerStyle}}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            backgroundColor: COLORS.backgroundSecondary,
            ...inputContainerStyle,
          }}>
          {prependComponent}
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 0,
              color: COLORS.contentPrimary,
              ...FONTS.pr2,
              ...inputStyle,
            }}
            value={value}
            placeholder={placeHolder}
            placeholderTextColor={placeHolderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            onChangeText={text => onChange(text)}
            onPressIn={onPress}
            editable={editable}
          />
          {appendComponent}
        </View>
      </View>
    </View>
  );
};

export default FormInput;

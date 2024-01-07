import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, FONTS, SIZES, constants, icons} from '../../constants';
import {CheckBox, FormInput, IconButton, TextButton} from '../../components';

const Login = ({setSelectedScreen}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMeChecked, setRememberMeChecked] = useState(false);

  function renderTitleAndDescription() {
    return (
      <View>
        <Text style={{...FONTS.h2, color: COLORS.contentPrimary}}>
          Welcome back
        </Text>
        <Text style={{...FONTS.ps2, color: COLORS.contentInverseSecondary}}>
          Enter your phone number to login
        </Text>
      </View>
    );
  }

  function renderRememberMeAndForgotPassword() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: SIZES.radius,
        }}>
        <CheckBox
          label="Remember me"
          isSelected={rememberMeChecked}
          onPress={() => setRememberMeChecked(!rememberMeChecked)}
        />
        <TextButton
          label="Forgot Password"
          contentContainerStyle={{height: 30, backgroundColor: null}}
          labelStyle={{color: COLORS.primary500}}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.pr2, color: COLORS.contentSecondary}}>
            If you don't have an account{' '}
          </Text>
          <TextButton
            label="Sign Up"
            contentContainerStyle={{
              height: null,
              marginleft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary400,
            }}
            onPress={() => setSelectedScreen(constants.register)}
          />
        </View>
        <TextButton
          label="Sign In"
          contentContainerStyle={{
            marginTop: SIZES.padding,
            marginleft: SIZES.base,
            borderRadius: SIZES.base,
          }}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={-300}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
        }}>
        {renderTitleAndDescription()}
        <FormInput
          rootContainerStyle={{marginTop: SIZES.padding * 2}}
          label="Phone number"
          placeHolder="Enter your phone Number"
          value={phoneNumber}
          onChange={text => setPhoneNumber(text)}
          prependComponent={
            <Image
              source={icons.smartphone}
              style={{width: 25, height: 25, marginRight: SIZES.base}}
            />
          }
        />
        <FormInput
          rootContainerStyle={{marginTop: SIZES.padding}}
          label="Password"
          placeHolder="Enter your password"
          value={password}
          secureTextEntry={!isVisible}
          onChange={text => setPassword(text)}
          prependComponent={
            <Image
              source={icons.lock}
              style={{width: 25, height: 25, marginRight: SIZES.base}}
            />
          }
          appendComponent={
            <IconButton
              containerStyle={{alignItems: 'flex-end'}}
              icon={isVisible ? icons.eye_off : icons.eye}
              iconStyle={{tintColor: COLORS.contentPrimary}}
              onPress={() => setIsVisible(!isVisible)}
            />
          }
        />
        {renderRememberMeAndForgotPassword()}
      </KeyboardAwareScrollView>
      {renderFooter()}
    </View>
  );
};

export default Login;

import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, SIZES, FONTS, icons, constants} from '../../constants';
import {Image, Text, View} from 'react-native';
import {FormInput, IconButton, TextButton} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Register = ({setSelectedScreen, onRegister}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  function renderTitleAndDescription() {
    return (
      <View>
        <Text style={{...FONTS.h2, color: COLORS.contentPrimary}}>Join us</Text>
        <Text style={{...FONTS.ps2, color: COLORS.contentPrimary}}>
          All fields are required unless otherwise noted
        </Text>
      </View>
    );
  }

  function renderFormInputs() {
    return (
      <View>
        <FormInput
          rootContainerStyle={{marginTop: SIZES.padding}}
          label="Phone Number"
          placeHolder="Enter your phone number"
          value={phoneNumber}
          onChange={value => setPhoneNumber(value)}
          prependComponent={
            <Image
              source={icons.smartphone}
              style={{width: 25, height: 25, marginRight: SIZES.base}}
            />
          }
        />
        <FormInput
          rootContainerStyle={{marginTop: SIZES.padding}}
          label="Email address"
          placeHolder="Enter your email address"
          value={email}
          onChange={value => setEmail(value)}
          prependComponent={
            <Image
              source={icons.mail}
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
          onChange={value => setPassword(value)}
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
              iconStyle={{
                tintColor: COLORS.contentPrimary,
              }}
              onPress={() => setIsVisible(!isVisible)}
            />
          }
        />
      </View>
    );
  }

  function renderTermsAndPolicy() {
    return (
      <View style={{marginTop: SIZES.padding, alignItems: 'center'}}>
        <Text style={{...FONTS.ps2, color: COLORS.contentSecondary}}>
          By registering, you agree to our
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={{...FONTS.l2, color: COLORS.primary400}}>Terms</Text>
          </TouchableOpacity>
          <Text
            style={{
              ...FONTS.ps2,
              marginHorizontal: 4,
              color: COLORS.contentSecondary,
            }}>
            and
          </Text>
          <TouchableOpacity>
            <Text style={{...FONTS.l2, color: COLORS.primary400}}>
              Privacy Policies
            </Text>
          </TouchableOpacity>
        </View>
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
            Already have an account
          </Text>
          <TextButton
            label="Login"
            contentContainerStyle={{
              height: null,
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary400,
            }}
            onPress={() => setSelectedScreen(constants.login)}
          />
        </View>
        <TextButton
          label="Register"
          contentContainerStyle={{
            marginTop: SIZES.padding,
            marginLeft: SIZES.base,
            borderRadius: SIZES.radius,
          }}
          onPress={() => onRegister()}
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
        {renderFormInputs()}
        {renderTermsAndPolicy()}
      </KeyboardAwareScrollView>
      {renderFooter()}
    </View>
  );
};

export default Register;

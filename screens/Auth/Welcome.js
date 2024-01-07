import {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, SIZES, FONTS, images, icons, constants} from '../../constants';
import {IconTextButton, TextButton, Authmodal} from '../../components';
import {MotiView, useAnimationState} from 'moti';

const Welcome = ({navigation}) => {
  const [selectedScreen, setSelectedScreen] = useState('');

  const bottomSheetModalRef = useRef(null);

  const showModal = useCallback(screen => {
    setSelectedScreen(screen);
    bottomSheetModalRef.current.present();
  }, []);

  const hideModal = useCallback(() => {
    scaleAnimationState.transitionTo('normal');
    bottomSheetModalRef.current.dismiss();
  }, []);

  const scaleAnimationState = useAnimationState({
    normal: {
      transform: [{scale: 1}],
    },
    scaleDown: {
      transform: [{scale: 0.9}],
      borderRadius: 20,
    },
  });

  useEffect(() => {
    scaleAnimationState.transitionTo('normal');
    navigation.navigate('Otp');
  }, []);

  function onRegister() {
    hideModal();
  }

  function renderHeaderImage() {
    return (
      <Image source={images.train} style={{width: SIZES.width, height: 250}} />
    );
  }

  function renderLoginDetails() {
    return (
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{...FONTS.h2, color: COLORS.gray50}}>Log in</Text>
          <Text style={{...FONTS.ps3, color: COLORS.gray50}}>
            Please choose how you would like to log in
          </Text>
        </View>
        <View>
          <IconTextButton
            icon={icons.smartphone}
            label={'Continue with Phone Number'}
            constainerStyle={{
              borderColor: COLORS.primary500,
              backgroundColor: COLORS.primary500,
            }}
            onPress={() => {
              setTimeout(() => {
                scaleAnimationState.transitionTo('scaleDown');
              }, 100);
              showModal(constants.login);
            }}
          />
          <IconTextButton
            icon={icons.apple_logo}
            label={'Continue with Apple'}
            constainerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={null}
          />
          <IconTextButton
            icon={icons.google_logo}
            label={'Continue with Google'}
            constainerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={null}
          />
          <IconTextButton
            icon={icons.fb_logo}
            label={'Continue with Facebook'}
            constainerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={null}
          />
        </View>
        <View>
          <Text
            style={{
              ...FONTS.l3,
              textAlign: 'center',
              color: COLORS.gray400,
            }}>
            Don't have an account?
          </Text>
          <TextButton
            label={'Create an Account'}
            contentContainerStyle={{marginTop: SIZES.padding}}
            onPress={() => {
              showModal(constants.register);
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.gray400}}>
      <MotiView
        state={scaleAnimationState}
        style={{flex: 1, overflow: 'hidden', backgroundColor: COLORS.gray900}}>
        {renderHeaderImage()}
        {renderLoginDetails()}
        <Authmodal
          bottomSheetModalRef={bottomSheetModalRef}
          hideModal={hideModal}
          selectedScreen={selectedScreen}
          setSelectedScreen={setSelectedScreen}
          onRegister={onRegister}
        />
      </MotiView>
    </View>
  );
};

export default Welcome;

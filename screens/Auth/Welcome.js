import {useCallback, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, SIZES, FONTS, images, icons, constants} from '../../constants';
import {IconTextButton, TextButton, Authmodal} from '../../components';

const Welcome = () => {
  const bottomSheetModalRef = useRef(null);

  const showModal = useCallback(screen => {
    bottomSheetModalRef.current.present();
  }, []);

  const hideModal = useCallback(screen => {
    bottomSheetModalRef.current.dismiss();
  }, []);

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
            onPress={() => showModal(constants.login)}
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
            onPress={null}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.gray400}}>
      <View
        style={{flex: 1, overflow: 'hidden', backgroundColor: COLORS.gray900}}>
        {renderHeaderImage()}
        {renderLoginDetails()}
        <Authmodal
          bottomSheetModalRef={bottomSheetModalRef}
          hideModal={hideModal}
        />
      </View>
    </View>
  );
};

export default Welcome;

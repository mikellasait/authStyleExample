import {View, Text, Platform} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {COLORS, SIZES, constants, icons} from '../../constants';
import {IconButton} from '..';
import {Login, Register} from '../../screens';
import {MotiView} from 'moti';

const Authmodal = ({
  bottomSheetModalRef,
  hideModal,
  selectedScreen,
  setSelectedScreen,
  onRegister,
}) => {
  const snapPoint = useMemo(() => ['95%'], []);

  const renderBackdrop = useCallback(props => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.3}
      pressBehavior={'none'}
    />
  ));

  function renderHeader() {
    return (
      <View>
        <View>
          <IconButton
            icon={icons.angle_arrow_left}
            onPress={() => hideModal()}
          />
        </View>
      </View>
    );
  }

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoint}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        borderRadius: 0,
        backgroundColor: 'transparent',
      }}
      handleComponent={() => <View />}
      enablePanDownToClose={false}>
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          backgroundColor: COLORS.backgroundPrimary,
        }}>
        {renderHeader()}
        <View style={{flex: 1}}>
          <MotiView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: selectedScreen === constants.login ? 2 : 1,
            }}
            animate={{
              left: selectedScreen == constants.login ? 0 : -100,
              opacity: selectedScreen == constants.login ? 1 : 0,
            }}
            transition={{
              type: 'timing',
              duration: 500,
            }}>
            <Login setSelectedScreen={setSelectedScreen} />
          </MotiView>
          <MotiView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: selectedScreen === constants.register ? 2 : 1,
            }}
            animate={{
              left: selectedScreen == constants.register ? 0 : 100,
              opacity: selectedScreen == constants.register ? 1 : 0,
            }}
            transition={{
              type: 'timing',
              duration: 500,
            }}>
            <Register
              setSelectedScreen={setSelectedScreen}
              onRegister={onRegister}
            />
          </MotiView>
          <MotiView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: selectedScreen === constants.forgot_password ? 2 : 1,
            }}
            animate={{
              left: selectedScreen == constants.forgot_password ? 0 : 100,
              opacity: selectedScreen == constants.forgot_password ? 1 : 0,
            }}
            transition={{
              type: 'timing',
              duration: 500,
            }}>
            <Login setSelectedScreen={setSelectedScreen} />
          </MotiView>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default Authmodal;

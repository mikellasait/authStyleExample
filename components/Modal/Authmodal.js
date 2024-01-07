import {View, Text, Platform} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {COLORS, SIZES, icons} from '../../constants';
import {IconButton} from '..';
import {Login} from '../../screens';

const Authmodal = ({bottomSheetModalRef, hideModal}) => {
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
        <Login />
      </View>
    </BottomSheetModal>
  );
};

export default Authmodal;

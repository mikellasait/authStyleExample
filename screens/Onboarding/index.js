import React, {useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {constants, COLORS, SIZES, FONTS} from '../../constants';
import {FlatList} from 'react-native-gesture-handler';
import {Path, Svg} from 'react-native-svg';
import {TextButton} from '../../components';

const Onboarding = ({navigation}) => {
  const crontolX = SIZES.width / 2;

  const [isLastItem, setIsLastItem] = useState(false);

  const currentIndex = useRef(0);
  const screenFlatListRef = useRef();
  const titleFlatListRef = useRef();

  const handleNextPress = () => {
    if (currentIndex.current < constants.onboarding_screens.length - 1) {
      currentIndex.current += 1;
      const offset = currentIndex.current * SIZES.width;

      screenFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });
      titleFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });

      if (currentIndex.current === constants.onboarding_screens.length - 1)
        setIsLastItem(true);
    } else {
      navigation.navigate('Welcome');
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 2, backgroundColor: COLORS.primary50}}>
        <FlatList
          ref={screenFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={item => `onboarding-phone-${item.id}`}
          renderItem={({item, index}) => (
            <View style={{width: SIZES.width, alignItems: 'center'}}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  marginTop: SIZES.padding * 3,
                  width: SIZES.width * 0.8,
                  height: SIZES.height * 0.8,
                }}
              />
              <Svg
                style={{position: 'absolute', top: -100}}
                width={SIZES.width}
                height={100}>
                <Path
                  d={`M 0 20 Q ${crontolX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
                  fill={COLORS.gray900}
                />
              </Svg>
            </View>
          )}
        />
      </View>
      <View style={{flex: 1, backgroundColor: COLORS.gray900}}>
        <FlatList
          ref={titleFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={item => `onboarding-title-${item.id}`}
          renderItem={({item, index}) => (
            <View
              style={{
                paddingHorizontal: SIZES.radius,
                width: SIZES.width,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.h1,
                  textAlign: 'center',
                  color: COLORS.primary100,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.pr2,
                  marginTop: SIZES.radius,
                  textAlign: 'center',
                  color: COLORS.primary100,
                }}>
                {item.desc}
              </Text>
            </View>
          )}
        />
        <TextButton
          label={isLastItem ? 'Get Started' : 'Next'}
          contentContainerStyle={{
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
          onPress={handleNextPress}
        />
      </View>
    </View>
  );
};

export default Onboarding;

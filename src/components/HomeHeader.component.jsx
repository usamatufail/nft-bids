import { View, Text, Image, TextInput } from 'react-native';

import { COLORS, FONTS, SIZES, assets } from '../constants';

export const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      {/* Inner View For Logo */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image source={assets.logo} resizeMode="contain" style={{ width: 90, height: 25 }} />

        {/* Person Logo Part */}
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              left: 0,
            }}
          />
        </View>
      </View>

      {/* Greeting */}
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, Sam 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      {/* Search Bar */}
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image source={assets.search} resizeMode="contain" style={{ width: 20, height: 20, marginRight: SIZES.base }} />
          <TextInput placeholder="Search NFTs" style={{ flex: 1 }} onChangeText={onSearch} />
        </View>
      </View>
    </View>
  );
};

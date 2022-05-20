import { View, Text, Image } from 'react-native';
import { CircleButton, SubInfo, EthPrice, NFTTitle } from 'components';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';

export const NFTCard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      {/* Image Part */}
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      {/* Sub Info */}
      <SubInfo />
    </View>
  );
};

import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from 'components';

export const Home = ({ navigation }) => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) {
      return setNftData(NFTData);
    } else {
      const filteredData = NFTData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredData.length) {
        return setNftData(filteredData);
      } else {
        setNftData(NFTData);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        {/* NFT List */}
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => (
              <NFTCard data={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item?.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        {/* Background */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          <View />
        </View>
      </View>
    </SafeAreaView>
  );
};

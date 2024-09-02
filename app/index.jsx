import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, FlatList, useWindowDimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const data = [
    { id: 1, text1: "Find your dream Washer with us 👍", text2: "Search among millions of professionals and find your perfect match here." },
    { id: 2, text1: "Search among millions of professionals", text2: "Discover top-rated services across all fields." },
    { id: 3, text1: "Find your perfect match here", text2: "Connect with the best service providers in your area." },
  ];

  const renderText = ({ item }) => (
    <View style={{ width, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center', color: 'black', marginBottom: 8 }}>{item.text1}</Text>
      <Text style={{ fontSize: 19, textAlign: 'center', color: 'grey' }}>{item.text2}</Text>
    </View>
  );

  const onScroll = (event) => {
    const slideSize = width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(index);
  };

  const getItemLayout = (_, index) => ({
    length: width,
    offset: width * index,
    index,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={{ uri: 'https://your-image-url.com' }} 
          style={{ width: '100%', height: '100%' }} 
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={renderText}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          getItemLayout={getItemLayout}
          bounces={false}
        />
        <View style={{ flexDirection: 'row', marginVertical: 20 }} pointerEvents="none">
          {data.map((_, index) => (
            <View
              key={index}
              style={{
                height: 8,
                width: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor: currentIndex === index ? '#FF3B30' : '#CCCCCC',
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#007BFF', paddingVertical: 16, paddingHorizontal: 40, borderRadius: 30, marginBottom: 16 }}
          onPress={() => router.push('/loginScreen3')}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Let's Go</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

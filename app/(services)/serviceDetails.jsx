import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const ServiceDetailsScreen = () => {
  const [selectedWash, setSelectedWash] = useState('allCarWash');
  const router = useRouter();

  const [expanded, setExpanded] = useState({
    windowsCarWash: false,
    allCarWash: true,
    premiumCar: false,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  const screenWidth = Dimensions.get('window').width;

  const selectWash = (service) => {
    setSelectedWash(service);
  };

  const toggleExpand = (service) => {
    setExpanded({ ...expanded, [service]: !expanded[service] });
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Image Slider */}
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
            setCurrentImageIndex(slideIndex);
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width: screenWidth, height: 300 }}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        <View className="flex-row justify-center mt-2">
          {images.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </View>
      </View>

      <View className="px-5 py-5">

        {/* Service Title and Description */}
        <View>
          <Text className="text-xl font-bold mb-1">HOME CLEANING</Text>
          <View className="flex-row items-center mb-4">
            <Text className="text-yellow-400  text-md">⭐⭐⭐⭐⭐</Text>
            <Text className="text-gray-500 ml-2">(89)</Text>
          </View>
          <Text className="font-semibold text-lg mb-2">Description</Text>
          <Text className="text-gray-500 mb-8">
            Experience premium car cleaning services with Cleanow Wash. Our expert team ensures your car looks spotless
            inside and out. Book now for a top-quality clean.
          </Text>
        </View>

        {/* Location */}
        <View className="mb-12">
          <Text className="font-semibold text-lg mb-1">Location</Text>
          <View className="flex-row items-center">
            <View className="w-36 h-24 bg-gray-300 rounded-md mr-3 justify-center items-center">
              <Text className="text-blue-500 text-lg">📍</Text>
            </View>
            <View>
              <Text className="font-semibold">Cleanow Wash</Text>
              <Text className="text-gray-500 mb-4">Lyon, France</Text>
              <TouchableOpacity>
                <Text className="text-blue-500">Open in Maps</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Service Options */}
        {['windows Car Wash', 'all Car Wash', 'premium Car wash'].map((service) => (
          <TouchableOpacity
            key={service} 
            className={`mb-5 p-4 border rounded-3xl ${
              selectedWash === service ? 'border-blue-500' : 'border-gray-200'
            }`}
            onPress={() => selectWash(service)}
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-500 text-lg">{service.toUpperCase().replace('_', ' ')}</Text>
              <CheckBox
                value={selectedWash === service}
                onValueChange={() => selectWash(service)}
                color={selectedWash === service ? '#3b82f6' : undefined}
              />
            </View>
            <Text className="text-lg mb-2 font-semibold">${service === 'windows Car Wash' ? '30' : service === 'all Car Wash' ? '50' : '100'}</Text>
            <Text className="text-gray-500 mb-2">
              {service === 'windows Car Wash' 
                ? 'Offering 50 GB of storage, standard customer support, and basic encryption.'
                : service === 'all Car Wash'
                ? 'Upgrade to our Standard Plan for 100 GB of storage, priority customer support.'
                : 'The ultimate with our Premium Plan, featuring 200 GB of storage, VIP customer support.'}
            </Text>
            <TouchableOpacity onPress={() => toggleExpand(service)}>
              <Text className="text-black font-semibold">
                {expanded[service] ? 'Hide Features ↑' : 'See Features ↓'}
              </Text>
            </TouchableOpacity>
            {expanded[service] && (
              <View className="mt-3">
                <Text className="text-gray-500 mb-2">✔️ 100 GB Storage: Spacious room for all your files</Text>
                <Text className="text-gray-500 mb-2">✔️ Priority Support: Swift assistance whenever you need it</Text>
                <Text className="text-gray-500 mb-2">✔️ Enhanced Security: Advanced encryption for data protection</Text>
                <Text className="text-gray-500 mb-2">✔️ 14 Day Version History: Confidence in file revisions</Text>
                <Text className="text-gray-500 mb-2">✔️ Ad-Free Experience: Uninterrupted focus on your tasks</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        {/* Book Now Button */}
        <View className="flex-row items-center justify-between px-5 py-5 bg-white">
          <TouchableOpacity className="w-12 h-12 bg-gray-200 rounded-full justify-center items-center">
            <Text className="text-gray-600">💬</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('booking')} className="flex-1 bg-blue-500 rounded-full py-3 items-center ml-4">
            <Text className="text-white text-lg font-semibold">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className ="absolute top-8 left-4 right-4 px-2">
            <View className='pb-8'>
                <TouchableOpacity>
                    <Feather name="arrow-left" onPress={() => router.back()} size={24} color='black' />
                </TouchableOpacity>
            </View>
      </View>
    </ScrollView>
  );
};

export default ServiceDetailsScreen;

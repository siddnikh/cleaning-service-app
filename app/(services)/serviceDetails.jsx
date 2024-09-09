import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import CheckBox from 'expo-checkbox';

const ServiceDetailsScreen = () => {
  const [checked, setChecked] = useState({
    windowsCarWash: false,
    allCarWash: true,
    premiumCar: false,
  });

  const toggleCheckbox = (service) => {
    setChecked({ ...checked, [service]: !checked[service] });
  };

  return (
    <ScrollView className="flex-1 bg-white px-5 py-5">
      {/* Back Button and Image Slider */}
      <View className="mb-5">
        <View className="flex-row items-center mb-5">
          <TouchableOpacity>
            {/* Back Button */}
            <Text className="text-2xl">{'<'}</Text>
          </TouchableOpacity>
          {/* Placeholder for Image Slider */}
          <View className="flex-1 mx-3 h-40 bg-gray-200 rounded-lg justify-center items-center">
            <Text>Image Slider</Text>
          </View>
        </View>
      </View>

      {/* Service Title and Description */}
      <View>
        <Text className="text-2xl font-bold mb-1">HOME CLEANING</Text>
        <View className="flex-row items-center mb-2">
          <Text className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</Text>
          <Text className="text-gray-500 ml-2">(89)</Text>
        </View>
        <Text className="font-semibold text-lg mb-1">Description</Text>
        <Text className="text-gray-600 mb-5">
          Experience premium car cleaning services with Cleanow Wash. Our expert team ensures your car looks spotless
          inside and out. Book now for a top-quality clean.
        </Text>
      </View>

      {/* Location */}
      <View className="mb-5">
        <Text className="font-semibold text-lg mb-1">Location</Text>
        <View className="flex-row items-center">
          <View className="w-12 h-12 bg-gray-300 rounded-full mr-3 justify-center items-center">
            <Text className="text-blue-500 text-lg">📍</Text>
          </View>
          <View>
            <Text className="font-semibold">Cleanow Wash</Text>
            <Text className="text-gray-500">Lyon, France</Text>
            <TouchableOpacity>
              <Text className="text-blue-500">Open in Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Service Options */}
      <View className="mb-5 p-4 border rounded-lg border-gray-200">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold">WINDOWS CAR WASH</Text>
          <CheckBox
            value={checked.windowsCarWash}
            onValueChange={() => toggleCheckbox('windowsCarWash')}
          />
        </View>
        <Text className="text-lg font-semibold">$30</Text>
        <Text className="text-gray-500">
          Offering 50 GB of storage, standard customer support, and basic encryption.
        </Text>
        <TouchableOpacity>
          <Text className="text-blue-500">See Features ↓</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-5 p-4 border rounded-lg border-blue-500">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold">ALL CAR WASG</Text>
          <CheckBox
            value={checked.allCarWash}
            onValueChange={() => toggleCheckbox('allCarWash')}
          />
        </View>
        <Text className="text-lg font-semibold">$50</Text>
        <Text className="text-gray-500">
          Upgrade to our Standard Plan for 100 GB of storage, priority customer support.
        </Text>
        <TouchableOpacity>
          <Text className="text-blue-500">Hide Features ↑</Text>
        </TouchableOpacity>
        <View className="mt-3">
          <Text className="text-blue-500">✔️ 100 GB Storage Spacious room for all your files.</Text>
          <Text className="text-blue-500">✔️ Priority Support Swift assistance whenever you need it.</Text>
          <Text className="text-blue-500">✔️ Enhanced Security Advanced encryption for data protection.</Text>
          <Text className="text-blue-500">✔️ 14 Day Version History Confidence in file revisions.</Text>
          <Text className="text-blue-500">✔️ Ad-Free Experience Uninterrupted focus on your tasks.</Text>
        </View>
      </View>

      <View className="mb-5 p-4 border rounded-lg border-gray-200">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold">Premium Car</Text>
          <CheckBox
            value={checked.premiumCar}
            onValueChange={() => toggleCheckbox('premiumCar')}
          />
        </View>
        <Text className="text-lg font-semibold">$100</Text>
        <Text className="text-gray-500">
          The ultimate with our Premium Plan, featuring 200 GB of storage, VIP customer support.
        </Text>
        <TouchableOpacity>
          <Text className="text-blue-500">See Features ↓</Text>
        </TouchableOpacity>
      </View>

      {/* Book Now Button */}
      <View className="flex-row items-center justify-between px-5 py-5 bg-white">
        <TouchableOpacity className="w-12 h-12 bg-gray-200 rounded-full justify-center items-center">
          <Text className="text-gray-600">💬</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-blue-500 rounded-full py-3 items-center ml-4">
          <Text className="text-white text-lg font-semibold">Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ServiceDetailsScreen;

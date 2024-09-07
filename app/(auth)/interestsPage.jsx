import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const interests = [
  { id: 1, name: 'Car' },
  { id: 2, name: 'House' },
  { id: 3, name: 'Garden' },
  { id: 4, name: 'Pool' },
  { id: 5, name: 'Boat interior' },
  { id: 6, name: 'Windows' },
];

const InterestSelectionScreen = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interestId) => {
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(interestId)
        ? prevSelected.filter((id) => id !== interestId)
        : [...prevSelected, interestId]
    );
  };

  const renderInterestItem = ({ item }) => (
    <TouchableOpacity
      className={`w-44 h-44 bg-gray-200 rounded-lg m-2 relative ${
        selectedInterests.includes(item.id) ? 'border-2 border-[#1D51FE]' : ''
      }`}
      onPress={() => toggleInterest(item.id)}
    >
      <View className="absolute top-2 right-2">
        {selectedInterests.includes(item.id) ? (
          <Feather name="check-circle" size={24} color="#1D51FE" />
        ) : (
          <Feather name="circle" size={24} color="gray" />
        )}
      </View>
      <View className="flex-1 justify-end pb-3 items-center">
        <Text className="text-gray-500 text-base">{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white px-4 py-4">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="black" onPress = {() => router.back()} />
          </TouchableOpacity>
        </View>

        {/* Title and Subtitle */}
        <Text className="text-2xl font-semibold text-black mb-2 text-center">What Are Your Interests?</Text>
        <Text className="text-center text-gray-500 mb-6">
          Help us get to know your preferences better
        </Text>

        {/* Interests Grid */}
        <FlatList
          data={interests}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderInterestItem}
          contentContainerStyle={{ alignItems: 'center' }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />

        {/* Next Button */}
        <TouchableOpacity onPress={() => router.push('/signUp')} className="bg-blue-500 py-4 rounded-lg items-center"> 
          <Text className="text-white font-semibold">Next <Feather name="arrow-right" size={16} color="white" /></Text>
        </TouchableOpacity>
      
      </View>
    </SafeAreaView>
  );
};

export default InterestSelectionScreen;

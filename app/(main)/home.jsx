import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const topWashers = [
  { id: 1, name: 'WASHWASH', providerName: 'Adam', location: 'Lyon, France', price: '$35', tags: ['CAR', 'Full-Time', 'Senior'], bgColor: 'bg-red-800' },
  { id: 2, name: 'ProWash', providerName: 'John', location: 'Paris, France', price: '$40', tags: ['HOUSE', 'Part-Time', 'Junior'], bgColor: 'bg-purple-900' },
];

const popularServices = [
  { id: 1, name: 'Cleanow Wash', location: 'Lyon, France', reviews: 41 },
  { id: 2, name: 'La Details Wash', location: 'Paris, France', reviews: 70 },
  { id: 3, name: 'Cleanow Wash', location: 'Lyon, France', reviews: 41 },
];

const serviceCategories = [
  { id: 1, name: 'Regular Maintenance', icon: 'local-car-wash' },
  { id: 2, name: 'Regular Car Wash', icon: 'local-car-wash' },
  { id: 3, name: 'Snowy Car Wash', icon: 'ac-unit' },
  { id: 4, name: 'Interior Vacuum', icon: 'cleaning-services' },
  { id: 5, name: 'Others Services', icon: 'more-horiz' },
];

const HomeScreen = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 py-4 bg-white">
        
      {/* Header */}
      <View className="flex-row pt-10 pb-6 px-6 justify-between items-left mb-3">
        <View>
            <Text className="text-2xl font-semibold text-black">What services</Text>
            <Text className="text-2xl font-semibold text-black">do you need today?</Text>
        </View>
        <TouchableOpacity className="p-2">
          <Feather name="message-square" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/settings')} className="p-2">
          <Feather name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-full mx-4 px-4 py-2 mb-4">
        <Feather name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search services"
          className="ml-2 p-1 flex-1 text-black"
          onPress = { () => router.push('/searchWithMap')}
        />
      </View>

      {/* Top Washers */}
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-semibold px-6 text-black">Top Washer</Text>
          <TouchableOpacity>
            <Text className="text-blue-500 px-6">See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topWashers.map((washer) => (
            <TouchableOpacity
              key={washer.id}
              className={`p-4 mx-2 rounded-3xl drop-shadow-xl border-2 border-black w-90 h-48 mr-4 ${washer.bgColor} justify-between`}
              onPress={() => router.push('/serviceDetails')}
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-gray-300 rounded-full mr-4"></View>
                <View>
                    <Text className="text-white pt-2 text-xl font-semibold">{washer.name}</Text>
                    <Text className="text-white">{washer.providerName}</Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row">
                  {washer.tags.map((tag, index) => (
                    <Text key={index} className="text-white text-xs bg-white/20 rounded-full px-6 py-2 mr-2">
                      {tag}
                    </Text>
                  ))}
                </View>
              </View>
              <View className="flex-row justify-between">
                    <Text className="text-white">{washer.location}</Text>
                    <Text className="text-white">`à partir de ${washer.price}`</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Service Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        className="mb-6"
      >
        {serviceCategories.map((category) => (
          <View key={category.id} className="items-center mx-1 my-1 px-2">
            <MaterialIcons name={category.icon} size={32} color="gray" className="mb-1" />
            <Text className="text-gray-500 w-20 text-center text-xs">{category.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Popular Car Wash */}
      <View className="mb-6 px-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-lg font-semibold text-black">Popular Car Wash</Text>
          <TouchableOpacity>
            <Text className="text-blue-500">See all</Text>
          </TouchableOpacity>
        </View>
        {popularServices.map((service) => (
          <View key={service.id} className="flex-row items-center bg-gray-100 rounded-lg p-4 mb-4">
            <View className="w-12 h-12 bg-gray-300 rounded-lg mr-4"></View>
            <View className="flex-1">
              <Text className="text-black font-semibold">{service.name}</Text>
              <Text className="text-gray-500"><Feather name="map-pin" size={16} color="black" />{service.location}</Text>
              <Text className="text-yellow-500">{'⭐'.repeat(Math.round(service.reviews / 20))} Reviews ({service.reviews})</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

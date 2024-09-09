import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router'

const FilterScreen = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [typeSearchQuery, setTypeSearchQuery] = useState('');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [price, setPrice] = useState(399);
  const router = useRouter()
  // Sample data for cities and types
  const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
  const types = ['Standard', 'Deluxe', 'Premium', 'Economy'];

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(citySearchQuery.toLowerCase())
  );

  const filteredTypes = types.filter(type =>
    type.toLowerCase().includes(typeSearchQuery.toLowerCase())
  );

  const handleOutsidePress = () => {
    setShowCityDropdown(false);
    setShowTypeDropdown(false);
  };

  const renderContent = () => (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          {/* Back Arrow */}
          <TouchableOpacity className="mb-4 self-start">
            <Feather onPress = {() => router.back()} name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          {/* Title and Description */}
          <Text className="text-xl pt-8 font-semibold mb-1">Search Washer</Text>
          <Text className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

          {/* City Search */}
          <Text className="text-black pt-4 font-semibold mb-1">City</Text>
          <View className="mb-4">
            <TextInput
              className="flex-row items-center shadow-lg rounded-xl px-4 py-3 bg-white border border-[#D9E1E7]"
              placeholder="Search for a city"
              value={citySearchQuery}
              onChangeText={(text) => {
                setCitySearchQuery(text);
                setShowCityDropdown(true);
              }}
              onFocus={() => setShowCityDropdown(true)}
            />
            {showCityDropdown && (
              <FlatList
                data={filteredCities}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="p-2 border-b border-gray-200"
                    onPress={() => {
                      setSelectedCity(item);
                      setCitySearchQuery(item);
                      setShowCityDropdown(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 200, borderWidth: 1, borderColor: '#D9E1E7', borderRadius: 6 }}
              />
            )}
          </View>

          {/* Type Search */}
          <Text className="text-black font-semibold mb-1">Type</Text>
          <View className="mb-4">
            <TextInput
              className="flex-row items-center shadow-lg rounded-xl px-4 py-3 bg-white border border-[#D9E1E7]"
              placeholder="Search for a type"
              value={typeSearchQuery}
              onChangeText={(text) => {
                setTypeSearchQuery(text);
                setShowTypeDropdown(true);
              }}
              onFocus={() => setShowTypeDropdown(true)}
            />
            {showTypeDropdown && (
              <FlatList
                data={filteredTypes}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="p-2 border-b border-gray-200"
                    onPress={() => {
                      setSelectedType(item);
                      setTypeSearchQuery(item);
                      setShowTypeDropdown(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 150, borderWidth: 1, borderColor: '#D9E1E7', borderRadius: 6 }}
              />
            )}
          </View>

          {/* Price Range */}
          
        </View>

        {/* Search by Filter Button */}

        <View>
          <Text className="text-black font-semibold mb-2">Price</Text>
            <Slider
              className="mb-2"
              minimumValue={59}
              maximumValue={999}
              value={price}
              onValueChange={(value) => setPrice(value)}
              minimumTrackTintColor="#8CFF00"
              maximumTrackTintColor="#0000FF"
              thumbTintColor="#8CFF00"
              
            />
            <View className="flex-row justify-between mb-6">
              <Text className="text-gray-500">$59</Text>
              <Text className="text-gray-500">${price.toFixed(0)}</Text>
              <Text className="text-gray-500">$999</Text>
            </View>

            <TouchableOpacity onPress={() => router.back()} className="bg-blue-500 p-4 rounded-lg items-center mt-8">
              <Text className="text-white font-semibold">Search by Filter</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View className="flex-1 p-7 bg-white">
      {renderContent()}
    </View>
  );
};

export default FilterScreen;

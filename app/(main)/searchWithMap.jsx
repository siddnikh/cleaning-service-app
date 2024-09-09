import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router'

const searchWithMap = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All Class');
  const [userLocation, setUserLocation] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);



  // Example markers data
  const services = [
    { id: 1, latitude: 12.34, longitude: 79.12, title: 'CLEANWASH', price: '$35', rating: 4.8, location: 'Lyon' },
    { id: 2, latitude: 12.67, longitude: 79.24, title: 'WASHUP', price: '$43', rating: 4.8, location: 'Lyon' },
  ];

  return (
      <View className="flex-1 bg-gray-100">
        {/* Map Section with Search Bar overlay */}
        <View className="flex-1">
          <MapView
            className="absolute top-0 left-0 right-0 bottom-0"
            initialRegion={userLocation ? {
              ...userLocation,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            } : null}
          >
            {userLocation && (
              <Marker
                coordinate={userLocation}
                title="You are here"
                pinColor="red"
              />
            )}
            {services.map((marker) => (
              <Marker
                key={marker.id}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                title={marker.title}
                description={marker.location}
                pinColor='blue'
              />
            ))}
          </MapView>

          {/* Search Bar */}
          <View className ="absolute top-8 left-4 right-4 px-2">
            <View className='pb-8'>
                <TouchableOpacity>
                    <Feather name="arrow-left" onPress={() => router.back()} size={24} color='black' />
                </TouchableOpacity>
            </View>

            <View className="relative flex-row items-center px-2">
                <TextInput
                className="flex-1 bg-white p-3 rounded-xl shadow-md"
                placeholder="Search services"
                value={search}
                onChangeText={setSearch}
                />
                <TouchableOpacity className="bg-blue-500 p-2 ml-2 rounded-xl">
                    <MaterialIcons onPress = {() => router.push('searchWithFilter')} name="filter-list" size={24} color="white" />
                </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Results Section */}
        <View className="relative p-4 pt-8 pb-8 bg-[#FBFDFF]">
          <Text className="text-gray-500 mb-2 pb-4 pl-4">99+ search result</Text>

          {/* Results List */}
          <FlatList
            data={services}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <TouchableOpacity className="bg-white shadow-xl p-4 rounded-lg mr-4 w-48">
                <View className="bg-gray-200 h-36 mb-2 rounded-md"></View>
                <Text className="text-black font-regular text-lg">{item.title}</Text>
                <View className="flex-row justify-between items-center mt-1">
                    <Text className="text-gray-500">{item.location}</Text>
                    <View className="flex-row justify-center">
                        <Text className="text-yellow-500 mr-1">⭐</Text>
                        <Text className="text-gray-700">{item.rating}</Text>
                    </View>
                </View>
                <Text className="text-black font-semibold mt-2">{item.price}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
  );
};

export default searchWithMap;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';

const locations = [
  { id: 1, name: 'Lyon, France' },
  { id: 2, name: 'New York City, USA' },
  { id: 3, name: 'Tunis, Tunisia' },
  { id: 4, name: 'Washington D.C.' },
];

const LocationSelectionScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [manualAddress, setManualAddress] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);
  const router = useRouter();

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'Would you like to enter your address manually?',
        [
          { text: 'No', style: 'cancel' },
          { text: 'Yes', onPress: () => setShowManualInput(true) }
        ]
      );
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setUserLocation({
      id: 'current',
      name: `Current Location (${location.coords.latitude.toFixed(2)}, ${location.coords.longitude.toFixed(2)})`
    });
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const handleManualSubmit = () => {
    if (manualAddress.trim()) {
      setUserLocation({
        id: 'manual',
        name: `Manual: ${manualAddress.trim()}`
      });
      setShowManualInput(false);
    }
  };

  const allLocations = userLocation ? [userLocation, ...locations] : locations;

  return (
    <View className="flex-1 bg-white px-6 py-8">
      {/* Header */}
      <View className="flex-row items-center mb-4">
        <TouchableOpacity>
          <Feather name="arrow-left" onPress={() => router.back()} size={24} color="black" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-semibold text-black">Create account</Text>
      </View>

      {/* Subtitle */}
      <Text className="text-center text-gray-400 mb-2">3 easy signup process</Text>

      {/* Progress Bar */}
      <View className="h-1 bg-blue-500 rounded-full w-3/5 self-center mb-8" />

      {/* Title */}
      <Text className="text-2xl font-semibold text-black mb-4">Select your current location</Text>

      {showManualInput ? (
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 rounded-lg p-2 mb-2"
            placeholder="Enter your address"
            value={manualAddress}
            onChangeText={setManualAddress}
          />
          <TouchableOpacity
            className="bg-blue-500 py-2 rounded-lg items-center"
            onPress={handleManualSubmit}
          >
            <Text className="text-white font-semibold">Submit Address</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {/* Locations List */}
          {allLocations.map((location) => (
            <TouchableOpacity
              key={location.id}
              className={`flex-row items-center p-4 mb-4 rounded-full border ${
                selectedLocation === location.id ? 'border-blue-500' : 'border-gray-200'
              }`}
              onPress={() => setSelectedLocation(location.id)}
            >
              <Feather
                name={location.id === 'current' || location.id === 'manual' ? 'crosshair' : 'map-pin'}
                size={18}
                color={selectedLocation === location.id ? 'blue' : 'gray'}
                className="mr-2"
              />
              <Text
                className={`text-black ${selectedLocation === location.id ? 'font-semibold' : 'text-gray-500'}`}
              >
                {location.name}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Manual Input Option */}
          <TouchableOpacity
            className="flex-row items-center p-4 mb-4 rounded-full border border-gray-200"
            onPress={() => setShowManualInput(true)}
          >
            <Feather name="edit" size={18} color="gray" className="mr-2" />
            <Text className="text-gray-500">Enter address manually</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Done Button */}
      <TouchableOpacity onPress={() => router.push('/home')} className="bg-blue-500 py-4 rounded-full items-center mt-6">
        <Text className="text-white font-semibold">Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationSelectionScreen;

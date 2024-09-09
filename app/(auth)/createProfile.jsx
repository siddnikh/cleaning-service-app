import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Switch, Alert, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router'

const CreateProfileScreen = () => {
  const [profileName, setProfileName] = useState('');
  const [isUser, setIsUser] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleCreatePin = () => {
    router.push('/profilePin')
  };

  const handleWithoutPin = () => {
    router.push('/interestsPage')
    Alert.alert('Info', 'Continuing without a pin.');
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white px-6 pt-10 pb-4">
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="black" onPress = {() => router.back()} />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-2xl font-semibold text-black">Create Profile</Text>
        </View>

        {/* Profile Image */}
        <View className="items-center mb-8">
          <View className="w-36 h-36 bg-gray-200 rounded-full items-center justify-center relative">
            {profileImage ? (
              <Image source={{ uri: profileImage }} className="w-full h-full rounded-full" />
            ) : (
              <Feather name="user" size={50} color="gray" />
            )}
            <TouchableOpacity className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full" onPress={pickImage}>
              <Feather name="camera" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Name Input */}
        <View className="mb-8">
          <Text className="text-sm pt-4 text-gray-600 mb-4">Profile Name</Text>
          <TextInput
            className="border border-gray-300 rounded-full px-4 py-2 text-black"
            value={profileName}
            onChangeText={setProfileName}
            placeholder="Enter your profile name"
          />
        </View>

        {/* User/Provider Switch */}
        <View className="mb-8">
          {/* User Option */}
          <TouchableOpacity
            className="flex-row items-center justify-between mb-4"
            onPress={() => setIsUser(true)}
          >
            <View className="flex-1 mr-4">
              <Text className="text-base text-black font-semibold">User</Text>
              <Text className="text-sm text-gray-500">
                Find and hire professional car washers and cleaning services.
              </Text>
            </View>
            <View className={`w-6 h-6 rounded-full ${isUser ? 'bg-blue-500' : 'bg-gray-300'}`} />
          </TouchableOpacity>
          
          {/* Provider Option */}
          <TouchableOpacity
            className="flex-row items-center justify-between"
            onPress={() => setIsUser(false)}
          >
            <View className="flex-1 mr-4">
              <Text className="text-base text-black font-semibold">Provider</Text>
              <Text className="text-sm text-gray-500">
                Offer your car washing or cleaning services to customers in your area.
              </Text>
            </View>
            <View className={`w-6 h-6 rounded-full ${!isUser ? 'bg-blue-500' : 'bg-gray-300'}`} />
          </TouchableOpacity>
        </View>

        {/* Spacer to push buttons to bottom */}
        <View className="flex-1" />

        {/* Create Pin Button */}
        <TouchableOpacity className="bg-blue-500 py-4 rounded-full items-center mb-4" onPress={handleCreatePin}>
          <Text className="text-white font-semibold">Create Pin</Text>
        </TouchableOpacity>

        {/* Without Pin Button */}
        <TouchableOpacity onPress={handleWithoutPin} className="mb-4">
          <Text className="text-center text-blue-500">Without Pin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateProfileScreen;

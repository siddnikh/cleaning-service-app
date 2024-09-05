import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileConfirmationScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('');
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  const handleVerify = () => {
    const phoneRegex = /^\+\d{1,3}\d{10}$/; // Regex to check for country code and 10 digit number

    if (!username || !email || !phone) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      Alert.alert('Error', 'Please enter a valid phone number with country code.');
      return;
    }

    if (!agree) {
      Alert.alert('Error', 'You must agree to the terms and conditions.');
      return;
    }

    Alert.alert('Success', 'Information verified successfully!');
    router.push('/loginScreen4');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white px-6 py-8">
        {/* Header */}
        <View className="flex-row items-center mt-4 mb-8">
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="black" onPress={() => router.back()}/>
          </TouchableOpacity>
          <Text className="flex-1 text-4xl text-center text-[#1C2D57] font-semibold">Profile</Text>
        </View>

        {/* Profile Image */}
        <View className="items-center mb-12">
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

        {/* Form Fields */}
        <View className="mb-8">
          <Text className="text-lg text-gray-400">Username</Text>
          <TextInput
            className="border-b border-gray-200 py-1 text-black"
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
          />
        </View>
        
        <View className="mb-8">
          <Text className="text-lg text-gray-400">Email</Text>
          <TextInput
            className="border-b border-gray-200 py-1 text-black"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View className="mb-8">
          <Text className="text-lg text-gray-400">Phone</Text>
          <TextInput
            className="border-b border-gray-200 py-2 text-black"
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number with country code (e.g., +1234567890)"
            keyboardType="phone-pad"
          />
        </View>

        <View className="mb-8">
          <Text className="text-lg text-gray-400">Gender</Text>
          <TextInput
            className="border-b border-gray-200 py-1 text-black"
            value={gender}
            onChangeText={setGender}
            placeholder="Enter your gender"
          />
        </View>

        {/* Optional Date of Birth */}
        <View className="mb-8">
          <Text className="text-lg text-gray-400">Date of Birth (Optional)</Text>
          <TextInput
            className="border-b border-gray-200 py-1 text-black"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="DD/MM/YYYY"
          />
        </View>

        <View className="flex-row items-center mb-8 mt-5">
          <CheckBox
            value={agree}
            onValueChange={setAgree}
            className="mr-2"
            borderColor="gray-400"
          />
          <Text className="text-gray-400">Agree with Terms & Conditions</Text>
        </View>
        
        {/* Verify Button */}
        <TouchableOpacity className="bg-blue-500 py-4 rounded-full items-center" onPress={handleVerify}>
          <Text className="text-white font-semibold">Verify</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileConfirmationScreen;

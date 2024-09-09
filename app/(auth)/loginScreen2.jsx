import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function loginScreen2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <View className='bg-white h-full px-6 pt-10'>
      {/* Circle shape in the top right */}
      <View className="absolute top-[-20] right-[-40] w-40 h-40 rounded-full border-2 border-gray-200" />

      {/* Sign Up text */}
      <View className="flex-row items-center pt-8 mt-4">
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="black" onPress={() => router.back()}/>
          </TouchableOpacity>
        </View>
      <Text className="text-2xl text-left text-[#393F45] mt-40">Sign Up</Text>
      <Text className="text-4xl font-bold text-left text-[#393F45] mt-4">Account</Text>
      <Text className="text-lg text-left text-gray-300 mt-4">Sign in with your account to continue!</Text>

      {/* Email Input */}
      <View className="mt-10">
        <View className="flex-row items-center shadow-lg rounded-xl mb-3 px-4 py-3 bg-white">
          <FontAwesome name="user" size={20} color="gray" />
          <TextInput
            placeholder="E-mail or phone number"
            placeholderTextColor={'#BDBDBD'}
            value={email}
            onChangeText={setEmail}
            className="ml-2 flex-1 text-gray-400"
            keyboardType="email-address"
            style={{ paddingVertical: 0 }}
          />
        </View>
      </View>

      {/* Password Input */}
      <View className="mt-5">
        <View className="flex-row items-center shadow-lg rounded-xl px-4 py-3 bg-white">
          <FontAwesome name="lock" size={20} color="gray" />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#BDBDBD'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            className="ml-2 flex-1 text-gray-400"
            style={{ paddingVertical: 0 }}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesome name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity className="bg-blue-500 py-4 rounded-xl mt-20">
        <Text className="text-white text-center font-bold text-lg" onPress={() => router.push('/loginScreen8')}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
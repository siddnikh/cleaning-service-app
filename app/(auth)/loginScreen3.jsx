import React, { useState } from 'react';
import { SafeAreaView,View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox'; // For the checkbox
import { FontAwesome } from '@expo/vector-icons'; // For icons like email, password visibility, etc.
import { useRouter } from 'expo-router';

export default function loginScreen3() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-10">
      {/* Circle shape in the top right */}
      <View className="absolute top-[-20] right-[-40] w-40 h-40 rounded-full border-2 border-gray-200" />

      {/* Welcome text */}
      <Text className="text-4xl font-bold text-center mt-40">Welcome</Text>
      <Text className="text-gray-400 text-xl text-center mt-2">Sign in to continue</Text>

      {/* Email Input */}
      <View className="mt-10">
        <View className="flex-row items-center border-2 border-gray-200 rounded-xl mb-3 px-3 py-2">
          <FontAwesome name="envelope" size={20} color="gray" />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={'#BDBDBD'}
            value={email}
            onChangeText={setEmail}
            className="ml-2 flex-1 p-3 text-gray-400"
            keyboardType="email-address"
          />
        </View>
      </View>

      {/* Password Input */}
      <View className="mt-5 mb-7">
        <View className="flex-row items-center border-2 border-gray-200 rounded-xl px-3 py-2">
          <FontAwesome name="lock" size={20} color="gray" />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#BDBDBD'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            className="ml-2 flex-1 p-3 text-gray-400"
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesome name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Remember Me & Forgot Password */}
      <View className="flex-row items-center justify-between mb-5">
        <View className="flex-row items-center">
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={rememberMe ? '#BDBDBD' : undefined}
            borderColor={rememberMe ? '#BDBDBD' : undefined}
          />
          <Text className="ml-2 text-gray-400">Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-blue-500">Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity className="bg-blue-500 py-4 rounded-xl mt-6">
        <Text className="text-white text-center font-bold text-lg">Sign In</Text>
      </TouchableOpacity>

      {/* Or Continue with */}
      <Text className="text-center text-gray-500 mt-6">Or Continue with</Text>
      
      {/* Social Login Buttons */}
      <View className="flex-row justify-center mt-6">
        <TouchableOpacity className="bg-red-500 flex-1 flex-row justify-center items-center p-3 rounded-lg mx-2">
          <FontAwesome name="google" size={24} color="white" />
          <Text className="text-white ml-4">Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-600 flex-1 flex-row justify-center items-center p-3 rounded-lg mx-2">
          <FontAwesome name="facebook" size={24} color="white" />
          <Text className="text-white ml-4">Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <TouchableOpacity className="mt-6">
        <Text className="text-center text-gray-600">
          Don’t Have an Account?{' '}
          <Text className="text-blue-500 font-semibold" onPress={() => router.push('/loginScreen2')}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

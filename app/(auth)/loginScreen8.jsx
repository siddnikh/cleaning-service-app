import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-10">
      {/* Circle shape in the top right */}
      <View className="absolute top-[-20] right-[-40] w-40 h-40 rounded-full border-2 border-gray-200" />

      {/* Sign Up text */}
      <Text className="text-4xl text-center text-[#1C2D57] font-semibold mt-20">Sign Up</Text>

      {/* Username Input */}
      <View className="mt-20">
        <View className="flex-row items-center shadow-lg rounded-xl mb-3 px-4 py-3 bg-white border border-[#D9E1E7]">
          <TextInput
            placeholder="Type in Username"
            placeholderTextColor={'#BDBDBD'}
            value={username}
            onChangeText={setUsername}
            className="ml-2 flex-1 text-gray-400"
            style={{ paddingVertical: 0 }}
          />
        </View>
      </View>

      {/* Password Input */}
      <View className="mt-5">
        <View className="flex-row items-center shadow-lg rounded-xl px-4 py-3 bg-white border border-[#D9E1E7]">
          <TextInput
            placeholder="********"
            placeholderTextColor={'#BDBDBD'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="ml-2 flex-1 text-gray-400"
            style={{ paddingVertical: 0 }}
          />
        </View>
      </View>

      {/* Language Picker */}
      <View className="mt-5 shadow-lg rounded-xl bg-white border border-[#D9E1E7]">
        <Picker
          selectedValue={language}
          style={{ height: 50, marginBottom: 5, borderColor: '#D9E1E7', borderWidth: 1, borderRadius: 6 }}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="Choose Language" value="" style={{ color: '#BDBDBD' }} />
          <Picker.Item label="English" value="english" style={{ color: '#000000' }} />
          <Picker.Item label="Spanish" value="spanish" style={{ color: '#000000' }} />
          {/* Add more language options here */}
        </Picker>
      </View>

      {/* Age Input */}
      <View className="mt-5">
        <View className="flex-row items-center shadow-lg rounded-xl px-4 py-3 bg-white border border-[#D9E1E7]">
          <TextInput
            placeholder="Age"
            placeholderTextColor={'#BDBDBD'}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            className="ml-2 flex-1 text-gray-400"
            style={{ paddingVertical: 0 }}
          />
        </View>
      </View>

      {/* Country Picker */}
      <View className="mt-5 shadow-lg rounded-xl bg-white border border-[#D9E1E7]">
        <Picker
          selectedValue={country}
          style={{ height: 50, marginBottom: 5, borderColor: '#D9E1E7', borderWidth: 1, borderRadius: 6 }}
          onValueChange={(itemValue) => setCountry(itemValue)}
        >
          <Picker.Item label="Country" value="" style={{ color: '#BDBDBD' }} />
          <Picker.Item label="United States" value="us" style={{ color: '#000000' }} />
          <Picker.Item label="Canada" value="ca" style={{ color: '#000000' }} />
          {/* Add more country options here */}
        </Picker>
      </View>

      {/* Terms & Conditions */}
      <View className="flex-row items-center mb-4 mt-5">
        <CheckBox
          value={agree}
          onValueChange={setAgree}
          className="mr-2"
          borderColor="gray-400"
        />
        <Text className="text-gray-400">Agree with Terms & Conditions</Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity className="bg-blue-500 py-4 rounded-xl mt-20">
        <Text className="text-white text-center font-bold text-lg" onPress={() => router.push('/loginScreen2')}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

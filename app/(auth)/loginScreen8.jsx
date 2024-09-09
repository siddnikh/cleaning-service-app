import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Platform, ActionSheetIOS, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';
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

  const showLanguageActionSheet = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'English', 'Spanish'],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) setLanguage('english');
          if (buttonIndex === 2) setLanguage('spanish');
        }
      );
    }
  };

  const showCountryActionSheet = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'United States', 'Canada'],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) setCountry('us');
          if (buttonIndex === 2) setCountry('ca');
        }
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <SafeAreaView className="flex-1">
        <View className='bg-white h-full px-6 pt-10'>
        {/* Circle shape in the top right */}
        <View className="absolute top-[-20] right-[-40] w-40 h-40 rounded-full border-2 border-gray-200" />

        {/* Sign Up text */}
        <View className="flex-row items-center pt-8 mt-4 mb-8">
            <TouchableOpacity>
              <Feather name="arrow-left" size={24} color="black" onPress={() => router.back()}/>
            </TouchableOpacity>
            <Text className="flex-1 text-4xl text-center text-[#1C2D57] font-semibold">Sign Up</Text>
          </View>

        {/* Username Input */}
        <View className="mt-20">
          <View className="flex-row items-center shadow-lg rounded-xl px-4 py-3 bg-white border border-[#D9E1E7]">
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

        {/* Language Selection */}
        {Platform.OS === 'ios' ? (
          <TouchableOpacity
            className="mt-5 shadow-lg rounded-xl bg-white border border-[#D9E1E7] px-4 py-3"
            onPress={showLanguageActionSheet}
          >
            <Text className={language ? "text-black" : "text-gray-400"}>
              {language ? language.charAt(0).toUpperCase() + language.slice(1) : "Choose Language"}
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="mt-5 shadow-lg rounded-xl bg-white border border-[#D9E1E7]">
            <Picker
              selectedValue={language}
              style={{ height: 50, marginBottom: 5, borderColor: '#D9E1E7', borderWidth: 1, borderRadius: 6 }}
              onValueChange={(itemValue) => setLanguage(itemValue)}
            >
              <Picker.Item label="Choose Language" value="" style={{ color: '#BDBDBD' }} />
              <Picker.Item label="English" value="english" style={{ color: '#000000' }} />
              <Picker.Item label="Spanish" value="spanish" style={{ color: '#000000' }} />
            </Picker>
          </View>
        )}

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

        {/* Country Selection */}
        {Platform.OS === 'ios' ? (
          <TouchableOpacity
            className="mt-5 shadow-lg rounded-xl bg-white border border-[#D9E1E7] px-4 py-3"
            onPress={showCountryActionSheet}
          >
            <Text className={country ? "text-black" : "text-gray-400"}>
              {country === 'us' ? 'United States' : country === 'ca' ? 'Canada' : 'Country'}
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="mt-5 shadow-lg rounded-xl bg-white border border-[#D9E1E7]">
            <Picker
              selectedValue={country}
              style={{ height: 50, marginBottom: 5, borderColor: '#D9E1E7', borderWidth: 1, borderRadius: 6 }}
              onValueChange={(itemValue) => setCountry(itemValue)}
            >
              <Picker.Item label="Country" value="" style={{ color: '#BDBDBD' }} />
              <Picker.Item label="United States" value="us" style={{ color: '#000000' }} />
              <Picker.Item label="Canada" value="ca" style={{ color: '#000000' }} />
            </Picker>
          </View>
        )}

        {/* Terms & Conditions */}
        <View className="flex-row items-center mb-4 mt-20">
          <CheckBox
            value={agree}
            onValueChange={setAgree}
            className="mr-2"
            borderColor="gray-400"
          />
          <Text className="text-gray-400 font-bold">Agree with Terms & Conditions</Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity className="bg-blue-500 py-4 rounded-xl">
          <Text className="text-white text-center font-bold text-lg" onPress={() => router.push('/loginScreen7')}>Register</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, Image } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  return (
    <ScrollView className={`flex-1 ${darkMode ? 'bg-black' : 'bg-white'} px-6 py-4`}>
      {/* Header */}
      <View className="flex-row mb-4 space-x-4 pt-4">
        <TouchableOpacity>
          <Feather name="arrow-left" onPress={() => router.back()} size={24} color={`${darkMode ? 'white' : 'black'}`} />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-black">Profile</Text>
      </View>

      {/* Profile Info */}
      <View className="flex-row items-center mb-6">
        <View className="w-16 h-16 bg-gray-200 rounded-full mr-4"></View>
        <View className="flex-1">
          <Text className={`text-lg ${darkMode ? 'text-white' : 'text-black'} font-semibold`}>Adamwash</Text>
          <Text className="text-gray-400">@adamwash</Text>
        </View>
        <TouchableOpacity className="bg-blue-100 p-2 rounded-full">
          <Feather name="edit" size={16} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <Text className="text-gray-400 mb-2">General</Text>
      
      <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
        <Feather name="heart" size={20} color={darkMode ? 'white' : 'black'} />
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>Favorite</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
        <Feather name="calendar" size={20} color={darkMode ? 'white' : 'black'} />
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>My Appointment</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      <Text className="text-gray-400 mt-6 mb-2">Account Setting</Text>
      
      <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
        <MaterialIcons name="credit-card" size={20} color={darkMode ? 'white' : 'black'} />
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>Payment Methods</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Dark Mode Toggle */}
      <View className="flex-row items-center py-3 border-b border-gray-100">
        <MaterialIcons name="brightness-4" size={20} color={`${darkMode ? 'white' : 'black'}`}/>
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? 'gray-400' : '#f4f3f4'}
        />
      </View>

      <Text className="text-gray-400 mt-6 mb-2">App Setting</Text>
      
      <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
        <MaterialIcons name="translate" size={20} color={darkMode ? 'white' : 'black'} />
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>Language</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
        <MaterialIcons name="notifications" size={20} color={darkMode ? 'white' : 'black'} />
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>Notification</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
        <MaterialIcons name="settings" size={20} color={darkMode ? 'white' : 'black'} />
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>Settings</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      <Text className="text-gray-400 mt-6 mb-2">Support</Text>
      
      <TouchableOpacity onPress = {() => router.push('/FAQ')} className="flex-row items-center py-3 border-b border-gray-100">
        <Feather name="help-circle" size={20} color={darkMode ? 'white' : 'black'} />
        <Text className={`ml-4 flex-1 font-semibold ${darkMode ? 'text-gray-400' : 'text-black'}`}>Help Center</Text>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity className="flex-row items-center py-3 mt-6">
        <Feather name="log-out" size={20} color="red" />
        <Text className="text-red-500">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

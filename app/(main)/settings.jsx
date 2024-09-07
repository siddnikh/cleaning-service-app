import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, Image } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white px-6 py-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity>
          <Feather name="arrow-left" onPress={() => router.push('/settings')} size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-black">Profile</Text>
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View className="flex-row items-center mb-6">
        <View className="w-16 h-16 bg-gray-200 rounded-full mr-4"></View>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-black">Adamwash</Text>
          <Text className="text-gray-400">@adamwash</Text>
        </View>
        <TouchableOpacity className="bg-blue-100 p-2 rounded-full">
          <Feather name="edit" size={16} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <Text className="text-gray-400 mb-2">General</Text>
      {[
        { icon: 'heart', label: 'Favorite' },
        { icon: 'calendar', label: 'My Appointment' },
      ].map((item, index) => (
        <TouchableOpacity key={index} className="flex-row items-center py-3 border-b border-gray-100">
          <Feather name={item.icon} size={20} color="black" />
          <Text className="ml-4 flex-1 font-semibold text-black">{item.label}</Text>
          <Feather name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>
      ))}

      <Text className="text-gray-400 mt-6 mb-2">Account Setting</Text>
      {[
        { icon: 'credit-card', label: 'Payment Methods' },
      ].map((item, index) => (
        <TouchableOpacity key={index} className="flex-row items-center py-3 border-b border-gray-100">
          <MaterialIcons name={item.icon} size={20} color="black" />
          <Text className="ml-4 flex-1 font-semibold text-black">{item.label}</Text>
          <Feather name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>
      ))}
      {/* Dark Mode Toggle */}
      <View className="flex-row items-center py-3 border-b border-gray-100">
        <MaterialIcons name="brightness-4" size={20} color="black" />
        <Text className="ml-4 flex-1 font-semibold text-black">Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <Text className="text-gray-400 mt-6 mb-2">App Setting</Text>
      {[
        { icon: 'translate', label: 'Language' },
        { icon: 'notifications', label: 'Notification' },
        { icon: 'settings', label: 'Settings' },
      ].map((item, index) => (
        <TouchableOpacity key={index} className="flex-row items-center py-3 border-b border-gray-100">
          <MaterialIcons name={item.icon} size={20} color="black" />
          <Text className="ml-4 flex-1 font-semibold text-black">{item.label}</Text>
          <Feather name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>
      ))}

      <Text className="text-gray-400 mt-6 mb-2">Support</Text>
      {[
        { icon: 'help-circle', label: 'Help Center' },
      ].map((item, index) => (
        <TouchableOpacity key={index} className="flex-row items-center py-3 border-b border-gray-100">
          <Feather name={item.icon} size={20} color="black" />
          <Text className="ml-4 flex-1 font-semibold text-black">{item.label}</Text>
          <Feather name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>
      ))}

      {/* Logout */}
      <TouchableOpacity className="flex-row items-center py-3 mt-6">
        <Feather name="log-out" size={20} color="red" />
        <Text className="text-red-500">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

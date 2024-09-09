import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CreatePinScreen = () => {
  const [pin, setPin] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef([]);
  const router = useRouter();

  const handlePinChange = (index, value) => {
    if (value.length > 1) return; // Prevent more than one digit
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move focus to the next input if a digit was entered
    if (value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
      setActiveIndex(index + 1);
    } else if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
      setActiveIndex(index - 1);
    }
  };

  const handleCreatePin = () => {
    alert('Pin created');
    router.push('interestsPage')
  };

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 bg-white px-5 justify-between">
      <View className="items-center mt-16">
        <View className="flex-row items-center mb-8">
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="black" onPress = {() => router.back()} />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-2xl font-semibold text-black">Create PIN</Text>
        </View>
        <Text className="text-gray-500 mb-8">Set a 4-digit PIN to prevent others from accessing this profile</Text>
        <View className="flex-row space-x-4 mb-10">
          {pin.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className={`w-12 h-12 border text-center rounded-full text-lg ${
                index === activeIndex ? 'border-blue-500 border-2' : 'border-gray-300'
              }`}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handlePinChange(index, value)}
              onFocus={() => setActiveIndex(index)}
            />
          ))}
        </View>
        <TouchableOpacity className="w-full bg-blue-500 rounded-full py-3 items-center mt-4">
          <Text onPress={handleCreatePin} className="text-white text-lg font-semibold">Create Pin</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePinScreen;

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, AppState, SafeAreaView } from 'react-native';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import illustration_icon from '../../assets/images/emailIllustration.png';

const BACKGROUND_FETCH_TASK = 'background-fetch-task';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  // Fetch or update data here
  // Be sure to return BackgroundFetch.Result.NewData if there's new data
  return BackgroundFetch.Result.NewData;
});

const EmailVerificationScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const router = useRouter();
  const inputRefs = useRef([]);

  useEffect(() => {
    registerBackgroundFetch();
    const interval = setInterval(decrementTimer, 1000);

    return () => {
      clearInterval(interval);
      unregisterBackgroundFetch();
    };
  }, []);

  const registerBackgroundFetch = async () => {
    try {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 1, // 1 second
        stopOnTerminate: false,
        startOnBoot: true,
      });
    } catch (err) {
      console.log("Task Register failed:", err);
    }
  };

  const unregisterBackgroundFetch = async () => {
    try {
      await BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
    } catch (err) {
      console.log("Task Unregister failed:", err);
    }
  };

  const decrementTimer = () => {
    setTimer((prevTimer) => {
      if (prevTimer > 0) {
        return prevTimer - 1;
      } else {
        return 0;
      }
    });
  };

  const handleInputChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input if current input is filled
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleResendCode = () => {
    setTimer(60);
    // Logic to resend the code
  };

  const handleVerify = () => {
    if (code.includes('')) {
      alert('Please enter the full code.');
      return;
    }
    alert('Code verified successfully!');
    router.push('/loginScreen6')
  };

  return (
    <SafeAreaView className="flex-1">
      <View className='bg-white h-full px-6 pt-10'>
        {/* Header */}
        <View className="flex-row items-center pt-8 mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-2xl font-semibold text-black">Check your email</Text>
        </View>

        {/* Subtitle */}
        <Text className="text-center text-gray-500 mb-8">
          We've sent the code to the email on your device
        </Text>

        {/* Image */}
        <View className="items-center mb-8">
          <Image
            source={illustration_icon}
            className="w-48 h-48"
          />
        </View>

        {/* Code Input */}
        <View className="flex-row justify-between mx-auto w-3/4 mb-4">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => inputRefs.current[index] = ref}
              className="w-12 h-12 border-b-2 border-blue-500 text-center text-lg"
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace' && !digit && index > 0) {
                  inputRefs.current[index - 1].focus();
                }
              }}
            />
          ))}
        </View>

        {/* Timer and Resend Code */}
        <View className="flex-row justify-center items-center mb-8">
          <Text className="text-gray-400">Code expires in :</Text>
          <Text className="text-blue-500 ml-1">{`00 : ${timer < 10 ? `0${timer}` : timer}`}</Text>
        </View>
        <TouchableOpacity onPress={handleResendCode}>
          <Text className="text-center text-blue-500 mb-8">Didn't receive code? Resend Code</Text>
        </TouchableOpacity>

        {/* Verify Button */}
        <TouchableOpacity className="bg-blue-500 mt-48 py-4 rounded-full items-center" onPress={handleVerify}>
          <Text className="text-white font-semibold">Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;

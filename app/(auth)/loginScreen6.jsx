import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import smsIcon from '../../assets/images/smsIllustration.png';
import successIcon from '../../assets/images/alert1.png'; 

const PhoneVerificationScreen = ( ) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const inputRefs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

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

    setModalVisible(true); // Show modal

    // Set timeout to hide modal and navigate to the next page
    setTimeout(() => {
      setModalVisible(false);  
      router.push('/createProfile')
    }, 5000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1">
        <View className='bg-white h-full px-6 pt-10'>
          {/* Header */}
          <View className="flex-row items-center pt-8 mb-6">
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text className="flex-1 text-center text-2xl font-semibold text-black">Check your SMS</Text>
          </View>

          {/* Subtitle */}
          <Text className="text-center text-gray-500 mb-8">
            We've sent the code to the SMS on your device
          </Text>

          {/* Image */}
          <View className="items-center mb-8">
            <Image
              source={smsIcon}
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
            <Text className="text-center text-blue-500 mb-8">Didn’t receive code? Resend Code</Text>
          </TouchableOpacity>

          {/* Verify Button */}
          <TouchableOpacity className="bg-blue-500 mt-36 py-4 rounded-full items-center" onPress={handleVerify}>
            <Text className="text-white font-semibold">Verify</Text>
          </TouchableOpacity>

          {/* Modal for success message */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-black/50">
              <View className="bg-white p-8 rounded-lg items-center">
                <Image source={successIcon} className="h-full" />
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default PhoneVerificationScreen;

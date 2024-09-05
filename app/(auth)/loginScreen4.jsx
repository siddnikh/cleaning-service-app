import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const LoginScreen4 = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [timer, setTimer] = useState(60);
  const [isCodeSent, setIsCodeSent] = useState(false);

  useEffect(() => {
    let interval;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

  const sendVerificationCode = () => {
    // Logic to send verification code via email
    setIsCodeSent(true);
    setTimer(60);
  };

  const resendVerificationCode = () => {
    // Logic to resend verification code via email
    setTimer(60);
  };

  const validateCode = () => {
    // Logic to validate the verification code
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://example.com/your-image.jpg' }} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Send Verification Code" onPress={sendVerificationCode} />
      {isCodeSent && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <Button title="Validate Code" onPress={validateCode} />
          <Text>Time remaining: {timer} seconds</Text>
          {timer === 0 && <Button title="Resend Code" onPress={resendVerificationCode} />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default LoginScreen4;

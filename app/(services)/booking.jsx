import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ExpoCalendar from 'expo-calendar';
import CalendarPicker from 'react-native-calendar-picker';

const BookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('08:00 AM');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCalendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await ExpoCalendar.getCalendarsAsync(ExpoCalendar.EntityTypes.EVENT);
        console.log('Available calendars:', calendars);
      }
    })();
  }, []);

  const addEventToCalendar = async () => {
    try {
      const { status } = await ExpoCalendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await ExpoCalendar.getCalendarsAsync(ExpoCalendar.EntityTypes.EVENT);
        const defaultCalendar = calendars.find(cal => cal.isPrimary) || calendars[0];

        const startDate = new Date(`${selectedDate}T${selectedTime}`);
        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour duration

        const eventId = await ExpoCalendar.createEventAsync(defaultCalendar.id, {
          title: 'Cleanow Wash Appointment',
          startDate,
          endDate,
          timeZone: 'GMT',
          location: 'Lyon',
          notes: 'Cleaning service appointment'
        });

        Alert.alert('Success', 'Appointment added to your calendar!');
      } else {
        Alert.alert('Permission required', 'Please allow calendar access to add this event.');
      }
    } catch (error) {
      console.error('Error adding event to calendar:', error);
      Alert.alert('Error', 'Failed to add appointment to calendar.');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-5 py-5">
      {/* Header */}
      <View className="flex-row items-center mb-5">
        <TouchableOpacity>
          {/* Back Button */}
          <Text className="text-2xl">{'<'}</Text>
        </TouchableOpacity>
        <View className="ml-3 flex-1">
          <Text className="text-2xl font-semibold">Cleanow Wash</Text>
          <Text className="text-gray-500">Adam at <Text className="text-red-500">Lyon</Text></Text>
          <View className="flex-row items-center">
            <Text className="text-yellow-400">⭐⭐⭐⭐⭐</Text>
            <Text className="text-gray-500 ml-1">(129)</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text className="text-gray-600">💬</Text>
        </TouchableOpacity>
      </View>

      {/* Details */}
      <View className="flex-row justify-between mb-5 px-5">
        <View className="items-center">
          <Text className="font-semibold text-gray-700">Rating</Text>
          <Text className="text-xl font-bold">4.8</Text>
        </View>
        <View className="items-center">
          <Text className="font-semibold text-gray-700">Experience</Text>
          <Text className="text-xl font-bold">8 yrs+</Text>
        </View>
        <View className="items-center">
          <Text className="font-semibold text-gray-700">Client</Text>
          <Text className="text-xl font-bold">120+</Text>
        </View>
      </View>

      {/* Calendar Picker */}
      <Text className="font-semibold mb-3">Select Date</Text>
      <View className="mb-5 border border-gray-200 rounded-lg overflow-hidden">
        <CalendarPicker
          onDateChange={handleDateChange}
          selectedDayColor="#3b82f6"
          selectedDayTextColor="#ffffff"
          todayBackgroundColor="#e5e7eb"
          todayTextStyle={{ color: '#000000' }}
        />
      </View>

      {/* Select Time */}
      <Text className="font-semibold mb-3">Select Time</Text>
      <View className="flex-row justify-between flex-wrap mb-5">
        {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM'].map((time) => (
          <TouchableOpacity
            key={time}
            className={`w-24 py-2 justify-center items-center rounded-full mb-2 ${
              selectedTime === time ? 'bg-blue-500' : 'bg-gray-100'
            }`}
            onPress={() => handleTimeChange(time)}
          >
            <Text className={`${selectedTime === time ? 'text-white' : 'text-gray-500'}`}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Booking Summary */}
      <View className="flex-row justify-between items-center mb-5 px-5">
        <View>
          <Text className="text-gray-500">Date & Time</Text>
          <Text className="text-lg font-semibold">
            {selectedDate ? selectedDate.format('YYYY-MM-DD') : 'Not selected'}, {selectedTime}
          </Text>
        </View>
        <View>
          <Text className="text-gray-500">Total Price</Text>
          <Text className="text-lg font-bold text-blue-500">$50</Text>
        </View>
      </View>

      {/* Book Now Button */}
      <View className="flex-row items-center justify-center">
        <TouchableOpacity 
          className="w-12 h-12 bg-white rounded-full border border-blue-500 justify-center items-center mr-4"
          onPress={addEventToCalendar}
        >
          <Text className="text-blue-500 text-lg">📅</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-blue-500 rounded-full py-3 items-center">
          <Text className="text-white text-lg font-semibold">Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookingScreen;

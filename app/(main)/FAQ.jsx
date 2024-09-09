import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HelpScreen = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('Contact');
  const [expandedItems, setExpandedItems] = useState([]);

  return (
    <View className="flex-1 bg-blue-500">
      {/* Header Section */}
      <View className="p-4">
        <TouchableOpacity onPress={() => router.back()} className="mb-2 pt-4">
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <View className="items-left">
        <Text className="text-white font-bold text-xs tracking-wider pt-3">WE CAN HELP YOU</Text>
        <Text className="text-black font-bold text-2xl pt-2">How can we help?</Text>
        <View className="mt-6 bg-white rounded-lg mb-6 p-2">
          <TextInput
            className="text-gray-700 px-4"
            placeholder="Search question..."
            placeholderTextColor="#B0B0B0"
          />
        </View>
        </View>
        
      </View>

      {/* Content Section with Tabs */}
      <View className="flex-1 bg-white rounded-t-3xl px-6 pt-4">
        <View className="flex-row justify-around mb-4">
          <TouchableOpacity 
            onPress={() => setSelectedTab('FAQ')}
            className={`flex-1 py-2 ${selectedTab === 'FAQ' ? 'border-b-2 border-black' : ''}`}
          >
            <Text className="text-center font-bold">
              FAQ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setSelectedTab('Contact')}
            className={`flex-1 py-2 ${selectedTab === 'Contact' ? 'border-b-2 border-black' : ''}`}
          >
            <Text className="text-center font-bold">
              Contact us
            </Text>
          </TouchableOpacity>
        </View>

        {selectedTab === 'Contact' ? (
          // Contact Us Tab Content
          <ScrollView className="flex-1 space-y-4">
            {['WhatsApp', 'Twitter', 'Email', 'Instagram', 'Customer Service'].map((contactMethod) => (
              <TouchableOpacity
                key={contactMethod}
                className="border border-black rounded-xl py-4 items-left pl-12"
              >
                <Text className="text-lg">{contactMethod}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          // FAQ Tab Content
          <ScrollView showsVerticalScrollIndicator={false} className="flex-1 space-y-2">
            <Text className="text-lg font-bold mt-4 mb-2">Frequently asked question</Text>
            <Text className="text-sm text-gray-600 mb-2">
              We provide answers to common questions about our products/services.
            </Text>
            {[
              {
                question: 'What services do you offer for car cleaning?',
                answer: 'We offer a range of services including exterior wash, interior cleaning, waxing, and detailing.'
              },
              {
                question: 'How can I book an appointment?',
                answer: 'You can book an appointment through our mobile app, website, or by calling our customer service.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept various payment methods including cash, credit cards, and mobile payments.'
              },
              {
                question: 'Can I reschedule or cancel my appointment?',
                answer: 'Yes, you can reschedule or cancel your appointment through our app or by contacting our customer service.'
              },
              {
                question: 'Do you offer any discounts or loyalty programs?',
                answer: 'Yes, we have a loyalty program where you earn points for each service. We also offer seasonal discounts and package deals.'
              },
              {
                question: 'What is your policy on late arrivals?',
                answer: 'We kindly ask customers to arrive on time. Late arrivals may result in reduced service time or rescheduling.'
              },
              {
                question: 'Do you provide regular maintenance cleaning services?',
                answer: 'Yes, we offer regular maintenance packages for both individual and corporate clients.'
              },
              // ... other existing FAQ items ...
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  const newExpandedItems = [...expandedItems];
                  newExpandedItems[index] = !newExpandedItems[index];
                  setExpandedItems(newExpandedItems);
                }}
                className="border-b border-gray-300 py-4"
              >
                <View className="flex-row justify-between items-center">
                  <Text className="text-base font-semibold flex-1 mr-2">{item.question}</Text>
                  <Ionicons
                    name={expandedItems[index] ? "remove-circle-outline" : "add-circle-outline"}
                    size={24}
                    color="black"
                  />
                </View>
                {expandedItems[index] && (
                  <Text className="text-sm text-gray-600 mt-2">{item.answer}</Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default HelpScreen;

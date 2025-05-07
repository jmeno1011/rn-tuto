import { Stack } from 'expo-router';
import React, { useState } from 'react';

export default function HomeLayout() {
  const [isLog, setIsLog] = useState(false);
  const changeIsLog = ()=>{
    setIsLog(!isLog);
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          // presentation: 'transparentModal',
          // animation: 'fade',
          // headerShown: false,
        }}
      />
    </Stack>
  )
}
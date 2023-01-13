import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/app';


export default function App() {
  return (

    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  );
}


import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => (

  <SafeAreaProvider>
    <SafeAreaView>
      <View>

        <Text>DriveIt!</Text>

        <Button 
        title="Sign In"
        onPress={() => router.push("/(tabs)/(auth)/signin")}
        />

        <Button 
        title="Sign Up"
        onPress={() => router.push("/(tabs)/(auth)/signup")}
        />


      </View>
    </SafeAreaView>
  </SafeAreaProvider>

);

export default App;
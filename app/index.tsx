import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  
     return (
  
          <View>

            <Text>DriveIt!</Text>

            <Button 
            title="Sign In"
            onPress={() => router.push("/(auth)/signin")}
            />

            <Button 
            title="Sign Up"
            onPress={() => router.push("/(auth)/signup")}
            />

          </View>
  
     );

};

export default App;
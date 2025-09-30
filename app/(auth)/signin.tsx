import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import supabase from '../lib/_supabase';

const handleSignIn = async (email: string, password: string) => {

    try {

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if(error) {
            console.log("Error Signing In: ", error.message);
            return;
        }
        
        console.log("User Signed In!");
        console.log(data.user);
        router.push('/(tabs)/home');

    } catch (err) {
        console.log("Error: ", err);
    }

};

const SignIn = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');


    return(


        <View style = {styles.container}>

            <Text>Sign In</Text>


            <View style = {styles.input}>
            
                <TextInput
                value={email}
                onChangeText={onChangeEmail}
                placeholder='email'
                />

                <TextInput
                value={password}
                onChangeText={onChangePassword}
                placeholder='***'
                secureTextEntry={true}
                />
            </View>

            <Button
            onPress={() => handleSignIn(email, password)}
            title="Sign In"
            color="#841584"
            />



        </View>
    )

}

const styles = StyleSheet.create({
    
        input: {
            borderColor: "#000",
            borderWidth: 3,
        },
    
        container: {
    
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center", 
            padding: 20,
    
        },
    
    
    })

export default SignIn;
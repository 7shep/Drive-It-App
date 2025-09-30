import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../../supabase';

const handleSignUp = async (email: string, password: string) => {

  console.log("email:", email);
  console.log("Password:", password);

  try {

    const {data, error} = await supabase.auth.signUp({

        email,
        password,

    });

    if(error) {
        console.log("Error Signing Up: ", error.message);
        return;
    }

    console.log("Signed Up User: ", data.user);

  } catch (err) {
    console.log("Unexpected Error: ", err);
  }
  
};

const SignUp = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (

        <View style = {styles.container}>

            <Text>Sign Up</Text>


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
            onPress={() => handleSignUp(email, password)}
            title="Sign Up"
            color="#841584"
            />



      </View>

    )

    

};

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

export default SignUp;
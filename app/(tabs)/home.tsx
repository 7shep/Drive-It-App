import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {

    return (


        <View style={styles.navbar}>

            <Text>Home</Text>

        </View>

    );

}

const styles = StyleSheet.create({

    navbar: {

        backgroundColor: "lightblue",
        borderWidth: 2,
        borderColor: "red",
        margin: 10,
        flex: 1,
    },



})

export default Home;
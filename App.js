//import { StatusBar } from 'expo-status-bar';
//import {StyleSheet, Text, View } from 'react-native';

import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StatusBar} from 'react-native';



const App = () => {
  return (
    <ScrollView>
      <StatusBar/>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;
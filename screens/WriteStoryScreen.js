import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import {Header} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component() {
    constructor(){
        super()
        this.state={
            story:[]
        }
    }
    render (){
        const [value, onChangeText] = React.useState('Useless Placeholder');
        const [value2, onChangeText] = React.useState('Useless Placeholder');
        const [value3, onChangeText] = React.useState('Useless Placeholder');
        return (
            <View>
                <KeyboardAvoidingView
                    behaviour={Platform.OS === "android" ? "padding" : "height"}
                />
                <Header>
                    <Text></Text>
                </Header>
                <TextInput
                    placeHolder="Title"
                    style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <TextInput
                    placeHolder="Author"
                    style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value2}
                />
                <TextInput
                    placeHolder="Write story"
                    style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value3}
                    multiline={true}
                />
                <TouchableOpacity
                onPress={async()=>{this.sumbitButton()}}
                >
                    <Text>
                        Sumbit Story
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
  }

function sumbitButton(){
    const sumbittedStory = () => {
        ToastAndroid.sumbittedStory(
          "Story Sumbitted",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };
    
}
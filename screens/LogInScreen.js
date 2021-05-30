import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import {SearchBar} from 'react-native-elements'
import db from '../config'

export default class LogInScreen extends React.Component {
    constructor(){
        super()
        this.state={
            emailID:'',
            password:''
        }
    }
    logIn=async(emailID,password)=>{
        if(emailID && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(emailID,password)
            if(response){
              this.props.navigation.navigate('Transaction')
            }
          }
          catch(error){
            switch(error.code){
              case 'auth/user-not-found':
              alert("user dosen't exists") 
              console.log("doesn't exist") 
              break
    
              case 'auth/invalid-email': 
              alert('incorrect email or password') 
              console.log('invaild')
              break
            }
          }
        }else {
          alert('enter email id and password')
        }
      }
    render(){
        return(
            <KeyboardAvoidingView
                style={{alignItems:'center'}}
            >
                <Image
                    source={require(
                        '../assets/read'
                    )}
                    style={{
                        height:200,width:200
                    }}
                />
                <TextInput
                    style={{
                        width:300,
                        height:40,
                        borderWidth:1.5,
                        margin:10,
                        fontSize:20,
                        paddingLeft:10
                    }}
                    placeholder='abc@example.com'
                    keyboardType="email-address"
                    onChange={(text)=>{
                        this.setState({
                            emailID:text
                        })
                    }}
                >
                    
                </TextInput>
                <TextInput
                    style={{
                        width:300,
                        height:40,
                        borderWidth:1.5,
                        margin:10,
                        fontSize:20,
                        paddingLeft:10
                    }}
                    placeholder='enter password here'
                    onChange={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                >
                    
                </TextInput>
                <TouchableOpacity
                    style={{
                        width:300,
                        height:40,
                        borderWidth:1.5,
                        margin:10,
                        fontSize:20,
                        paddingLeft:10
                    }}
                    onpress={()=>{
                        this.logIn(this.state.emailID,this.state.password)
                    }}
                >
                    <Text
                        style={{
                            textAlign:'center',
                            color:'white'
                        }}
                    >
                        login
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
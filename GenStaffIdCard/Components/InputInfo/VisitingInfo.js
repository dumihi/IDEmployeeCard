import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Image
  } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Dropdown } from 'react-native-material-dropdown';
import MenuButton from '.././Menu/MenuButton'

export default class VisitingInfo extends Component {

  componentWillMount() {
    console.log(  "componentWillMount " );
   }
   
   componentDidMount() {
    console.log(  "componentDidMount " );
   }
 
   componentWillUnmount() {
    console.log(  "componentWillUnmount " );
   }
 


    static navigationOptions = {
        header: null,    
      }
    
      constructor(props) {
        super(props);
        this.state = {
          text: '',
          position: '',
          tele: '',
          mobi: '',
          fax: '',
          email: '',
          address: "55-57 Bau Cat 4 Street, Ward 14, Tan Binh District, Ho Chi Minh City, \nVietnam"
        };
      }
 
    render() {
        const {navigation} = this.props;
        let data = {
          name: this.state.text,
          position: this.state.position, 
          tele: this.state.tele,
          mobi: this.state.mobi,
          fax: this.state.fax,
          email: this.state.email,
          address: this.state.address,
    
        }
        const Divider = (props) => {
            return <View {...props}>
              <View style={styles.line}></View>
              <Text style={styles.textOR}>OR</Text>
              <View style={styles.line}></View>
            </View>
          }
        return (
        
          
           
           
            <View style={styles.container}>
                    <MenuButton navigation={this.props.navigation} />
              <ScrollView>
              <View style={styles.down}>
              <Image
              style={{width:100, height:100, marginBottom:10}}
              source={require('../../img/logo.png')}
            />
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter full name"
                    onChangeText={(text) => this.setState({text:text})}
                    
                  >
                  </TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter position"
                    onChangeText={(position) => this.setState({position:position})}
                  >
                  </TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter Telephone"
                    keyboardType='numeric'
                    onChangeText={(tele) => this.setState({tele:tele})}
                  >
                  </TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter Mobilephone"
                    keyboardType='numeric'
                    onChangeText={(mobi) => this.setState({mobi:mobi})}
                  >
                  </TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter Fax"
                    keyboardType='numeric'
                    onChangeText={(fax) => this.setState({fax:fax})}
                  >
                  </TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter Email"               
                    onChangeText={(email) => this.setState({email:email})}
                    
                  >
                  </TextInput>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter Address"   
                    defaultValue={this.state.address}                          
                    onChangeText={(address) => this.setState({address:address})}
                  > 
                  </TextInput>
                </View>
                <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.loginButton}
                
                  onPress = {()=>{
                  navigation.navigate("VisitingCard", data)
                  }}
                >
                  <Text style={styles.loginButtonTitle}>Visiting Card Preview</Text>
                </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
            </View>
         
          
             
        );
    }
}

const styles = StyleSheet.create({
    loginContainer:{
      alignContent:'flex-end',
      justifyContent: 'center',
    },
    container: {
     
      
      flex:1,
      backgroundColor: '#80d6ff',
    },
  
    down: {
      flex:1,
      alignItems: 'center',
      marginTop: 10,
      marginBottom:10
    },

    title: {
      color: 'white',
      color: 'rgb(255,119,34)',
      textAlign: 'center',
      width: 400,
      fontSize: 23
    },
    textInputContainer: {
      paddingHorizontal: 10,
      borderRadius: 6,
      marginBottom: 20,
      backgroundColor: 'rgba(255,255,255,0.2)'
    },
    textInput: {
      width: 280,
      height: 45
    },
    loginButton: {
      width: 300,
      height: 45,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(221, 97, 97)'
    },
    loginButtonTitle: {
      fontSize: 18,
      color: 'white'
    },
    facebookButton: {
      width: 300,
      height: 45,
      borderRadius: 6,
      justifyContent: 'center',
    },
    line: {
      height: 1,
      flex: 2,
      backgroundColor: 'black'
    },
    textOR: {
      flex: 1,
      textAlign: 'center'
    },
    divider: {
      flexDirection: 'row',
      height: 40,
      width: 298,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
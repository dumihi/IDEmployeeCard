import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Dropdown } from 'react-native-material-dropdown';
import MenuButton from '.././Menu/MenuButton'

export default class InputInfo extends Component {
  static navigationOptions = {
    header: null,    
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      position: '',
      id: ''
    };
  }

  render() {
    const {navigation} = this.props;
    let data = {
      name: this.state.text,
      position: this.state.position, 
      id: this.state.id,
    }

    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
        <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
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
                placeholder="Enter id"
                keyboardType='numeric'
                onChangeText={(id) => this.setState({id:id})}
              >
              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}
            
              onPress = {()=>{
              navigation.navigate("TakePicture", data)
              }}
            >
              <Text style={styles.loginButtonTitle}>CONTINUE</Text>
            </TouchableOpacity>

          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#80d6ff',
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
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
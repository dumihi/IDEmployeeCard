import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Footer } from "./Footer";
import { SlideImage } from "./SlideImage";
import { Card } from "./Card";
import { Picture } from "./Picture";
import ImagePicker from 'react-native-image-picker'
import MenuButton from '.././Menu/MenuButton'

var { height, width } = Dimensions.get("window");
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class Home extends Component {
  static navigationOptions = {
    header: null,    
}

  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <SlideImage />
        <View 
          style={{
            flex: 1,
            flexDirection: 'row',
            width: width,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#9c27b0'
          }}
        > 

          <TouchableOpacity
             style={{
            flex: 1,
            // height: height / 2,
            width: width / 2,
            backgroundColor: '#ffca28'
          }}
          onPress = {()=>{
            console.log("ddddddHome");
            this.props.navigation.navigate("InputInfo")
          }}
          >
            <Picture/>
          </TouchableOpacity>

          <TouchableOpacity
             style={{
            flex: 1,
            // height: height / 2,
            width: width / 2,
            backgroundColor: '#ffca28'
          }}
          onPress = {()=>{
            console.log("ddddddHome");
            this.props.navigation.navigate("VisitingInfo")
          }}
          >
            <Card />
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }


  show () {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        })
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

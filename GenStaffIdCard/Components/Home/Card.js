import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImageTakePicture from '../image/ImageTakePicture'

var { height, width } = Dimensions.get('window')

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource : null
    }
  }
  render () {
   
    return (
      <View style={{
        flex: 1,
        height: height - 60 - (height*0.4),
        width: width / 2,
        backgroundColor: '#ffca28',
        justifyContent: 'flex-end'
      }}>
           <Image
            style={styles.image}
            source={require('../../img/nameCard.png')}
          />
          <Text style={styles.text}>NAME CARD</Text>
          <View style = {{height: 60, width: width/2, opacity: 0.15,justifyContent: 'center', backgroundColor: 'green', marginTop:30}}/>
      </View>
    )
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
  card: {
    flex: 1,
    width: width / 2,
    flexDirection: 'row',
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9c27b0'
  },
  text: {
    width: width/2,
    marginTop: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: (width / 2 - 150) / 2,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

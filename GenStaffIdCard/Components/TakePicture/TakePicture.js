import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ToastAndroid
} from 'react-native'

import ImagePicker from 'react-native-image-picker'
import Gallery from "react-native-image-gallery";
import CameraRollExtended from 'react-native-store-photos-album';
import Mailer from 'react-native-mail';
import ViewShot from "react-native-view-shot";
import RNHTMLtoPDF from 'react-native-html-to-pdf'
import RNFS from 'react-native-fs';

var { height, width } = Dimensions.get('window')
var uriRoot;
var PDFfile;
const AlbumName = 'GenstaffddCard';

const options = {
  title: 'Select Avatar',
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class TakePicture extends Component {
  static navigationOptions = {
    header: null,    
}

  constructor (props) {
    super(props)
    this.state = {
      avatarSource: null,
      imageData:null,
    }
  }

  async createPDF() {

    RNFS.readFile(uriRoot, "base64") .then(res => this.setState({ imageData: res })) //res will contain base64 with data:/image/*:base64;..
    console.log("hhihihi" +  this.state.imageData);
    let options = {
      html: `
      <center>
      <img src="data:image/png;base64,${this.state.imageData}" style="height:100%;width:50%;border:0px" />
      </center>
      `,
      fileName: 'testaaa',
      directory: 'Documents',
    };

    PDFfile = await RNHTMLtoPDF.convert(options)

  }

  takeScreenShotAndSendEmail=()=>{
    this.takeScreenShot();
  }

  takeScreenShot=()=>{
    this.refs.viewShot.capture().then(uri => {
      CameraRollExtended.saveToCameraRoll({
        uri:uri,
        album: AlbumName
      }, 'photo');
      var pieces  = uri;
      uriRoot = uri;
      console.log( " uri ne" + uriRoot);
    
      this.createPDF();
      this.handleEmail();
    }
    );;
  }

  handleEmail = () => {
      // let pathPDF = PDFfile.filePath;
      Mailer.mail({
        subject: 'ID card employee',
        recipients: ['dumihi1@gmail.com'],
        ccRecipients: ['dumihi1@gmail.com'],
        bccRecipients: ['dumihi1@gmail.com'],
        body: '<b>ID Card</b>',
        isHTML: true,
        attachment: {
         path: PDFfile.filePath,  // The absolute path of the file from which to read data.
          type: 'pdf',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
          name: 'HieuDepTraihihi',   // Optional: Custom filename for attachment
        }
        
      }, (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
            {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
          ],
          { cancelable: true }
        )
      });
      // this.props.navigation.navigate("Home")
      // ToastAndroid.show('Send Email', ToastAndroid.SHORT);
    }
  render () {
    let img =
      this.state.avatarSource == null ? null : (
        <View style={{
          width: 150,
          height: 200,
          borderRadius:7
        }}>
          <Gallery
            style={{
            width: 150,
            height: 200,
            justifyContent: 'center',
            resizeMode: 'contain',
            borderColor: 'red'
          }}
          images={[{ source:  this.state.avatarSource  }]}
          />
        </View>
        
      )

    console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
    let datafromInfo = this.props.navigation.state.params;

    return (
      <View style = {{width: width, height: height+30, backgroundColor:'white', padding:5}}>
        <ViewShot ref="viewShot" backgroundColor={'#ffffff'} options={{ format: "png", quality: 1  }}  >  
        <View
          style={{
            width: width - 10,
            height: 120,
            backgroundColor: 'white'
          }}
        >
          <Image
            style={{
              width: width - 10,
              height: 90,
              justifyContent: 'center',
              resizeMode: 'contain',
              marginTop: 10
            }}
            source={require('../../img/logotext.jpg')}
          />
        </View>

        <ImageBackground
          style={{
            width: width - 10,
            height: 380,
            backgroundColor: '#4fc3f7',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          source={require('../../img/backgroundImage.png')}
        >
          <View
            style={{
              width: 156,
              height: 206,
              justifyContent: 'center',
              resizeMode: 'contain',
              marginTop: 10,
              backgroundColor: '#cfd8dc',
              borderRadius: 7,
              borderWidth:3,
              borderColor: '#4fc3f7'
            }}
          >
            {img}
          </View>

          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
              marginTop: 30
            }}
          >
            {datafromInfo.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#aed581',
              fontWeight: 'bold'
            }}
          >
            {datafromInfo.position}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#aed581',
              fontWeight: 'bold'
            }}
          >
            {datafromInfo.id}
          </Text>
        </ImageBackground>

        <View
          style={{
            width: width- 10,
            height: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* <Text
            style={{
              color: '#03a9f4',
              alignItems: 'center',
              fontSize: 18
            }}
          >
            www.imt-soft.com
          </Text> */}
          <Image
            style = {{ 
              width: width- 30,
              height: 40,
              resizeMode: 'contain',
              marginTop:10
              }}
            source={require('../../img/link.png')}
          />
        </View>
          </ViewShot>
        
        <View
        style={{
            flexDirection: 'row',
            width: width,
            height: 60, 
            marginTop:10
          }}
        >

          <View
            style={{
              width: width/2 - 20,
              borderColor: 'red',
              margin: 10, 
            }}
          >
            <Button
              style={{
                width: width/2 - 20,
              }}
          title='TakePicture'
          onPress={this.show.bind(this)}
        />

          </View>

          <View
            style={{
              width: width/2 - 20,
              borderColor: 'red',
              margin: 10
            }}
          >
            <Button
          style={{
            width: width/2 - 20,
            color: 'red'
          }}
          title='SEND'
          onPress={
            this.takeScreenShotAndSendEmail.bind(this)
            }
        />
           </View>
     
        </View>    
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

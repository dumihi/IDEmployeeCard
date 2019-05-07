import React, { Component } from 'react';
import Orientation from 'react-native-orientation';

import {
    Platform,
    StyleSheet,
    Text,
    Alert,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    Dimensions
  } from "react-native";
import CameraRollExtended from 'react-native-store-photos-album';
import Mailer from 'react-native-mail';
import ViewShot from "react-native-view-shot";
import { TouchableHighlight } from 'react-native-gesture-handler';


var { height, width } = Dimensions.get("window");
var filePath;
const AlbumName = 'GenstaffddCard';
var fullName;
var position ;
var tel;
var mobi ;
var fax;
var email;
var address;

export default class VisitingCard extends Component {
  static navigationOptions = {
    header: null,    
}

    constructor(props) {
      super(props);
    
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
        var convertResult = pieces.split("/").pop();
        filePath = 'storage/emulated/0/Pictures/' + AlbumName + '/' + convertResult;
        console.log(convertResult + " " + filePath);
        this.handleEmail();
      }
      );;
    }
  
    handleEmail = () => {
      console.log(" " + filePath);
        Mailer.mail({
          subject: 'ID card employee',
          recipients: ['duongminhhieu313@gmail.com'],
          ccRecipients: ['duongminhhieu313@gmail.com'],
          bccRecipients: ['duongminhhieu313@gmail.com'],
          body: '<b>A Card Id employee ne</b>',
          isHTML: true,
          attachment: {
           path: filePath,  // The absolute path of thea file from which to read data.
            type: 'png',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
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
  
      }
    componentWillMount() {
       Orientation.lockToLandscape();

        const init = Orientation.getInitialOrientation;
        this.setState({
          init,
          orientation: init,
          specificOrientation: init,
        });
       
      }
      
      componentDidMount() {
        Orientation.lockToLandscape();

        Orientation.addOrientationListener(this._updateOrientation);
        Orientation.addSpecificOrientationListener(this._updateSpecificOrientation);
      }
    
      componentWillUnmount() {
        Orientation.lockToPortrait();
        Orientation.removeOrientationListener(this._updateOrientation);
        Orientation.removeSpecificOrientationListener(this._updateSpecificOrientation);
      }
    
      _getOrientation() {
        Orientation.getOrientation((err, orientation) => {
          Alert.alert(`Orientation is ${orientation}`);
        });
      }
    
      _getSpecificOrientation() {
        Orientation.getSpecificOrientation((err, orientation) => {
          Alert.alert(`Specific orientation is ${orientation}`);
        });
      }
    
      _updateOrientation = (orientation) => this.setState({ orientation });
      _updateSpecificOrientation = (specificOrientation) => this.setState({ specificOrientation });
    
      render() {
        const { init, orientation, specificOrientation } = this.state;
     
        let datafromInfo = this.props.navigation.state.params;
   

        return (
         
       
               <View style={styles.parent}>
                <ViewShot ref="viewShot" backgroundColor={'#ffffff'} options={{ format: "png", quality: 1  }}  >  
                <View style={styles.part1}>
                
                <View style={styles.partA}>
              
              <View style={styles.partProfile}>
                
                    <Text style = {{color:'#0C2977', fontSize:23,paddingTop:20}}>IMT Solutions</Text>

                    <Text style = {{color:'#0C2977', fontSize:18, paddingTop:12}}> {datafromInfo.name}</Text>
              
                    <Text style = {{color:'#0C2977', fontSize:14, paddingTop:2}}> {datafromInfo.position} </Text>

              </View>
                <View style={styles.partLogo}>
                    <Image
                    style={{width:70, height:70}}
                    source={require('../img/logo.png')}
                        />
                        <Image
                    style={{width:170,  height:28}}
                    source={require('../img/text.png')}
                        />
                </View>
                
              
            </View>
            <View style={styles.partBetWeen}>
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
            </View>
            <View style={styles.partB}>
          
              <View style={styles.partTelephone}>
                  <View style={styles.telephoneA}> 
                      <Text style = {{fontFamily:'Arial', color:'#051E4B', fontSize:14}}>Tel : {datafromInfo.tele}</Text>
                      <Text style = {{ color:'#051E4B', fontSize:14}}>Fax: {datafromInfo.fax}</Text>
                  </View> 

                  <View style={styles.telephoneB}> 
                      <Text style = {{ color:'#051E4B', fontSize:14}}>Mobile: {datafromInfo.mobi}</Text>
                      <Text style = {{ color:'#051E4B', fontSize:14}}>Email : {datafromInfo.email}</Text>
                  </View> 


              </View>
              <Text style = {{    color:'#051E4B', fontSize:14}}>{datafromInfo.address}</Text>
              <Text style = {{  color:'#3A6EF9', fontSize:14,paddingTop:5, paddingBottom:25}}>www.imt-soft.com</Text>
          </View>
    
              
                </View>
                </ViewShot>
                <View style={styles.part2}>
                <Button
                    style={{
                     
                      color: 'blue'
                    }}
                    title='SEND'
                    onPress={this.takeScreenShotAndSendEmail.bind(this)}
                      />
                </View>
                </View>
              
      
        );
      }
    }
   
    const styles = StyleSheet.create({
      
      parent: {

        flex:100,
        flexDirection:'row',
        // paddingTop: 10,
        // paddingLeft: 20,
        // paddingBottom: 10,
        // paddingRight: 10,
        backgroundColor: 'white',
        borderColor: 'black',
      },
      part1: {
        flex:70,
        flexDirection:'column',
         paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingRight: 10,
        borderWidth: 1,
        backgroundColor: 'white',
    
      },
      part2: {
        flex:30,
        justifyContent: 'center',
        backgroundColor: 'blue',
        flexDirection:'column',
      },
      partA: {
        flex: 50,
        backgroundColor: 'white',
        flexDirection: 'row'
      },
      partLogo: {
        paddingTop:30,
        paddingRight:20,
        backgroundColor: 'white',
        flex: 30,
        alignItems : 'center'
      },
      partProfile: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flex: 70
      },
      partBetWeen: {
       
      },
      partB: {
        paddingTop:20,
        flex: 50,
        flexDirection: 'column',
        // backgroundColor: '#D85454'
      },

      partTelephone: {
        flex: 5,
        flexDirection: 'row',
        // backgroundColor: '#BA54D8'
      },
      telephoneA: {
        flex: 2,
        flexDirection: 'column',
        // backgroundColor: '#BA54D8'
      },
      telephoneB: {
        flex: 3,
        flexDirection: 'column',
        // backgroundColor: '#BA54D8'
      },
      title: {
        color: 'blue',

        width: 100,
        fontSize: 23
      },
      textButton: {
        fontSize:20,
        backgroundColor: '#325DD2'
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
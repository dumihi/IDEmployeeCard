import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Slider,
} from "react-native";
import Gallery from "react-native-image-gallery";

var { height, width } = Dimensions.get("window");
var image = [
  require("../../img/0.jpg"),
  require("../../img/1.jpg"),
  require("../../img/2.jpg"),
  require("../../img/3.jpg"),
  require("../../img/4.jpg"),
  require("../../img/5.jpg"),
];

export class SlideImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: true,
    };

    var actionImage = () => {
      this.setState(previousState => {
        return {
          index: !previousState.index,
        };
      });
    };

    const time = 2000;
    setInterval(actionImage, time);
  }

  render() {
    var index = true;
    var a = 0;
    if (this.state.index === true) {
      a = Math.floor(Math.random() * 6);
    } else {
      a = Math.floor(Math.random() * 6);
    }
    return (
      <View style = {styles.slide}>
         <Gallery
         
        // images={[{ source: { uri: image[0] } }]}
        
        images={[{ source : image[a] }]}
      />
      </View>     
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    width: width,
    height: width*0.66,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    width: width,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    textAlign: "center",
  },
});

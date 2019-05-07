import React from 'react'
import { StyleSheet,Image,Dimensions, View,TouchableOpacity } from 'react-native'


var { height, width } = Dimensions.get('window')
export default class MenuButton extends React.Component {
	render() {
		return(
			<View style={styles.footer}>
			<TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
					<Image
					style={styles.imageIcon}
					source={require('../../img/menu.png')}
		  />
		</TouchableOpacity>
		</View>
			
		)
	}
}

const styles = StyleSheet.create({
	footer: {
	  flexDirection: 'row',
	  width: width,
	  height: 60,
	  justifyContent: 'flex-start',
	  alignItems: 'center',
	  backgroundColor: '#80d6ff'
	},
	text: {
	  width: 60,
	  justifyContent: 'center',
	  alignItems: 'center',
	  color: 'white',
	  paddingTop: 15,
	  marginLeft: (width-60)/2 - 60,
	  fontSize: 20,
	  fontWeight: 'bold'
	},
	imageIcon: {
	  marginTop: 15,
	  marginLeft: 10,
	  width: 50,
	  height: 50,
	  alignItems: 'flex-start',
	  justifyContent: 'flex-start'
	}
  })
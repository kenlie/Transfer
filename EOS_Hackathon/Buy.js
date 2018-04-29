import React from 'react';
import { StyleSheet, Text, View, Button, Alert, 
TextInput, Dimensions,TouchableHighlight, TouchableOpacity, Image, Linking } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

export default class Buy extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }

  goToWebsite = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }


  render() {
    var username = this.props.location.search.length > 0 ? this.props.location.search.split('?')[1] : ''
    var homeURL = "/home?"+username
    return (
      <View style={styles.container}>
        <TouchableHighlight style={{position: "absolute", top: 35, left: 10, width: 100, height: 50}}>
          <Link
            to={homeURL}
            underlayColor='#f0f4f7'>
              <Text style={{fontSize: 20, color: 'gray', width: 100, height: 50}}>Tilbake</Text>
          </Link>
        </TouchableHighlight>
          <TouchableHighlight onPress={() =>this.goToWebsite('https://www.kaupangkrypto.no')}>
            <Image source={require('./kaupaung.jpeg')} style={{width: 300, height: 50, marginBottom: 100}}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={() =>this.goToWebsite('https://bitgate.no')}>
            <Image 
              source={require('./bitspace.jpeg')} 
              style={{width: 300, height: 50}}/>
          </TouchableHighlight>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width
  }
});

import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Dimensions, Image, Keyboard} from 'react-native';
import { Link } from 'react-router-native';

export default class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }

  render() {
    var url = "/home?"+this.state.username
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 100, position: "absolute", top: 120}}
          source={{uri: 'https://i.imgur.com/pT8TJbR.png'}}/>
        <TextInput 
        style={{
          height: 40, 
          marginBottom: 20, 
          fontSize: 20,
          borderBottomWidth: 1, 
          width: 200}}
        placeholder="Brukernavn"
        autoCapitalize="none"
        onChangeText={(username) => this.setState({username: username})}/>

        <TextInput 
        style={{
          height: 40, 
          marginBottom: 40, 
          fontSize: 20, 
          borderBottomWidth: 1, 
          width: 200}}
        placeholder="Passord"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password: password})}/>
        <Link
          to={url}
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text style={{
              fontSize: 30, 
              color: "#146690"}}>Log in</Text>
        </Link>
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

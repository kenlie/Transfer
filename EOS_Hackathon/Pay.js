import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Dimensions, Keyboard } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native';

export default class Pay extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        sender: this.props.location.search.split('?')[1],
        receiver: '',
        amount: '',
        balance: this.props.balance
      };
    }



  transact = () => {
    var sender = this.state.sender;
    var receiver = this.state.receiver;
    var amount = this.state.amount;
    // Temporary server to serve the local EOS blockchain
    var url = "http://4f8225e3.ngrok.io/transact?sender="+sender+"&receiver="+receiver+"&amount="+String(amount)
    
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.body);
    })
    .catch((error) => {
      console.error(error);
    });
  };


  render() {
    var username = this.props.location.search.split('?')[1]
    var homeURL = "/home?"+username
    return (
      <View style={styles.container}>
        <View style={{position: "absolute", top: 35, left: -70, width: 250, height: 150}}>
          <Link
            to={homeURL}
            underlayColor='#f0f4f7'>
              <Text style={{fontSize: 20, color: 'gray', width: 100, height: 50}}>Tilbake</Text>
          </Link>
        </View>
        <TextInput 
        style={{
          height: 40, 
          marginBottom: 20, 
          fontSize: 15, 
          borderBottomWidth: 1,
          width: 200}}
        placeholder="Til"
        autoCapitalize="none"
        onChangeText={(receiver) => this.setState({receiver: receiver})}/>

        <TextInput 
        style={{
          height: 40, 
          marginBottom: 40, 
          fontSize: 15, 
          borderBottomWidth: 1, 
          width: 200}}
        placeholder="Beløp"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={(amount) => this.setState({amount: amount})}/>
        <Text 
          onPress={this.transact} 
          title="Betal"
          style={{
            fontSize: 50, 
            color: "#146690",
            marginBottom: 180
          }}>Betal</Text>
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
  }
})
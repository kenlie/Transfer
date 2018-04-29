import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, AsyncStorage} from 'react-native';
import { Link } from 'react-router-native';

export default class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        balance: '',
        username: ''
      };
    }

  getBalance = (username) => {
    if (username.length !== 0){
      var url = "http://4f8225e3.ngrok.io/getbalance?username="+username
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({balance: responseJson.body.split('.')[0]});
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  componentWillMount = () => {
    var username = this.props.location.search.split('?')[1]
    this.setState({username: username})
    this.getBalance(username)
  }

  render() {
    var payUrl = "/pay?"+this.state.username
    var buyUrl = "/buy?"+this.state.username
    return (
      <View style={styles.container}>
        <Text style={{
          marginBottom: 100,
          fontSize: 30
        }}>Saldo: {this.state.balance}</Text>
        <Link
          to={payUrl}
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text style={{
              fontSize: 20, 
              color: "white", 
              backgroundColor: "#5289EF", 
              padding: 10, 
              borderWidth: 5,
              overflow: "hidden",
              borderColor: "#5289EF",
              marginBottom: 40,
              borderRadius: 10}}>Betal</Text>
        </Link>
        <Link
          to={buyUrl}
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text style={{
              fontSize: 20, 
              color: "white", 
              backgroundColor: "#5289EF", 
              padding: 10, 
              borderWidth: 5,
              overflow: "hidden",
              borderColor: "#5289EF",
              marginBottom: 150,
              borderRadius: 10}}>Kjøp krypto</Text>
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
  }
});

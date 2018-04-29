import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Pay from './Pay';
import Buy from './Buy';
import Login from './Login';
import Home from './Home';

const Index = () => (
  <Login />
)



const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Index}/>
      <Route path="/home" component={Home}/>
      <Route path="/pay" component={Pay}/>
      <Route path="/buy" component={Buy}/>
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App
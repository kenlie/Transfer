import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.png'

const RowDiv =styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

`
const ColDiv =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const Img =styled.div`
  width: 400px;
  height: 300px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
`

const Text = styled.h1`
  font-size: 70 px;
  color: #2a2a2a;

`
const SubText = styled.h2`
  font-size: 10 px;
  color: #414141;
`
const RegText = styled.h2`
  font-size: 20 px;
  margin:10px;
  color: #5289ef
`

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tore: 0,
      svein: 0,
      run: true
    };
  }

  getBalance = (sender) => {

    var url = "http://4f8225e3.ngrok.io/getbalance?username=" + sender;

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.body);
      if(sender === "user2"){
        this.setState({tore: responseJson.body})
      }else if(sender ==="tester2"){
        this.setState({svein: responseJson.body})
      }
    })
    .catch((error) => {
      console.error(error);
    });

  };


  render() {

    //this.getBalance("user2");
    //this.getBalance("tester2");


    return (
      <div className="App">
        <RowDiv>
          <Img>
          </Img>
        </RowDiv>
        <RowDiv>

          <ColDiv>
            <Text>
              Erling
            </Text>
            <SubText>
              Saldo:
            </SubText>
            <RegText>
              {this.state.tore}
            </RegText>
          </ColDiv>

          <ColDiv>
            <Text>
              Muhammad
            </Text>
            <SubText>
              Saldo:
            </SubText>
            <RegText>
              {this.state.svein}
            </RegText>
          </ColDiv>
        </RowDiv>
      </div>
    );
  }
}

export default App;

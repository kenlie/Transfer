const express = require('express')
const app = express()
const Eos = require('eosjs') // Eos = require('./src')
const exec = require('child_process').exec;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });


eos = Eos.Localnet({keyProvider: '5JVtJgBV9926GaPevyXRGcG9vseUbEwsp6rbJba246ToBmTKmv1'})

var url = 'http://127.0.0.1:8888/v1/chain/get_currency_balance'
var data = {code: "ken.token" , account: "user2", symbol: "KEN"}

var balance = 0

function getBalance(req, res){
  let balance = 0
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      code: 'ken.token',
      account: req.query.username
    }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then(function(res){
    return res.json()
  }).then(function(body){
    console.log(body[0])
    res.send({body: body[0]})
  })
}

//MÅ HA MED 1.0000 aka 4 desimaler
function transact(sender, receiver, amount){
  var sender1 = sender;
  var receiver1 = receiver;
  var amount = amount+""
  var token = "KEN"
  var runSh = exec(`sh cm.sh  ${sender1} ${receiver1} ${amount} ${token}`,
          (error, stdout, stderr) => {
              console.log(`${stdout}`);
              console.log(`${stderr}`);
              if (error !== null) {
                  console.log(`exec error: ${error}`);
              }
          });


}


app.get('/', (req, res) => res.send('Hello World!', 'hei'))
app.get('/getbalance', function(req, res){
  console.log(req.query.username)
  var balance = getBalance(req, res);
  //res.send('Hello World!' + getBalance())
})
app.get('/transact', function(req, res){
  console.log(req.query.amount)
  transact(req.query.sender, req.query.receiver, req.query.amount+".0000");
  //res.send('Hello World!' + getBalance())
})


app.listen(4000, () => console.log('Example app listening on port 4000!'))

const express = require('express');
const path = require('path')
const app = express()
port = 3080;

// place holder for the data
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com",
    elm:`
    <div class="a">
    hello
    </div>`
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com",
    elm:'<div class="b">hello</div>'
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com",
    elm:'<div class="c">hello</div>'
  }
];

app.use(express.json());
app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user::::::::', user);
  users.push(user);
  res.json("user addedd");
});


app.get('*', (req, res) => {
  console.log('test');
  console.log(req.url);
  res.sendFile(path.join(__dirname, '../app/build/index.html'));
});

app.listen(port, () => {
  console.log('\x1b[32m%s\x1b[0m', '┌───────────────────────────────────────────────────┐');
  console.log('\x1b[32m%s\x1b[0m', '│                                                   │');
  console.log('\x1b[32m%s\x1b[0m', '│   Serving!                                        │');
  console.log('\x1b[32m│  \x1b[0m','\x1b[1m- Local:           \x1b[0m','http://localhost:3080      ','\x1b[32m│\x1b[0m');
  console.log('\x1b[32m│  \x1b[0m','\x1b[1m- On Your Network: \x1b[0m','http://192.168.10.68:3080  ','\x1b[32m│\x1b[0m');
  console.log('\x1b[32m%s\x1b[0m', '│                                                   │');
  console.log('\x1b[32m│  \x1b[0m', '\x1b[2mCopied local address to clipboard!             \x1b[0m','\x1b[32m│\x1b[0m');
  console.log('\x1b[32m%s\x1b[0m', '│                                                   │');
  console.log('\x1b[32m%s\x1b[0m', '└───────────────────────────────────────────────────┘');
});
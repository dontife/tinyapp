const express = require('express');
const bodyParser = require('body-parser');
const app =  express();
const PORT = 8080; // default port 8080


function generateRandomString() {
  Array.from(Array(6), () => 
  Math.floor(Math.random() * 36).toString(36)).join('');
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get('/', (req, res) => {
  res.send('Hello!');
});
app.get('/urls', (req, res) =>{
  const templateVars = {urls : urlDatabase };
  res.render('urls_index', templateVars);

});
app.get('/urls.json', (req, res) => {
  res.send(urlDatabase);
});

app.get('/urls/new', (req, res) => {
  res.render('urls_new');
});

app.get('/hello', (req, res) =>{
  res.send('<html><body> Hello <b>World</b></body></html>\n')
});

app.post('/urls', (req, res) => {
  console.log(req.body);
  res.send('OK');
})

app.get('/set', (req, res) =>{
  const a = 1;
  res.send(`a = ${a}`);
});

app.get('/urls/:shortURL', (req, res) => {
  const templateVars = {shortURL: req.params.shortURL, longURL : urlDatabase[req.params.shortURL]}
  res.render('urls_show', templateVars); 
})
app.get('/fetch', (req, res) => {
  res.send(`a = ${a}`);
})

app.listen(PORT, () =>{
  console.log(`Example app listening on port ${PORT}!`)
});
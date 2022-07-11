const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.get('/', (req, res) => {
  // res.sendFile('./index.html', {root: __dirname});
  const mahasiswa = [
    {
      nama: "Andi saputra",
      email: "andi@gmail.com"
    },
    {
      nama: "Alif",
      email: "alif@gmail.com"
    },
    {
      nama: "Doddy",
      email: "doddy@gmail.com"
    },
  ]
  const obj = {
    nama: "Andi saputra",
    title: "Halaman Home",
    layout: 'layouts/main-layout',
    mahasiswa,
  }
  res.render('index', obj);
})
app.get('/about', (req, res) => {
  // res.sendFile('./about.html', {root: __dirname});
  const obj = {
    title: "Halaman About",
    layout: 'layouts/main-layout'
  }
  res.render('about', obj);
})
app.get('/contact', (req, res) => {
  // res.sendFile('./contact.html', {root: __dirname});
  const obj = {
    title: "Halaman Contact",
    layout: 'layouts/main-layout'
  }
  res.render('contact', obj);
})

app.get('/product/:id/category/:idCat', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
})
app.get('/items/:id', (req, res) => {
  res.send(`Items ID : ${req.params.id} <br> Items Category : ${req.query.catItem}`);
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('Page Not Found. 404')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
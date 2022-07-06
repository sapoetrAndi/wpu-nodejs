const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Andi Saputra')
  // res.json({
  //   nama: "andi saputra",
  //   email: "andisaputra@gmail.com"
  // })

  //bisa mengirimkan file seperti pdf dll juga
  res.sendFile('./index.html', {root: __dirname});
})
app.get('/about', (req, res) => {
  // res.send('Halaman About')
  res.sendFile('./about.html', {root: __dirname});
})
app.get('/contact', (req, res) => {
  // res.send('Halaman Contact')
  res.sendFile('./contact.html', {root: __dirname});
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




// const http = require("http");
// const fs = require("fs");

// const port = 3000;
// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if(err){
//       res.writeHead(404);
//       res.write('Error: file not found!');
//     }else{
//       res.write(data);
//     }
//     res.end();
//   })
// };

// http
// .createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type' : 'text/html',
//   });

//   const url = req.url;

//   switch (url) {
//     case '/about':
//       renderHTML('./about.html', res);
//       break;
//     case '/contact':
//       renderHTML('./contact.html', res);
//       break;
//     default:
//       renderHTML('./index.html', res);
//       break;
//   }

//   // if(url === '/about'){
//   //   renderHTML('./about.html', res);
//   // }else if(url === '/contact'){
//   //   renderHTML('./contact.html', res);
//   // }else{
//   //   renderHTML('./index.html', res);
//   // }

// })
// .listen(port, () => {
//   console.log(`Server is listening on port ${port}..`);
// });




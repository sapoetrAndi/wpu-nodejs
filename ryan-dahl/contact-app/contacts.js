//Core Module
//File System
const fs = require('fs');
//Readline
const readline = require('readline');

//membuat folder data jika belum ada
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//membuat file contacts.json jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}


//async await adalah cara untuk mengatasi callback hell seperti di bawah ini
// rl.question('Masukan nama anda: ', (nama) => {
//   rl.question('Masukan No Hp anda: ', (noHp) => {
//     const contact = {nama, noHp};
//     const file = fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(file);

//     contacts.push(contact);

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
//     console.log(`Terimakasih ${nama}, sudah menginputkan data`);
//     rl.close();
//   })
// })

//async await harus menggunakan promise
const inPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (par) => {
      resolve(par)
    })
  })
}

const simpanContact = (nama, email, noHp) => {
  const contact = {nama, email, noHp};
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  
  console.log(`Terimakasih ${nama}, sudah menginputkan data`);
  rl.close();
}

module.exports = {
  inPertanyaan, simpanContact
}
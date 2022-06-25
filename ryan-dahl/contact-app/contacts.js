//Core Module
//File System
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

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


const simpanContact = (nama, email, noHp) => {
  const contact = {nama, email, noHp};
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);

  //cek duplikat data
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
    return false;
  }

  //cek email valid
  if(email){
    if(!validator.isEmail(email)){
      console.log(chalk.red.inverse.bold('Email tidak valid!'));
      return false;
    }
  }

  //cek nomor HP
  if(!validator.isMobilePhone(noHp, 'id-ID')){
    console.log(chalk.red.inverse.bold('Nomor Handphone tidak valid!'));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  
  console.log(chalk.green.inverse.bold(`Terimakasih sudah menginputkan data`));
}

module.exports = {
  simpanContact
}
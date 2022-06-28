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
const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}

const simpanContact = (nama, email, noHp) => {
  const contact = {nama, email, noHp};
  const contacts = loadContact();

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


const listContact = () => {
  const contacts = loadContact();

  console.log(chalk.green.inverse.bold(`Daftar Kontak : `));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
  });
}

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase() );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHp);
  if(contact.email){
    console.log(contact.email);
  }
}

const deleteContact = (nama) => {
  const contacts = loadContact();

  const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

  
  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
  
  console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus`));
  console.log(loadContact());
}


module.exports = {
  simpanContact, listContact, detailContact, deleteContact
}
//Core Module
//File System
const fs = require('fs');

console.log(fs);

//menuliskan string ke file (synchronous)
//pakai try catch jika Sync
// try {
//   fs.writeFileSync('test.txt', 'Hello world secara Sync!!');  
// } catch (error) {
//   console.log(error);
// }

//membaca isi file (synchronous)
// const data = fs.readFileSync('test.txt', 'utf8');
//console.log(data.toString());//jika tidak pakai parameter ke-3
// console.log(data);

//menuliskan string ke file (asynchronous)
// fs.writeFile('data/text.txt', 'Hello world secara asynchronous!!', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

//membaca isi file (asynchronous)
fs.readFile('data/text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


//Readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukan nama anda: ', (nama) => {
  rl.question('Masukan No Hp anda: ', (noHp) => {
    const contact = {nama, noHp};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
    console.log(`Terimakasih ${nama}, sudah menginputkan data`);
    rl.close();
  })
})
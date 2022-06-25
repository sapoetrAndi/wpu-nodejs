const yargs = require("yargs");
const contacts = require('./contacts');

//cara pertama
// yargs.command('add', 'menambahkan contact baru', () => {}, (argv) => {
//   console.log(argv.nama);
// });

//cara kedua
yargs.command({
  command: 'add',
  describe: 'Menambahkan kontak baru',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string'
    },
    noHp: {
      describe: 'Nomor Handphone',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    // const contact = {
    //   nama: argv.nama,
    //   email: argv.email,
    //   noHp: argv.noHp,
    // };
    // console.log(contact);
    contacts.simpanContact(argv.nama, argv.email, argv.noHp)
  },
});

yargs.parse();
// const { simpanContact, inPertanyaan } = require("./contacts");

// const main = async () =>{
//   const nama =  await inPertanyaan('masukan nama anda: ');
//   const email =  await inPertanyaan('masukan email anda: ');
//   const noHp =  await inPertanyaan('masukan No Hp anda: ');

//   simpanContact(nama, email, noHp);
// }

// main();
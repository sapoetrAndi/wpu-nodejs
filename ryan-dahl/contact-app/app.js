const { simpanContact, inPertanyaan } = require("./contacts");

const main = async () =>{
  const nama =  await inPertanyaan('masukan nama anda: ');
  const email =  await inPertanyaan('masukan email anda: ');
  const noHp =  await inPertanyaan('masukan No Hp anda: ');

  simpanContact(nama, email, noHp);
}

main();
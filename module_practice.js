const sayHi = name => {
  console.log(`supppp ${name}`)
}

const login = (pswd, usrnm) => {
  console.log(usrnm);
  console.log(pswd)
}
const names = require('./modules')
console.log(names)
//sayHi(names)
//login(names.secretPswd, names.my_username)
console.log(require('./modules').singlePerson['shim'])

const shoutout = () =>{
  console.log('what\'s goooood?!')
}
shoutout()
const gmailPswd = 'getmoneybabbyyy'

const friends = {
  best: 'Zaneta',
  bro:'Chris',
  colleague:['Tom','Diego','Austin','Dor']
}

const {bro} = friends

module.exports = {gmailPswd, bro}
module.exports.friendsList = friends

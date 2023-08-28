const os = require('os')



const sysInfo = {
  name:os.type(),
  uptime: `${(os.uptime()/60)/60/24} days`,
  user:os.userInfo()
}


console.log(sysInfo)

const http = require('http');

const server = http.createServer((req,res)=>{ //req is the incoming request (method info...etc) from user, res is outgoing response
  if (req.url === '/'){ //if the request is the home page ('/')
    res.end('Aye you made it bih')
  }
  if (req.url === '/about'){
    res.end('Here\'s a little sum sum about us')
  }
  res.end(`<h1>Wait...tf are you looking for?</h1><p> hahahahahhaahaaaaa</p>
  <a href="/">Back Home</a>`)
})

server.listen(5000) //what port the server is listening on

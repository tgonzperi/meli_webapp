const https = require("https");

const options = {
  hostname: 'api.mercadolibre.com',
  port: 443,
  path: '/sites/MLU/search?location_id=TUxVUE1PTlo2MDIy&category=MLU455676&limit=3',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Authorization': 'APP_USR-4696191946473664-102208-1f62c061d785260864c9b67c81645fc1-183414573'
  }
}

https
  .request(options, resp => {
    // log the data
    resp.on("data", d => {
      process.stdout.write(d);
    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });
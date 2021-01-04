const bcrypt = require("bcryptjs");
const user = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "yash",
    email: "yash@gmail.com",
    password: bcrypt.hashSync("yash", 10),
    isAdmin: false,
  },
  {
    name: "tarun",
    email: "tarun@gmail.com",
    password: bcrypt.hashSync("tarun", 10),
    isAdmin: false,
  },
];
module.exports = user;

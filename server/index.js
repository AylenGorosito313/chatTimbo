require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./src/app");
require("./src/models/coment");
require("./src/models/users");
const {DB_URI } = process.env;


require("./src/models/User");
require("./src/models/Message");
require("./src/models/Conversation");




async function main() {
  mongoose.set('strictQuery',false)
  await mongoose.connect(`${DB_URI}`).then(()=>{console.log("MongoDB")})
  server.listen(3001, async () => {

      console.log("server on port  3001  :) ");
    });
}


main()
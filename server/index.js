const mongoose = require("mongoose");
const server = require("./src/app");
require("./src/models/coment");
require("./src/models/users");



require("./src/models/User");
require("./src/models/Message");
require("./src/models/Conversation");


const uri = `mongodb+srv://kumani:agro123@cluster0.nkhpj6t.mongodb.net/test`;

async function main() {
  mongoose.set('strictQuery',false)
  await mongoose.connect(`${uri}`).then(()=>{console.log("MongoDB")})
  server.listen(3001, async () => {

      console.log("server on port  3001  :) ");
    });
}


main()
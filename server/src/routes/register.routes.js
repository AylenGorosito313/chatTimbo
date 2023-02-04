const { Router } = require("express");
const { registerUser } = require("../controller/Login");
const usersRouter = Router();
usersRouter.post('/user/create', registerUser)
module.exports = usersRouter;
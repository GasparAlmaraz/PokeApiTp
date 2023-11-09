const express = require('express');
const { getUser, postUser, updateUser } = require("../controllers");

const userRouter = express.Router();

userRouter.get("/getUser", getUser);
userRouter.post("/postUser", postUser);
userRouter.put("/updateUser", updateUser);

module.exports = userRouter;

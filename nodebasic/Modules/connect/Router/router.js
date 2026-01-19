const express = require("express")

const Router = express.Router()
const {handelGetAllUSers , handelGetAllUSersById,handleDeleteGetAllUserById,handleUpdateGetAllUserById,handleCreateNewUser} =  require("../contoroller/contoroller")

Router.route("/",).get(handelGetAllUSers).post(handleCreateNewUser)
Router.route("/:id").get(handelGetAllUSersById).delete(handleDeleteGetAllUserById).patch(handleUpdateGetAllUserById)


module.exports = Router
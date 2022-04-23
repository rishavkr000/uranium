const jwt = require("jsonwebtoken");
const { exists } = require("../models/userModel");
const userModel = require("../models/userModel");

//=============================================================================================//

const createUser = async function (req, res) {
    let data = req.body;
    if(!await userModel.exists(data)){
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
    }
    else res.send({msg: "This user already exists."})
};

//==============================================================================================//

const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not correct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "uranium",
        organisation: "FunctionUp",
      },
      "Rishav"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
    
};

//========================================================================================//

const getUserData = async function (req, res) {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
};

//=========================================================================================//

const updateUser = async function (req, res) {
  let userData = req.body;
  let userId = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

//=================================================================================//

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let deletedUser = await userModel.findOneAndDelete({_id: userId}, {isDeleted: true});
  res.send({ status: deletedUser, data: deletedUser})
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser= deleteUser;

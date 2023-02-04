const { Coment } = require("../models/coment");

const { Users } = require("../models/users");

const createComent = async (req, res) => {
  const { userId } = req.query;
  const { coment } = req.body;
  console.log(coment, userId);
  try {
    let searchUser = await Users.findByPk(userId);
    if (!searchUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    let createComent = await Coment.create({
      autor: `${searchUser.name} ${searchUser.lastName}`,
      coment,
      profile: searchUser.profile_img,
    });

    createComent.userId = userId;
    await createComent.save();

    return res.status(200).json({
      message: "Coment add",
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const deleteComent = async (req, res) => {
  const { userId, comentId } = req.query;
  console.log("aca esta el usuario:", userId);
  console.log("aca esta el comentarioId:", comentId);
  try {
    const findUser = await Users.findByPk(userId);
  
    if (!findUser) {
      res.status(400).json({ message: "user not found" });
    }
    const findComent = await Coment.findByPk(comentId);
  
    const deleteComent = await Coment.destroy({
      where: {
        id: comentId,
      },
    });

    res.status(200).json({ message: "comentario eliminado con exito" });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

// ruta: crear usuario, loggear, pasar un id de juego, registrarme como provedoor, subir un juego, comentar el juego.

module.exports = { createComent, deleteComent };

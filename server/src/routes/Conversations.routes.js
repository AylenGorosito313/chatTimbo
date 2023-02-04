
const router = require("express").Router();

const Conversation = require("../models/Conversation");
// crear conversacion 
router.post("/", async (req, res) => {
  const { senderId, receiverId } = req.body;
  const newConversation = new Conversation({
    members: [senderId, receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get  obtener conversacion de un usuario 

router.get("/:userId", async (req, res) => {
    const {userId } = req.params;
  try {
    const conversation = await Conversation.find({
      members: { $in: [userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get obtener conv de dos usuarios 

router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
    const {firstUserId,secondUserId} = req.params;
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [firstUserId,secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

import mongoose from "mongoose";

//Eita holo schema create korlam
const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Eita holo model create korlam upore j schema ta create korlam
const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;

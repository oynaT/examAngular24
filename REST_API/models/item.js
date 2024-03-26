const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

//TODO: Change fields depending on the project
const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, `Name is required`],
      minlength: [4, "Make must contain atleast 4 characters"],
    },
    description: { type: String },
    location: { type: String, required: [true, "Location is required"] },
    price: {
      type: Number,
      default: 0,
    },
    img: { type: String },
    owner: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Item = model("Item", schema);

module.exports = Item;

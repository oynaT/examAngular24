const Item = require("../models/item");
const User = require("../models/user");

async function getAll() {
  return Item.find({});
}

async function getTopFive() {
  return Item.find({}).sort({ createdAt: "desc" }).limit(5);
}

async function getAllAdsByOwner(ownerId) {
  return Item.find({ owner: ownerId }).sort("");
}

function getById(id) {
  return Item.findById(id).populate("owner");
}

async function create(item) {
  const result = new Item(item);
  await result.save();

  const user = await User.findById(result.owner);
  user.myAds.push(result._id);
  await user.save();

  return result;
}

async function update(id, item) {
  const existing = await Item.findById(id);

  //TODO: Change names according to requirements

  existing.name = item.name;
  existing.description = item.description;
  existing.location = item.location;
  existing.price = item.price;
  existing.img = item.img;
  await existing.save();

  return existing;
}

async function deleteById(id) {
  await Item.findByIdAndDelete(id);
}

async function searchFunction(text) {
  console.log("----> Services", text);
  return Item.find({
    $or: [{ name: { $regex: `${text}` } }, { location: { $regex: `${text}` } }],
  });
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
  getTopFive,
  searchFunction,
  getAllAdsByOwner,
};

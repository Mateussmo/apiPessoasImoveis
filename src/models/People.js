const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  cpf: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

PeopleSchema.plugin(mongoosePaginate);

mongoose.model("People", PeopleSchema);

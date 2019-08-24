const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ImmobileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  offerType: {
    type: String,
    required: true
  },
  immobileType: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  numberDormitory: {
    type: Number,
    required: true
  },
  hasGarage: {
    type: Boolean,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    require: true
  },
  houseNumber: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  image: {
    type: String
  },
  people: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "People",
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ImmobileSchema.plugin(mongoosePaginate);

mongoose.model("Immobile", ImmobileSchema);

const mongoose = require("mongoose");

//emp exp schema
const expSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    yrs: {
      type: Number,
      required: true,
    },
  },
  { strict: "throw" }
);

//address schema
const addressSchema = new mongoose.Schema(
  {
    city: {
      type: String,
    },
    street: {
      type: String,
    },
  },
  { strict: "throw" }
);

//emp schema(name,age, skills,exp,address)
const empSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    skills: {
      type: [String],
      required: true,
    },
    exp: {
      type: [expSchema],
      required: true,
    },
    address: {
      type: addressSchema,
    },
  },
  { strict: "throw" }
);

//emp model
const EmpModel = mongoose.model("emp", empSchema);

module.exports=EmpModel

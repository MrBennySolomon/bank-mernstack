import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema(
  {
    cash: {
      type: Number,
      required: [true, "Please add cash"]
    },
    credit: {
      type: Number,
      required: [true, "Please add credit"]
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please add account owner ID"],
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform: function(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    },
    toObject: {
      virtuals: true,
      transform: function(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

export default mongoose.model("Account", AccountSchema);
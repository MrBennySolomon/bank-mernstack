import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Please add a name"]
    },
    cash: {
      type: Number,
      required: [true, "Please add cash"]
    },
    credit: {
      type: Number,
      required: [true, "Please add credit"]
    }
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

export default mongoose.model("User", UserSchema);

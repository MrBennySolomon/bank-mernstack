import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Please add a name'],
  },
  cash: {
    type: Number,
    required: [true, 'Please add cash']
  },
  credit: {
    type: Number,
    required: [true, 'Please add credit']
  }
});

export default mongoose.model('User', UserSchema);
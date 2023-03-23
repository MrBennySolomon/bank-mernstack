import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  cash: {
    type: Number,
    required: [true, 'Please add cash']
  },
  credit: {
    type: Number,
    required: [true, 'Please add credit']
  },
  owner: {
    name: {
      type: String,
    required: [true, 'Please account owner']
    }
  }
});

export default mongoose.model('Account', AccountSchema);
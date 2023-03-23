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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
});

export default mongoose.model('Account', AccountSchema);
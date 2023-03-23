import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  accounts: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Account',
    required: true
  }]
});

export default mongoose.model('User', UserSchema);
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, 
  state: String,
  profession: String,
  marital_status: Boolean,
  date: { type: Date, default: Date.now },
});

const User = mongoose.model('users', userSchema);

export default User;


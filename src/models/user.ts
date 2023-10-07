import { Schema, model, models } from 'mongoose'

/* creamos schema */
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is not valid",
    ]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  fullname: {
    type: String,
    required: [true, "Fullname is required"],
    minLength: [3, "fullname must be at least 3 characters"],
    maxLength: [50, "fullname must be at most 50 characters"],
  }
})

/* aqui si no existe el modelo user lo crea , sino exporta de una vez */
const User = models.User || model('User', userSchema)
export default User;
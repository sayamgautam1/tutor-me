const { AuthenticationError } = require('apollo-server-express')
const { User, Skill } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    skills: async () => {
      return Skill.find()
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({
          email: context.user.email,
        })
      }
      throw new AuthenticationError('You must be signed in')
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user)
      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('No user found with this email address')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }

      const token = signToken(user)

      return { token, user }
    },
  },
}

module.exports = resolvers

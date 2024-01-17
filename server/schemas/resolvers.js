const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    //finds all users in database
    users: async (parent, args) => {
      const user = await User.find();
      return user;
    },

    //finds a single user by id
    user: async (parent, { _id }) => {
      const singleUser = await User.findById(_id);
      return singleUser;
    },

    products: async (parent, { name }) => {
      const params = {};
      if (name) {
        params.name = {
          $regex: name,
        };
      }
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("products");
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, email, password}
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });
      // console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      // console.log(user);
      const token = signToken(user);
      return { token, user };
    },

    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw AuthenticationError;
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },

    updatePassword: async (parent, { _id, password }) => {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        { password },
        { new: true }
      );
        console.log(updatedUser);
      return updatedUser;
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;

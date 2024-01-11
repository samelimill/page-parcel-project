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

    // orders: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: "orders.products",
    //     });

    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }

    //   throw AuthenticationError;
    // },

    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;

    //   await Order.create({ products: args.products.map(({ _id }) => _id) });
    //   const line_items = [];

    //   for (const product of args.products) {
    //     line_items.push({
    //       price_data: {
    //         currency: "usd",
    //         product_data: {
    //           name: product.name,
    //           description: product.description,
    //         },
    //         unit_amount: product.price * 100,
    //       },
    //       quantity: product.purchaseQuantity,
    //     });
    //   }

    //     const session = await stripe.checkout.sessions.create({
    //       payment_method_types: ["card"],
    //       line_items,
    //       mode: "payment",
    //       success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //       cancel_url: `${url}/`,
    //     });

    //     return { session: session.id };
    //   },
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
      console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
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

import mongoose from "mongoose";
const OrderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },

    products: {
      type: Array,
      require: true,
    },

    total: {
      type: Number,
      rewuire: true,
    },

    address: {
      type: String,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
    },

    status: {
      type: String,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;

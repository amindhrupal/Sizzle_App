import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
})

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      name: item.name,
      amount: item.price * 100, // amount in paisa
      currency: "INR",
      quantity: item.quantity
    }));

    line_items.push({
      name: "Delivery charges",
      amount: 2 * 100, // amount in paisa
      currency: "INR",
      quantity: 1
    });

    const options = {
      amount: req.body.amount * 100, // amount in paisa
      currency: "INR",
      receipt: newOrder._id.toString(),
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    res.json({ success: true, session_id: order.id });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder };

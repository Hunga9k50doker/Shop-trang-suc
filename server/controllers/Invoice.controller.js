import InvoiceModel from "../models/Invoice.model.js";
import mongoose from "mongoose";

export const getAllInvoice = async (req, res) => {
  try {
    const invoice = await InvoiceModel.find();
    return res.status(200).json({ success: true, data: invoice });
  } catch (error) {
    console.log(error.message);
  }
};

export const getInvoiceUser = async (req, res) => {
  const { _id } = req;
  try {
    const invoice = await InvoiceModel.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "invoiceDetails.product",
          foreignField: "_id",
          as: "invoiceDetails.product",
        },
      },
    ]);
    const quantity = await InvoiceModel.find(
      { user: _id },
      { "invoiceDetails.quantity": 1 }
    );
    // const invoice = await InvoiceModel.find({ user: _id });
    return res.status(200).json({
      success: true,
      data: invoice,
      quantityProduct: quantity[0].invoiceDetails,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createInvoice = async (req, res) => {
  const { _id } = req;
  const { phoneNumber, address, total, invoiceDetails } = req.body;
  const invoice = new InvoiceModel({
    user: _id,
    phoneNumber,
    address,
    total,
    invoiceDetails,
  });
  try {
    await invoice.save();
    return res.status(200).json({ success: true, data: invoice });
  } catch (error) {
    console.log(error.message);
  }
};

export const changeStatus = async (req, res) => {
  const { status, invoiceId } = req.body;
  try {
    const invoice = await InvoiceModel.findById(invoiceId);
    invoice.status = status;
    await invoice.save();
    return res.status(200).json({ success: true, data: invoice });
  } catch (error) {
    console.log(error.message);
  }
};

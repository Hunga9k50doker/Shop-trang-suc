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
    const invoice = await InvoiceModel.find({ user: _id });
    return res.status(200).json({
      success: true,
      data: invoice,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getInvoiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await InvoiceModel.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(id),
        },
      },
      {
        $unwind: "$invoiceDetails",
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
      { _id: mongoose.Types.ObjectId(id) },
      { "invoiceDetails.quantity": 1 }
    );
    return res.json({
      success: true,
      data: invoice,
      quantityProduct: quantity[0].invoiceDetails,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const createInvoice = async (req, res) => {
  const { _id } = req;
  const { phoneNumber, address, total, invoiceDetails, name } = req.body;
  const invoice = new InvoiceModel({
    user: _id,
    phoneNumber,
    address,
    total,
    invoiceDetails,
    name,
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

import Trekking from "../models/Trekking.js";
import Destination from "../models/Destination.js";
import { createError } from "../utils/error.js";

export const createTrekking = async (req, res, next) => {
  const destinationId = req.params.destinationid;
  const newTrekking = new Trekking(req.body);

  try {
    const savedTrekking = await newTrekking.save();
    try {
      await Destination.findByIdAndUpdate(destinationId, {
        $push: { Trekkings: savedTrekking._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedTrekking);
  } catch (err) {
    next(err);
  }
};

export const updateTrekking = async (req, res, next) => {
  try {
    const updatedTrekking = await Trekking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTrekking);
  } catch (err) {
    next(err);
  }
};
export const updateTrekkingAvailability = async (req, res, next) => {
  try {
    await Trekking.updateOne(
      { "TrekkingNumbers._id": req.params.id },
      {
        $push: {
          "TrekkingNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Trekking status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteTrekking = async (req, res, next) => {
  const DestinationId = req.params.Destinationid;
  try {
    await Trekking.findByIdAndDelete(req.params.id);
    try {
      await Destination.findByIdAndUpdate(DestinationId, {
        $pull: { Trekkings: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Trekking has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getTrekking = async (req, res, next) => {
  try {
    const Trekking = await Trekking.findById(req.params.id);
    res.status(200).json(Trekking);
  } catch (err) {
    next(err);
  }
};
export const getTrekkings = async (req, res, next) => {
  try {
    const Trekkings = await Trekking.find();
    res.status(200).json(Trekkings);
  } catch (err) {
    next(err);
  }
};
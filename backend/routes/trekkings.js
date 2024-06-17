import express from "express";
import {
  createTrekking,
  deleteTrekking,
  getTrekking,
  getTrekkings,
  updateTrekking,
  updateTrekkingAvailability,
} from "../controllers/trekking.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:trekkingid", verifyAdmin, createTrekking);

//UPDATE
router.put("/availability/:id", updateTrekkingAvailability);
router.put("/:id", verifyAdmin, updateTrekking);
//DELETE
router.delete("/:id/:destinationid", verifyAdmin, deleteTrekking);
//GET

router.get("/:id", getTrekking);
//GET ALL

router.get("/", getTrekkings);

export default router;
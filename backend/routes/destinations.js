import express from "express";
import Destination from "../models/Destination.js";
import { createError } from "../utils/error.js";
import { countByRegion, createDestination, deleteDestination, getDestination, getDestinations, updateDestination } from "../controllers/destination.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createDestination);

//UPDATE
router.put("/:id", verifyAdmin, updateDestination);

//DELETE
router.delete("/find/:id", verifyAdmin, deleteDestination);

//GET
router.get("/:id", getDestination);

//GET ALL
router.get("/", getDestinations);
router.get("/countByRegion", countByRegion);
router.get("/countByType", getDestinations);


export default router;
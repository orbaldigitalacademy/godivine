const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const Booking = require("../models/Booking");
const protect = require("../middleware/authMiddleware");
const { JWT_SECRET } = require("../config");

const router = express.Router();


// =============================
// 🔐 ADMIN LOGIN
// =============================
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// =============================
// 📊 ADMIN DASHBOARD (BOOKINGS ONLY)
// =============================
router.get("/dashboard", protect, async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();

    const pendingBookings = await Booking.countDocuments({
      status: "Pending",
    });

    const recentBookings = await Booking.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalBookings,
      pendingBookings,
      recentBookings,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// =============================
// 📅 GET ALL BOOKINGS
// =============================
router.get("/bookings", protect, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error("Fetch bookings error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// =============================
// 🔄 UPDATE BOOKING STATUS
// =============================
router.put("/bookings/:id/status", protect, async (req, res) => {
  try {
    const { status } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updatedBooking);
  } catch (error) {
    console.error("Update booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
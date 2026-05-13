const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const Admin = require("./models/Admin");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// Seed Admin
const createAdmin = async () => {
  const existing = await Admin.findOne({
    email: "admin@godivine.com",
  });

  if (!existing) {
    const hashedPassword = await bcrypt.hash("1234", 10);

    await Admin.create({
      email: "admin@godivine.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin created");
  } else {
    console.log("ℹ️ Admin already exists");
  }
};

// Connect DB + Start Server
mongoose
  .connect("mongodb://127.0.0.1:27017/cateringDB")
  .then(async () => {
    console.log("✅ MongoDB connected");

    await createAdmin();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ DB Error:", err));
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

async function seedAdmin() {
  try {
    const existingAdmin = await Admin.findOne({
      email: "admin@godivine.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      email: "admin@godivine.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin seeded successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seedAdmin();
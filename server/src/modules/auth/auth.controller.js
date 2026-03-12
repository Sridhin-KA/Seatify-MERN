import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as authService from "./auth.service.js";

export const register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await authService.findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await authService.createUser({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await authService.findUserByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const changeUserRole = async (req, res) => {

  try {

    const { role } = req.body;

    const user = await authService.updateUserRole(
      req.params.id,
      role
    );

    res.json(user);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};
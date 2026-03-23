import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as userService from "./auth.service.js";

export const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingUser = await userService.findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userService.createUser({
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
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    const user = await userService.findUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { id: user._id, isEmployee: user.isEmployee },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000
    }).json({
      message: "Login successful",
      user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUsers = async (req, res) => {
  try {

    const users = await userService.getUsers();

    res.json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const makeEmployee = async (req, res) => {
  try {

    const user = await userService.makeEmployee(req.params.id);

    res.json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
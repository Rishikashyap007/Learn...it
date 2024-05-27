// import User from "../Models/UserModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const registerUser = async (req, res) => {
//   console.log(req.body);
//   try {
//     const { username, email, password } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       console.log("User with this email already exists");
//       return res
//         .status(400)
//         .json({ message: "User with this email already exists" });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });
//     console.log(user);
//     res
//       .status(201)
//       .json({ success: true, msg: "User created sucessfully", data: user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, msg: error });
//   }
// };

import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Course from "../Models/courseModel.js";

export const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User with this email already exists");
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log(user);
    res
      .status(201)
      .json({ success: true, msg: "User created successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error });
  }
};

export const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "USer Not found" });
    }
    const isMatched = bcrypt.compare(password, user.password);

    if (isMatched) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      console.log(token);

      const options = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("userToken", token, options);
      res.status(201).json({ success: true, data: user, token });
    } else {
      return res
        .status(404)
        .json({ success: false, msg: "User Not authorized" });
    }
  } catch (error) {
    res.status(404).json({ success: false, msg: error.msg });
  }
};

export const getallusers = async (req, res) => {
  const user = await User.find({});
  res.status(201).json({ success: true, data: user });
};

export const getUserbyID = async (req, res) => {
  try {
    const userDetails = await User.findById(req.params.id).populate(
      "coursesEnrolled"
    );
    if (!userDetails) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }
    res
      .status(201)
      .json({ success: true, msg: "user found", data: userDetails });
  } catch (error) {
    return res.status(404).json({ success: false });
  }
};

export const enrolledin = async (req, res) => {
  try {
    const userId = req.params.id;
    const { courseid } = req.body;

    const user = await User.findById(userId);
    const course = await Course.findById(courseid);

    if (!user || !course) {
      return res.status(404).json({ message: "User or Course not found" });
    }

    user.coursesEnrolled.push(courseid);

    await user.save();

    res.status(200).json({ message: "You are enrolled in this course" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getEnrolledCourse = async (req, res) => {
  try {
    const courseID = req.params.id;

    const course = await Course.findById(courseID );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

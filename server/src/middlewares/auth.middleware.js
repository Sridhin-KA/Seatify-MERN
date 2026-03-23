import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    // 1. Get token from cookies
    const token = req.cookies?.token;

    // 2. Check token exists
    if (!token) {
      return res.status(401).json({
        message: "Access denied. No token provided"
      });
    }

    // 3. Verify token using ENV secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach user to request
    req.user = decoded;

    // 5. Continue
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

  // const authHeader = req.headers.authorization;



  // if (!authHeader) {
  //   return res.status(401).json({
  //     message: "No token provided"
  //   });
  // }

  // const token = authHeader.split(" ")[1];

  // try {

  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   req.user = decoded;

  //   next();

  // } catch (error) {

  //   res.status(401).json({
  //     message: "Invalid token"
  //   });

  

// };
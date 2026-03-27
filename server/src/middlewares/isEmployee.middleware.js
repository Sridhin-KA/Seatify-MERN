export const isEmployee = (req, res, next) => {
  if (!req.user.isEmployee) {
    return res.status(403).json({
      message: "Access denied. Employees only",
    });
  }

  next();
};
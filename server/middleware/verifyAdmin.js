const verifyAdmin = (req, res, next) => {
  const { role } = req;
  if (role !== "admin") {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }
  next();
};

export default verifyAdmin;

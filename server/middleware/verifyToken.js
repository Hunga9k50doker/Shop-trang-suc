import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const authToken = await req.header("Authorization");
  const token = authToken && authToken.split(" ")[1];
  if (!token) {
    return res.json({ success: false, message: "Token not found" });
  }
  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded) {
      return res.json({ success: false, message: "Token is invalid" });
    }
    req._id = decoded._id;
    req.role = decoded.role;
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default verifyToken;

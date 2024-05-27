// export const verifyToken = (req, res, next) => {
//     const token = req.headers.cookies;
//     console.log(token);
//     if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) return res.status(401).json({ message: 'Unauthorized' });
//       req.user = decoded;
//       next();
//     });
//   };
  

import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
};


export default verifyToken;
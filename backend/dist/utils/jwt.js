import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
    console.error('Error: JWT_SECRET no está definido en las variables de entorno');
    process.exit(1);
}
export const generarToken = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: '7d' });
};
export const verifyToken = (token) => {
    return jwt.verify(token, SECRET);
};

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

function getRoleFromEmail(email) {
  if (email.startsWith('admin.')) return 'admin';
  if (email.startsWith('prof.')) return 'professor';
  return 'student';
}

exports.register = async (req, res) => {
  const { emri, email, password } = req.body;

  try {
    // Kontrollo nëse email ekziston
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Nxjerr rolin nga email
    const roli = getRoleFromEmail(email);

    const user = await User.create({
      emri,
      email,
      password: hashedPassword,
      roli,
    });

    res.status(201).json({ message: 'User registered successfully', user: { id: user.id, emri: user.emri, email: user.email, roli: user.roli } });
  } catch (err) {
    console.error("Gabim gjatë regjistrimit:", err);
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: "Invalid password" });

    // Nxjerr rolin nga email (ose mund ta marrë nga DB)
    const roli = getRoleFromEmail(user.email);

    const token = jwt.sign(
      { id: user.id, roli },  // token me id dhe rol
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
};

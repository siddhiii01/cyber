import express from 'express';
import cors from 'cors';
import axios from 'axios';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
const JWT_SECRET="your-super-wfalkeh3rhvhjnjfskjfkjdskjdskj"



const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' })); 

const users = [];
// SIGNUP
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    };

    users.push(newUser);
    console.log("New user : ", newUser)

    // Generate token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // set true in production
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
app.post('/analyze', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Received message:', message.substring(0, 100) + '...');

    const aiResponse = await axios.post(
      'http://127.0.0.1:8000/detect-scam',
      message.trim(),
      {
        headers: { 'Content-Type': 'text/plain' }
      }
    );
    const data = aiResponse.data;
    res.json({
      verdict: data.verdict,
      confidence_score: data.confidence_score,
      explanation: data.explanation,
      red_flags: data.red_flags || []
    });
  } catch (err) {
    console.error('Analysis error:', err.message);
    res.status(500).json({
      error: 'Analysis failed. AI service might be down.'
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
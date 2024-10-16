import { NextApiRequest, NextApiResponse } from 'next';

//Template API for Registration page (straight from ChatGPT)

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// In-memory "database"
let users: User[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Add user to the in-memory database
    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      password, // In a real-world app, ensure you hash the password!
    };

    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
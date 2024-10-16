import { NextApiRequest, NextApiResponse } from 'next';

// A simple API route to handle profile updates
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Simulate a successful profile update
        res.status(200).json({ message: 'Profile updated successfully!' });
    } else {
        // Handle other request methods (GET, PUT, DELETE, etc.)
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
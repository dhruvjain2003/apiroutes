import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET') {
        const filePath = path.join(process.cwd(), 'data', 'products.json');
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const products = JSON.parse(jsonData);

        res.status(200).json(products);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

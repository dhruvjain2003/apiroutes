import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const filePath = path.join(process.cwd(), 'data', 'products.json');
            
            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ message: 'products.json file not found' });
            }

            const jsonData = fs.readFileSync(filePath, 'utf8');
            const products = JSON.parse(jsonData);
            setTimeout(() => {
                res.status(200).json(products);
            }, 2000); 
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

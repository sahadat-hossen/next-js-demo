import { connectToDatabase } from '../../dbConfig';

export default async function handler(req, res) {
  const pool = await connectToDatabase();

  switch (req.method) {
    case 'GET':
      try {
        const result = await pool.request().query('SELECT * FROM Products');
        res.status(200).json(result.recordset);
      } catch (err) {
        res.status(500).json({ message: 'Error retrieving products', error: err.message });
      }
      break;

    case 'POST':
      try {
        const { name, price } = req.body;
        await pool
          .request()
          .input('name', sql.VarChar, name)
          .input('price', sql.Decimal(18, 2), price)
          .query('INSERT INTO Products (Name, Price) VALUES (@name, @price)');
        res.status(201).json({ message: 'Product created successfully' });
      } catch (err) {
        res.status(500).json({ message: 'Error creating product', error: err.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} not allowed`);
  }
}

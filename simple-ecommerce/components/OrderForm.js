import { useState } from 'react';
const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        product: '',
        quantity: 1,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data (e.g., send it to an API)
        console.log('Order submitted:', formData);
      };
  
    return (
      <form onSubmit={handleSubmit} className="order-form space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product" className="block font-semibold">Product:</label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity" className="block font-semibold">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded">Place Order</button>
      </form>
    );
  };
  export default OrderForm;
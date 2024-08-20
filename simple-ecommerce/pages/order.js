import OrderForm from '../components/OrderForm';

const OrderPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Place Your Order</h1>
      <OrderForm />
    </div>
  );
};

export default OrderPage;

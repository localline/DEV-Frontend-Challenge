import moment from 'moment';

const OrderHeader = ({ order }) => {
  const formatOrderDate = (dateString) => {
    return moment(dateString).format('dddd, MMMM Do YYYY');
  };

  const statusClasses = {
    open: 'bg-green-100 text-green-800',
    closed: 'bg-red-500 text-white',
    default: 'bg-gray-200 text-gray-800',
  };

  const orderStatusClass = statusClasses[order.status.toLowerCase()] || statusClasses.default;

  return (
    <div className="p-2 border-dashed border-b-2 border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">
          Order {order.id} · {order.supplier.business_name}
        </h2>
        <span className={`px-3 py-1 font-medium text-sm rounded-full ${orderStatusClass}`}>
          {order.status}
        </span>
      </div>
      <p className="font-medium mb-1 text-gray-500">Placed {formatOrderDate(order.created_at)}</p>
    </div>
  );
}

export default OrderHeader;

const OrderList = ({ orderEntries }) => {
    return (
        <ul className="border-b border-gray-200">
            {orderEntries.map((entry, index) => (
                <li
                    key={entry.id}
                    className={`flex items-center justify-between mb-3 p-4 ${index !== orderEntries.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                    <div className="flex-none w-12 h-12 bg-gray-200 mr-4 rounded" />

                    <div className="flex-grow flex justify-between">
                        <div>
                            <p className="font-medium text-sm text-gray-800">{entry.product_name} x{entry.unit_quantity}</p>
                            <p className="font-medium text-sm text-gray-500">${entry.price.toFixed(2)} / {entry.package_name}</p>
                        </div>

                        <div className="text-right">
                            <a href="#" className="font-medium text-sm text-green-800 underline">view</a>
                            <p className="font-medium text-sm text-gray-800">${entry.total_price.toFixed(2)}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default OrderList;

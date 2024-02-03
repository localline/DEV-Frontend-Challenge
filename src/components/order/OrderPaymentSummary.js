const OrderPaymentSummary = ({ orderData }) => {
    const { subtotal, fulfillment_fees, tax, total, payment, salestax_rate } = orderData;
    const calculatedTax = tax || (subtotal * salestax_rate);

    return (
        <div className="w-full sm:w-72 p-5 ml-auto">
            <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-500">Subtotal</span>
                <span className="font-medium text-gray-500">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-500">Delivery Fee</span>
                <span className="font-medium text-gray-500">${fulfillment_fees.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-3 border-b border-gray-200 pb-4">
                <span className="font-medium text-gray-500">Tax</span>
                <span className="font-medium text-gray-500">${calculatedTax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2.5 text-gray-800">
                <span className="text-lg font-semibold text-gray-800">Total</span>
                <span className="text-lg font-semibold text-gray-800">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-500">Payment Status</span>
                <span className="font-medium text-gray-500">{payment.status}</span>
            </div>
            <button className="border border-gray-300 rounded p-2 font-medium text-sm w-full text-gray-800">
                View invoice
            </button>
        </div>
    );
}

export default OrderPaymentSummary;

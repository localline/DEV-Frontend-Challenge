import moment from 'moment';

const OrderPaymentDetails = ({ orderData }) => {
    const paymentMethod = orderData.payment.payment_strategy_name;
    const paymentDueDate = orderData.payment.due_date;
    const formattedPaymentDueDate = paymentDueDate ? moment(paymentDueDate).format('dddd, MMMM Do, YYYY') : '';

    return (
        <div className="p-2">
            {paymentMethod && (
                <div className="flex items-center">
                    <p className="flex-grow-0 font-medium text-gray-800">Payment · {paymentMethod}</p>
                    <div className="flex-grow h-px bg-gray-200 ml-2.5" />
                </div>
            )}
            <div className="p-2">
                {paymentDueDate && (
                    <div className="flex justify-between my-2">
                        <p className="font-medium text-gray-500">Payment Due</p>
                        <p className="font-medium text-gray-800">{formattedPaymentDueDate}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderPaymentDetails;

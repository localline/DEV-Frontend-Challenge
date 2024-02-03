const OrderFulfillment = ({ fulfillment }) => {
  return (
    <div className="p-2">
      <div className="flex items-center">
        <p className="flex-grow-0 font-medium text-gray-800">Pickup</p>
        <div className="flex-grow h-px bg-gray-200 ml-2.5" />
      </div>
      <div className="p-2">
        {fulfillment.fulfillment_address && (
          <>
            <p className="my-2 font-medium text-gray-500">Pickup Address</p>
            <p className="font-medium text-gray-800">{fulfillment.fulfillment_address}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderFulfillment;

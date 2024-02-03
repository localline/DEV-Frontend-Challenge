export default function OrderLine({line}) {
  const STR_MAX_LENGTH = 20;

  const unitPrice = parseFloat(line.price_per_unit).toFixed(2);
  const totalPrice = parseFloat(line.total_price).toFixed(2);
  const productName = `${line.product_name.substring(0, STR_MAX_LENGTH)}${line.product_name.length >= 20 ? '...' : ''} x${line.unit_quantity}`
  return (
    <>
      <div className={'order-line-wrapper flex py-3 gap-2'}>
        <div className={'flex bg-Grey100 border rounded w-12 h-12 text-xs'}>
          <em className={'m-auto text-center cursor-default text-Grey300'}>No Image</em>
        </div>
        <div className={'flex flex-col justify-between'}>
          <div className={'text-sm text-Grey800'} title={line.product_name}>
            {productName}
          </div>
          <div className={'text-Grey500 text-sm'}>${unitPrice} / {line.package_name}</div>
        </div>
        <div className={'flex flex-col justify-between ml-auto text-right'}>
          <a className={'text-sm underline cursor-pointer'}>view</a>
          <div className={'text-sm text-Grey800'}>${totalPrice}</div>
        </div>
      </div>
      <hr/>
    </>
  )
}

import {toTitleCase} from '@/app/functions/string';
import DetailLine from '@/app/components/DetailLine';

export default function InvoiceDetails({order}) {
  return (
    <section className={'grid grid-cols-1 sm:grid-cols-2 py-4'}>
      <div className={'flex flex-col gap-y-4 sm:col-start-2'}>
        <DetailLine title={'Subtotal'} value={`\$${order.subtotal}`}></DetailLine>
        <DetailLine title={'Delivery Fee'} value={`\$${order.fulfillment_fees?.toFixed(2)}`}></DetailLine>
        <DetailLine title={'Tax'} value={`\$${order.tax?.toFixed(2)}`}></DetailLine>
        <hr/>
        <div className={'flex'}>
          <span className={'text-lg font-bold text-Grey800'}>Total:</span><span className={'ml-auto text-lg font-bold text-Grey800'}>${order.total}</span>
        </div>
        <DetailLine title={'Payment Status'} value={toTitleCase(order.payment?.status)} textClasses={'leading-6'}></DetailLine>
        <button className={'border border-Grey300 py-[9px] px-[13px] rounded'}>View Invoice</button>
      </div>
    </section>
  )
}

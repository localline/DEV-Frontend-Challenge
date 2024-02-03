import moment from 'moment';
import OrderLine from '@/app/components/OrderLine';
import InvoiceDetails from '@/app/components/InvoiceDetails';
import PickupDetails from '@/app/components/PickupDetails';
import PaymentDetails from '@/app/components/PaymentDetails';
import OrderNotes from '@/app/components/OrderNotes';
import NoteForm from '@/app/components/NoteForm';
import Image from 'next/image';

import chevronLeft from '@/assets/icons/chevron-left.svg';

export default function OrderCard({order}) {
  const orderLines = order.order_entries?.map((entry) => <OrderLine key={entry.id} line={entry}/>);
  const orderDate = moment(order.opened_at).format('dddd, MMMM D YYYY');

  return (
    <section id={'order-card'} className={'order-card-wrapper w-full sm:w-2/3 lg:max-w-2xl'}>
      <a className={'flex text-Grey500 font-medium text-sm cursor-pointer hover:underline px-4'}>
        <Image width={6} height={20} className={'inline mr-2 my-auto'} priority src={chevronLeft} alt={'Chevron pointing left'}/>
        Back to orders
      </a>
      <div className={'flex flex-col gap-2 bg-white sm:rounded-xl mt-4 p-4 shadow-card border border-Grey200'}>
        <section className={'order-header flex flex-col justify-around gap-2 pb-2'}>
          <div className={'flex justify-between'}>
            <h1 className={'text-base font-bold leading-4'}>Order {order.id} · {order.supplier?.business_name}</h1>
            <div className={'text-sm bg-Green100 text-Green800 rounded-2xl py-1 px-3 leading-4'}>Open</div>
          </div>
          <h2 className={'text-sm text-Grey500 font-medium leading-4'}>Placed {orderDate}</h2>
        </section>
        <hr className={'dashed'}/>
        <section>
          {orderLines}
        </section>
        <InvoiceDetails order={order}/>
        <PickupDetails fulfillment={order.fulfillment}/>
        <PaymentDetails payment={order.payment}/>
        <OrderNotes order={order}/>

        <hr className={'dashed'}/>
        <NoteForm orderId={order.id}/>
      </div>
    </section>
  )
}

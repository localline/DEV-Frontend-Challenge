import DOMPurify from 'dompurify';
import InfoPanel from '@/app/components/InfoPanel';

export default function OrderNotes({order}) {
  function getDisplayNote(note) {
    return note.split('\n').map((n) => `<p class='py-1 text-Grey800'>${n}</p>`).join('');
  }

  return (
    <InfoPanel title={'Order Notes'}>
      <div className={'flex flex-col gap-1'}>
        <div className={'text-Grey500 text-sm'}>Checkout note from you</div>
        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(getDisplayNote(order.customer_note))}}/>
        {
          order.order_note &&
          <>
            <div className={'text-Grey500 text-sm'}>Checkout note from {order.supplier?.business_name}</div>
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(getDisplayNote(order.order_note))}}/>
          </>
        }
      </div>
    </InfoPanel>
  )
}

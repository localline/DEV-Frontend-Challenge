import DetailLine from '@/app/components/DetailLine';
import moment from 'moment';
import InfoPanel from '@/app/components/InfoPanel';

export default function PaymentDetails({payment}) {
  const isCard = payment.payment_strategy_name.toLowerCase() === 'card';
  const dueDate = moment(payment.due_date).format('dddd, MMMM D YYYY');
  return (
    <InfoPanel title={'Payment'} subtitle={payment?.payment_strategy_name}>
      <div className={'flex flex-col gap-4'}>
        {isCard && <DetailLine title={'Card'} value={'N/A'}/>}
        <DetailLine title={'Payment Due'} value={dueDate}/>
      </div>
    </InfoPanel>
  )
}

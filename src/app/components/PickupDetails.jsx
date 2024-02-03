import DetailLine from '@/app/components/DetailLine';
import InfoPanel from '@/app/components/InfoPanel';
import MapLink from '@/app/components/MapLink';

export default function PickupDetails({fulfillment}) {
  const address = <>{fulfillment?.fulfillment_address} <MapLink address={fulfillment?.fulfillment_address}/></>;
  return (
    <InfoPanel title={fulfillment?.type_display}>
      <div className={'flex flex-col gap-4'}>
        <DetailLine title={'Pickup Date'} value={fulfillment?.fulfillment_date || 'N/A'}/>
        <DetailLine title={'Pickup Timeslot'} value={fulfillment?.pickup_start_time || 'N/A'}/>
        {
          fulfillment?.fulfillment_address &&
          <DetailLine title={'Pickup Address'} value={address} lineBreak/>
        }
        <DetailLine title={'Pickup Instructions'} value={fulfillment?.instructions || 'N/A'} lineBreak/>
      </div>
    </InfoPanel>
  )
}

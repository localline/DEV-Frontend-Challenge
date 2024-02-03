export default function MapLink({address}) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURI(address)}`;

  return <a href={url} target={'_blank'} aria-label={'Google Maps Link'} className={'text-sm underline'}>Map</a>
}

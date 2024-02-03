export default function Divider({title, subtitle}) {
  return (
    <div className={'flex'}>
      <h1 className={'text-sm font-medium text-Grey800 pr-3'}>{title} {subtitle && `· ${subtitle}`}</h1>
      <div className={'flex-grow h-px bg-Grey200 my-auto'}></div>
    </div>
  )
}

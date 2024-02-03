export default function DetailLine({title, value, lineBreak, textClasses = 'leading-[16.96px]'}) {

  return (
    <div className={`flex ${lineBreak && 'flex-col'}`}>
      <p className={`text-sm font-medium text-Grey500 ${textClasses}`}>{title}</p>
      <p className={`text-sm font-medium text-Grey800 ${textClasses} ${!lineBreak && 'ml-auto'}`}>{value}</p>
    </div>
  )
}

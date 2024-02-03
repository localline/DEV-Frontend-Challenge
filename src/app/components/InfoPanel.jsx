import Divider from '@/app/components/Divider';

export default function InfoPanel({title, subtitle, children}) {
  return (
    <section className={'flex flex-col'}>
      <Divider title={title} subtitle={subtitle}/>
      <div className={'px-2 pt-4 pb-2'}>
        {children}
      </div>
    </section>
  )
}

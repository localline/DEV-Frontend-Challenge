import Divider from '@/app/components/Divider';

export default function InfoPanel({title, subtitle, children}) {
  return (
    <section className={'flex flex-col gap-4'}>
      <Divider title={title} subtitle={subtitle}/>
      <div className={'p-2'}>
        {children}
      </div>
    </section>
  )
}

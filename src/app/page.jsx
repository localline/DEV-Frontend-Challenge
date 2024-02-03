'use client';

import {useState, useEffect} from 'react';
import {fetchOrder} from '@/app/services/orders';
import OrderCard from '@/app/components/OrderCard';

export default function Home() {
  const [order, setOrder] = useState();

  useEffect(() => {
    fetchOrder().then(res => {
      setOrder(res);
    }).catch(e => {
      console.error(e);
    });
  }, []);

  return (
    <main
      className="order-page-wrapper flex min-h-screen flex-col items-center justify-between bg-Grey50 py-4 sm:pt-10">
      {order && <OrderCard order={order}/>}
    </main>
  );
}

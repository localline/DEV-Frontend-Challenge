'use client';

import {useState, useEffect} from 'react';
import {fetchOrder} from '@/app/services/orders';
import OrderCard from '@/app/components/OrderCard';

export default function Home() {
  return (
    <main className="order-page-wrapper flex min-h-screen flex-col items-center justify-between py-4 sm:pt-10">
      <OrderCard/>
    </main>
  );
}

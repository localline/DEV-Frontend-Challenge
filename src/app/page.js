'use client';

import { useState, useEffect } from 'react';
import OrderHeader from '@/components/order/OrderHeader';
import OrderList from '@/components/order/OrderList';
import OrderPaymentSummary from '@/components/order/OrderPaymentSummary';
import OrderFulfillment from '@/components/order/OrderFulfillment';
import OrderPaymentDetails from '@/components/order/OrderPaymentDetails';
import OrderNote from '@/components/order/OrderNote';
import { updateOrderNote } from '@/utils/orderNoteApi';
import { encodeCredentials } from '@/utils/auth';

async function fetchOrderData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`);

    if (!res.ok) {
        throw new Error('Failed to fetch order data');
    }

    return res.json();
}

const Page = () => {
    const [orderData, setOrderData] = useState(null);
    const [note, setNote] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchOrderData();
                setOrderData(data);
                setNote(data.customer_note);
            } catch (error) {
                console.error('Error fetching order data:', error);
            }
        };

        fetchData();
    }, []);

    const handleUpdateNote = async (newNoteContent) => {
        const orderId = orderData.id;
        const apiEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${orderId}`;
        const username = process.env.NEXT_PUBLIC_API_USERNAME;
        const password = process.env.NEXT_PUBLIC_API_PASSWORD;
        const base64Credentials = encodeCredentials(username, password);
        try {
            const updatedNote = await updateOrderNote(apiEndpoint, base64Credentials, newNoteContent);

            if (updatedNote) {
                setNote(updatedNote.order_note);
            } else {
                console.error('Failed to update order note');
            }
        } catch (error) {
            console.error('Error updating order note:', error);
        }
    };

    if (!orderData) {
        return (
            <div className="p-0 sm:p-8">
                <div className="bg-white border-gray-200 border max-w-xl m-auto shadow-2xl rounded-2xl p-2">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-0 sm:p-8">
            <div className="max-w-2xl m-auto text-left mb-4">
                <a href="#" className="flex items-center text-sm text-gray-500 font-medium pt-6 px-2">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 0.292893C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L2.41421 5L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L4.29289 0.292893C4.68342 -0.097631 5.31658 -0.097631 5.70711 0.292893Z" fill="#9CA3AF" />
                    </svg>
                    Back to Orders
                </a>
            </div>
            <div className="bg-white border-gray-200 border max-w-2xl m-auto shadow-2xl rounded-2xl p-2">
                <OrderHeader order={orderData} />
                <OrderList orderEntries={orderData.order_entries} />
                <OrderPaymentSummary orderData={orderData} />
                <OrderFulfillment fulfillment={orderData.fulfillment} />
                <OrderPaymentDetails orderData={orderData} />
                <OrderNote note={note} onUpdateNote={handleUpdateNote} orderData={orderData} />
            </div>
        </div>
    );
}

export default Page;

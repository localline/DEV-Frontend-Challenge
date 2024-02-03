import { updateOrderNote } from '@/utils/orderNoteApi';
import { encodeCredentials } from '@/utils/auth';

export async function PATCH(req) {
    const data = await req.json();
    const { order_note } = data;

    if (!order_note) {
        return new Response(JSON.stringify({ error: 'Note is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    const username = process.env.NEXT_PUBLIC_API_USERNAME;
    const password = process.env.NEXT_PUBLIC_API_PASSWORD;
    const base64Credentials = encodeCredentials(username, password);
    const apiEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;
    const updatedNote = await updateOrderNote(apiEndpoint, base64Credentials, order_note);

    if (updatedNote) {
        return new Response(JSON.stringify(updatedNote), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } else {
        return new Response(JSON.stringify({ error: 'Failed to update note' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

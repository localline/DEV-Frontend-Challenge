export async function sendNote(note, orderId) {
  const headers = new Headers();
  const authString = process.env.NEXT_PUBLIC_AUTH_USERNAME + ':' + process.env.NEXT_PUBLIC_AUTH_PASSWORD;

  headers.set('Authorization', 'Basic ' + btoa(authString));
  headers.set('Content-Type', 'application/json')

  try {
    const res = await fetch(`https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/${orderId}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({order_note: note})
    });

    return res.ok;
  } catch (e) {
    console.error('Problem sending note', e);

    return Promise.reject(e);
  }
}

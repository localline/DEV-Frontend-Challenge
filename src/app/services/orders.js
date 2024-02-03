export async function fetchOrder() {
  try {
    const response = await fetch('https://vop4f76uc3.execute-api.us-east-1.amazonaws.com');

    if (!response.ok) {
      return Promise.reject(new Error('Problem fetching order'));
    }

    return (await response.json()) || {};
  } catch (e) {
    console.error('Problem fetching order', e);

    return Promise.reject(e);
  }
}

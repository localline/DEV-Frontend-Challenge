export async function fetchOrder() {
  try {
    const response = await fetch('https://vop4f76uc3.execute-api.us-east-1.amazonaws.com');

    return (await response.json()) || {};
  } catch (e) {
    console.error(e);
  }
}

function encodeCredentials(username, password) {
  return Buffer.from(`${username}:${password}`).toString('base64');
}

export { encodeCredentials };

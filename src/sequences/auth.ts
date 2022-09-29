import type { Handle } from '@sveltejs/kit';

const auth: Handle = async ({ event, resolve }) => {
  return resolve(event);
};

export default auth;

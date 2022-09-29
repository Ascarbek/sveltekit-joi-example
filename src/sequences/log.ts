import type { Handle } from '@sveltejs/kit';

const log: Handle = async ({ event, resolve }) => {
  const method = event.request.method;
  const path = event.url.pathname;
  console.log(`${method}: ${path}`);

  return resolve(event);
};

export default log;

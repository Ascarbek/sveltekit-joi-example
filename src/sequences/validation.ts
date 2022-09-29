import type { Handle } from '@sveltejs/kit';
import entrySchema from '../routes/api/entry/validation';

const map: { [keys: string]: any } = {
  '/api/entry': entrySchema,
};

const validation: Handle = async ({ event, resolve }) => {
  for (const url of Object.keys(map)) {
    if (event.url.pathname.indexOf(url) > -1) {
      const method = event.request.method;
      // we need to clone, otherwise it will have 'disturbed' error
      const req = event.request.clone();

      const params = await req.json();

      if (map[url][method]) {
        const { error } = map[url][method].validate(params);
        if (error) {
          let msg = '';
          if (error.details.length && error.details[0].message) {
            msg = error.details[0].message;
          } else {
            msg = 'unknown validation error';
          }

          return new Response(`Validation: ${msg}`, { status: 400 });
        }
      }
    }
  }

  return resolve(event);
};

export default validation;

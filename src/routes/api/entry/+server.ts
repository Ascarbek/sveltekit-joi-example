import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { SaveEntry } from '$lib/server/Entry';

export const POST: RequestHandler = async ({ request }) => {
  const params = await request.json();

  const { username, email, password, confirmPassword } = params;
  await SaveEntry(username, email, password, confirmPassword);

  return json({ success: true });
};

import { sequence } from '@sveltejs/kit/hooks';
import log from './sequences/log';
import auth from './sequences/auth';
import validation from './sequences/validation';

export const handle = sequence(log, auth, validation);

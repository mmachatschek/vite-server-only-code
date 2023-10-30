import { json } from '@remix-run/node';
import { helloWorld } from '~/feature/hello-world.server';

export const action = () => {
  return json(helloWorld());
};

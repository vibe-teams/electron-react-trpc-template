import { initTRPC } from '@trpc/server';
import z from 'zod';
const t = initTRPC.create();

export const router = t.router({
  getUser: t.procedure.input(z.object({ name: z.string() })).query((req) => {
    const { input } = req;
    return {
      text: input.name,
      id: Date.now(),
    };
  }),
});

export type Router = typeof router;

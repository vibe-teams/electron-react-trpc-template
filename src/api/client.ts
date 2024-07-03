import { createTRPCProxyClient } from '@trpc/client';
import { ipcLink } from 'electron-trpc/renderer';
import type { Router } from './index';

export const client = createTRPCProxyClient<Router>({
  links: [ipcLink<Router>()],
  transformer: undefined,
});

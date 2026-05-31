declare module '@vercel/node' {
  import type { IncomingMessage, ServerResponse } from 'node:http';

  export type VercelRequest = IncomingMessage & {
    query?: Record<string, any>;
    cookies?: Record<string, any>;
    body?: any;
    headers: Record<string, string>;
    url?: string;
    method?: string;
  };

  export type VercelResponse = ServerResponse & {
    status?: (code: number) => VercelResponse;
    send?: (body: any) => void;
    setHeader?: (name: string, value: any) => void;
    end?: (data?: any) => void;
  };

  export {};
}

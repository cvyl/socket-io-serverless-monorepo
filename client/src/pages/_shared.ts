export function getSocketServerOrigin(): string {
  const isUnsafeOrigin = location.protocol !== 'https:';
  return 'http://playground.cvyl.me';
}

export interface PageProps<M extends Record<string, string> = {}> {
  // e.g. /conn/:id
  path: string;

  // e.g. /conn/123
  url?: string;

  matches?: M;
}

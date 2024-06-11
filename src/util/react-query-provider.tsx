'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function ReactQueryProviders({ children }: React.PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true, // 윈도우가 다시 포커스되었을때 데이터를 refetch
          refetchOnMount: true, // 데이터가 stale 상태이면 컴포넌트가 마운트될 때 refetch
        },
      },
    }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

import { BackendApiInstance } from '@/util/Axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await BackendApiInstance(null).get('/api/v1/menus', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.data;
  return NextResponse.json(data);
}

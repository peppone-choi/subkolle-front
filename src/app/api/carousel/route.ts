import { BackendApiInstance } from '@/util/Axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await BackendApiInstance(null).get('/api/v1/carousels', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
  const data = await res.data;
  return NextResponse.json(data);
}

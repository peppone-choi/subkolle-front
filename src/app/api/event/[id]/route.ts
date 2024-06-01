import { BackendApiInstance } from '@/util/Axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: { id: string } }) {
  const res = await BackendApiInstance(null).get(`/api/v1/events/shortcut/${context.params.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
  const data = await res.data;
  console.log(data);

  return NextResponse.json(data);
}

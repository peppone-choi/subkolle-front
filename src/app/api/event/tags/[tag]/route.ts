import { BackendApiInstance } from '@/util/Axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: { tag: string } }) {
  console.log(context.params.tag);
  console.log(request);
  const res = await BackendApiInstance(null).get(`/api/v1/events/tag/${context.params.tag}`, {
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

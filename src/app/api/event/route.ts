import { BackendApiInstance } from '@/util/Axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await BackendApiInstance(null).get('/api/v1/events', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.error();
  }
}

import { BackendApiInstance } from '@/util/axios';
import { isAxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await BackendApiInstance().get('/api/v1/events', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return NextResponse.json(res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.response?.data },
        {
          status: error.response?.status,
        },
      );
    }
  }
}

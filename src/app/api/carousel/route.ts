import { BackendApiInstance } from '@/util/Axios';
import { AxiosError, isAxiosError } from 'axios';
import { error } from 'console';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await BackendApiInstance(null).get('/api/v1/carousels', {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 300,
    });
    const data = await res.data;
    return NextResponse.json(data);
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

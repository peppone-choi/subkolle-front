import { BackendApiInstance } from '@/util/axios';
import { isAxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await BackendApiInstance().get('/api/v1/menus', {
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

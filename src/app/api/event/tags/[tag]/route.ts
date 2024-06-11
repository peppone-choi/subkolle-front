import { BackendApiInstance } from '@/util/Axios';
import { isAxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: { tag: string } }) {
  try {
    const res = await BackendApiInstance(null).get(`/api/v1/events/tag/${context.params.tag}`, {
      headers: {
        'Content-Type': 'application/json',
      },
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

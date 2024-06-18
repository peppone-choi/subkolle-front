import { BackendApiInstance } from '@/util/axios';
import { isAxiosError } from 'axios';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  try {
    const res = await BackendApiInstance().get('/api/v1/users/logout', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: req.headers.get('authorization') as string,
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

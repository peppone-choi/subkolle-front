import { BackendApiInstance } from '@/util/axios';
import { isAxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const res = await BackendApiInstance().post(
      '/api/v1/users/login',
      JSON.stringify({
        email: email,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const response = NextResponse.json(res.data);
    response.headers.set('set-cookie', res.headers['set-cookie']?.[0].replace('Bearer+', 'Bearer ') as string);
    return response;
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

import { BackendApiInstance } from '@/util/Axios';
import { stat } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    const res = await BackendApiInstance(null).get(`/api/v1/events/shortcut/${context.params.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.data;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}

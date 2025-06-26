'use server';
import { cookies } from 'next/headers';

export async function SignOutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

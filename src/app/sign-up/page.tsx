import { getServerSession } from 'next-auth';
import SignUpForm from './sign-up-form';
import { redirect } from 'next/navigation';

export default async function SignUpPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return(
    <div className='flex justify-center min-h-screen items-center'>
      <SignUpForm />
    </div>
  )
}
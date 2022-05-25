import { client } from 'client';
import { useRouter } from 'next/router';

export default function Login() {
  const { useAuth } = client.auth;
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    return <h1>Redirecting to login...</h1>;
  } else if (!isLoading) {
    router.push('/');
    return null;
  }
}

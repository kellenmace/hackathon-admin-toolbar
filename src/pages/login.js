import { client } from "client";

export default function Login() {
    const { useAuth } = client.auth;
    const { isAuthenticated, isLoading } = useAuth();

    if (!isAuthenticated) {
        return <h1>Redirecting to login...</h1>
    } else if (!isLoading) {
        window?.location.href = '/';
        return null;
    }
}
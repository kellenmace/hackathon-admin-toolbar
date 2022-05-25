import { client } from 'client';

import AdminMenuBarMenu from './AdminMenuBarMenu';

export default function AdminMenuBar({ rootQuery = 'posts', args }) {
  const { useAuth } = client.auth;
  const { isAuthenticated } = useAuth({ shouldRedirect: false });

  if (!isAuthenticated) {
    return null;
  }

  return <AdminMenuBarMenu rootQuery={rootQuery} args={args} />;
}

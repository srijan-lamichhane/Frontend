'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const router = useRouter();

  // Check if the user is authenticated by looking at the cookie
  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [router]);

  return (
    <div>
      <h1>Protected Dashboard</h1>
      <p>Welcome, authenticated user!</p>
    </div>
  );
};

export default Dashboard;

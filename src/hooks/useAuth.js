import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData'); 
    if (!userData) {
      router.push('/login');
    }
  }, []);
};

export default useAuth;

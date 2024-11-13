'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import styles from './GoogleBtn.module.css';

export const GoogleBtn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  return (
    <button
      className={styles.button}
      onClick={() => signIn('google', { callbackUrl })}
    >
      Sign in with Google
    </button>
  );
};

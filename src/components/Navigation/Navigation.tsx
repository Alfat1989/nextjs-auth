'use client';

import { menuData } from '@/src/utils/menuData';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export const Navigation = ({ navLinks }) => {
  const pathname = usePathname();
  const session = useSession();

  console.log('pathname', pathname);
  console.log('session', session);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.menu}>
        {menuData.map(item => (
          <Link className={styles.link} key={item.label} href={item.link}>
            {item.label}
          </Link>
        ))}
        {session?.data && (
          <Link className={styles.link} href={'/profile'}>
            Profile
          </Link>
        )}
      </div>
      <div>
        {session?.data ? (
          <Link
            className={styles.link}
            href={'#'}
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Sign out
          </Link>
        ) : (
          <Link className={styles.link} href={'/signin'}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

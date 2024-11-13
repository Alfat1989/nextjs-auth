import { authConfig } from '@/src/configs/auth';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        // <Image
        //   width={200}
        //   height={200}
        //   alt="user avatar"
        //   src={session.user.image}
        // />
        <img src={session.user.image} alt="user avatar" />
      )}
    </div>
  );
}

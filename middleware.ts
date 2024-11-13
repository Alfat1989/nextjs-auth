export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/profile', '/blog', '/blog/:path*', '/protected/:path*'],
};

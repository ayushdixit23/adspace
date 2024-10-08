// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const authToken = request.cookies.get('auth')?.value;

//   const isUser = authToken ? true : false;

//   const response = NextResponse.next();
//   response.headers.set('x-is-user', isUser.toString());

//   if (!isUser) {
//     const loginUrl = new URL('/', request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return response;
// }

// export const config = {
//   matcher: ['/adspreview', '/createAd', '/main/:path*','/registration','/','/login'],
// };


import { NextResponse } from 'next/server';

export function middleware(request) {
  const authToken = request.cookies.get('auth')?.value;
  const isUser = !!authToken;

  // Define restricted routes for logged-in users
  const restrictedRoutes = ['/', '/registration', '/login'];

  const url = request.nextUrl.clone();
  
  // If the user is authenticated and trying to access restricted routes, redirect them
  if (isUser && restrictedRoutes.includes(url.pathname)) {
    const dashboardUrl = new URL('/main/dashboard', request.url); // or any other protected page
    return NextResponse.redirect(dashboardUrl);
  }

  // If the user is not authenticated and trying to access protected routes, redirect to login
  if (!isUser && !restrictedRoutes.includes(url.pathname)) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/createAd', '/main/:path*', '/registration', '/', '/login'],
};

import { NextResponse } from "next/server"

const publicRoutes = [
  { path: "/cadastro", redirectWhenAuth: true },
  { path: "/login", redirectWhenAuth: true },
  { path: "/", redirectWhenAuth: false }
]

export function middleware(request) {
  const path = request.nextUrl.pathname
  const publicRoute = publicRoutes.find(route => route.path === path)
  const isAuth = request.cookies.get("token")
  
  if (!isAuth && publicRoute) {
    return NextResponse.next()
  }
  
  if (!isAuth && !publicRoute) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    
    return NextResponse.redirect(url)
  }
  
  if (isAuth && !publicRoute) {
    return NextResponse.next()
  }
  
  if (isAuth && publicRoute && publicRoute.redirectWhenAuth) {
    const url = request.nextUrl.clone()
    url.pathname = "/dashboard"
    
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
}
import { NextResponse, NextRequest } from 'next/server'

export function middleware(req, ev) {
  var islogin = req.cookies.auth
  if (islogin && req.nextUrl.pathname != '/login') {
    return NextResponse.next()
  }else if(islogin && req.nextUrl.pathname == '/login'){
    return NextResponse.rewrite("/404")
  }else{
    return NextResponse.rewrite("/login")
  }
}

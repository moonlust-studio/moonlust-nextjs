import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { nextUrl, headers } = req;
  const { pathname } = nextUrl;

  // Bỏ qua: đã có locale hoặc là file tĩnh / API
  if (
    pathname.startsWith('/vi') ||
    pathname.startsWith('/en') ||
    pathname.startsWith('/ja') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Lấy locale từ trình duyệt
  const lang = headers.get('accept-language')?.split(',')[0] || '';
  let locale = 'vi';

  if (lang.startsWith('ja')) locale = 'ja';
  else if (lang.startsWith('en')) locale = 'en';

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

// NEXT
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next/types'

// SESSION
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'

declare module 'iron-session' {
  interface IronSessionData {
    token?: string
    userId?: string
  }
}

// console.log(process.env.COOKIE_SECRET)

const sessionOptions = {
  password: process.env.COOKIE_SECRET as string,
  cookieName: 'eden_art',
  ttl: 15 * 24 * 3600,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions)
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
>(
  handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  return withIronSessionSsr(handler, sessionOptions)
}

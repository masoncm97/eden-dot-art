import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useAuth } from 'src/hooks/useAuth'
import { ROUTES } from 'src/const/routes'

interface GuestProps {
  children: ReactNode
}

export const Guest: FC<GuestProps> = props => {
  const { children } = props
  const auth = useAuth()
  const router = useRouter()
  const [verified, setVerified] = useState(false)
  const demo = router.query.demo as string

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.isAuthenticated && demo !== 'true') {
      router.push(ROUTES.TEST.HOME)
    } else {
      setVerified(true)
    }
  }, [router, auth.isAuthenticated, demo])

  if (!verified) {
    return null
  }

  return <>{children}</>
}

Guest.propTypes = {
  children: PropTypes.node,
}

import React, { useState } from 'react'
import { useRouter } from 'next/router' // for getting query param ?error=CredentialsSignin

export default function HostTest({ host }) {
  const router = useRouter()
  const nextPath = router.query.next ? router.query.next : '/create?welcome'
  return (
    <div className='m-4'>
      The host is <b>{host}</b>. This was available from getInitialProps{' '}
      <code>`context.req.headers.host`</code>.
    </div>
  )
}

HostTest.getInitialProps = async (context) => {
  const { req, query, res, asPath, pathname } = context
  return { host: req.headers.host }
}

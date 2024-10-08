import React, { Suspense } from 'react'
import Loader from '../components/Loader'
import dynamic from 'next/dynamic'
const Components = dynamic(() => import("./component"))

const RegistrationLayout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Components>{children}</Components>
      </Suspense>
    </>
  )
}

export default RegistrationLayout
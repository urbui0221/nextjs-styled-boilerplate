import React from 'react'
import Head from 'next/head'

const Layout = ({children,page}) => {
    return (
        <>
            <Head>
            <title>Chime | {page}</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    )
}

export default Layout
  
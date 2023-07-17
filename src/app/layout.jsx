import React from 'react'
import Header from '@/component/Header'
import "./globals.css"
import Providers from './Providers'
import Tabs from '@/component/Tabs'

const Layout = ({children}) => {
  return (
    <html lang="en">
        <body>
          <Providers>
          <Header />
          <Tabs />
            { children }
          </Providers>
        </body>
    </html>
  )
}

export default Layout
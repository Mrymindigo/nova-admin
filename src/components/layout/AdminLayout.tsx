import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AdminLayout() {
  return (
    <>
    <main>
        <Sidebar />
        <section>
            <Header />
            <div>
                <Outlet />
            </div>
        </section>
    </main>
    </>
  )
}

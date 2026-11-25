import { Outlet } from 'react-router'
import Sidebar from './sidebar'
import Header from './Header'

import { Main } from './AdminLayoutStyle'

export default function AdminLayout() {
  return (
    <>
      <Main>
        <Sidebar />
        <section>
          <Header />
          <div>
            <Outlet />
          </div>
        </section>
      </Main>
    </>
  )
}

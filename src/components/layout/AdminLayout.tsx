import { Outlet } from 'react-router'
import Sidebar from './sidebar'
import Header from './header'

import { Main , Section } from './AdminLayoutStyle'

export default function AdminLayout() {
  return (
    <>
      <Main>
        <Sidebar />
        <Section>
          <Header />
          <div>
            <Outlet />
          </div>
        </Section>
      </Main>
    </>
  )
}

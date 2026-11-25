import { Outlet } from 'react-router'
import Sidebar from './sidebar'
import Header from './header'

import { Main , PageBody, Section } from './AdminLayoutStyle'

export default function AdminLayout() {
  return (
    <>
      <Main>
        <Sidebar />
        <Section>
          <Header />
          <PageBody>
            <Outlet />
          </PageBody>
        </Section>
      </Main>
    </>
  )
}

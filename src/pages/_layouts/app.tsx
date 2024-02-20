import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="">
      <h1>Cabeçalho AppLayout</h1>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

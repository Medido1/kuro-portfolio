import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <main className="p-4 mt-6">
      <Outlet />
    </main>
  )
}

export default Main;
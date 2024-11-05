import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <main className="p-4 mt-2">
      <Outlet />
    </main>
  )
}

export default Main;
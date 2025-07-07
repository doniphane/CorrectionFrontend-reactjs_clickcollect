import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <NavBar /> */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App

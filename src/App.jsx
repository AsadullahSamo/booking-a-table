import Signup from './components/Signup'
import Login from './components/Login';
function App() {

  const user = JSON.parse(localStorage.getItem('user'));

  return (

    <>
      <main className='h-[100vh] w-[100%]'>
        {user ? <Login /> : <Signup />}
      </main>
    </>

  )
}

export default App

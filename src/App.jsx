
import Left from './components/Left'
import Right from './components/Right'
function App() {

  return (
    <div className='flex text-gray-200'>
      <div className='lg:w-64 md:w-52 flex-shrink-0 hidden lg:flex '><Left/></div>
      <div className='flex-grow'><Right/></div>
    </div>
  )
}

export default App

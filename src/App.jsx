
import Left from './components/Left'
import Right from './components/Right'
function App() {

  return (
    <div className=' h-full max-w-full min-w-[300px] mx-auto'>
    <div className="relative h-full min-w-full bg-slate-950 mx-auto">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-5%] sm:h-[500px] h-[400px] w-[300px] sm:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className='flex overflow-hidden max-w-full min-w-full mx-auto'>
        <div className='lg:w-64 md:w-52 flex-shrink-0 hidden lg:flex 2xl:w-[20%] '><Left/></div>
        <div className='lg:flex-grow w-full'><Right/></div>
      </div>
      
    </div>
    </div>
   
  )
}

export default App

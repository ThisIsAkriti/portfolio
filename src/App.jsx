
import Left from './components/Left'
import Right from './components/Right'
function App() {

  return (
    
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className='flex '>
        <div className='lg:w-64 md:w-52 flex-shrink-0 hidden lg:flex '><Left/></div>
        <div className='flex-grow'><Right/></div>
      </div>
      
    </div>
   
  )
}

export default App
/*
<div className='lg:w-64 md:w-52 flex-shrink-0 hidden lg:flex '><Left/></div>
<div className='flex-grow'><Right/></div>*/
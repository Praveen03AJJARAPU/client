import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Refer from './components/Refer'
import Faq from './components/Faq'

function App() {
  

  return (
    <div className='font-inter flex flex-col gap-16'>
      <Nav />
      <Hero />
      <Refer />
      <Faq />
    </div>
  )
}

export default App

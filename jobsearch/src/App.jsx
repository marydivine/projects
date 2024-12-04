import React from 'react'
import Navbar from './Components/Navbar/Nav'
import Search from './Components/Searchdiv/Search'
import Jobs from './Components/Jobdiv/Jobs'
import Value from './Components/Valuediv/Value'
import Footer from './Components/Footerdiv/Footer'

const App = () => {
  return (
    <div>
          <Navbar/>
          <Search/>
          <Jobs/>
          <Value/>
          <Footer/>
    </div>
  )
}

export default App
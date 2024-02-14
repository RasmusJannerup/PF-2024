
function App() {

  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-full flex'>
        <div className='w-1/2 h-full bg-first'>
          <img src="./test3.webp" className="h-full object-cover" alt="" />
        </div>
        <nav className='w-1/2 bg-red-300 h-full '>
          <ul className='h-full flex items-start flex-col text-9xl'>
            <div className="flex items-center overflow-hidden w-screen hover:-translate-x-[50%] transition-all duration-300 bg-second h-1/3">
              <li className="w-[50%] inline-flex justify-center">ABOUT ME</li>
              <div className="w-[50%] inline-flex justify-center items-center text-4xl">
                <p>
                  Hi! My Name is Rasmus
                </p>

              </div>
            </div>
            <div className="flex items-center overflow-hidden w-screen hover:-translate-x-[50%] transition-all duration-300 bg-third h-1/3">
              <li className="w-[50%] inline-flex justify-center">SKILLS</li>
              <div className="w-[50%] inline-flex justify-center items-center text-2xl">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>TS</li>
                  <li>REACT</li>
                  <li>NODE</li>
                  <li>EXPRESS</li>
                  <li>MONGO</li>
                  <li>POSTGRESQL</li>
                  <li>GRAPHQL</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center overflow-hidden w-screen hover:-translate-x-[50%] transition-all duration-300 bg-fourth h-1/3">
              <li className="w-[50%] inline-flex justify-center">CONTACT</li>
            </div>
          </ul>
        </nav>
      </div>


    </div>
  )
}

export default App

import { FacebookOutlined } from '@mui/icons-material';
import Spline from '@splinetool/react-spline';
function App() {

  const screenheight = window.innerHeight;
  const itemHeight = screenheight / 3;

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <div className='w-full h-full flex flex-col'>
        <div onMouseDown={
          (e) => {
            e.preventDefault();
          }
        }>
          <Spline
            scene="https://prod.spline.design/Qi4eAj2zAy7vw4pU/scene.splinecode"
            className='w-full bg-fifth absolute inset-0 overflow-hidden'
            onDrag={(e) => { }}
          />
        </div>
        <div style={
          {
            height: `${itemHeight}px`
          }
        } className="flex group items-center top-0 right-0 w-screen text-[240px] overflow-hidden hover:-translate-x-[0%] translate-x-[50%] text-white hover:text-black transition-all duration-300 bg-first bg-opacity-0 hover:bg-opacity-100 h-full">
          <li className="w-[50%] inline-flex justify-center font-bebas">ABOUT ME</li>
          <li className="w-[50%] inline-flex justify-center font-bebas absolute -left-3 group-hover:opacity-100 opacity-0 transition-all duration-300 text-second">ABOUT ME</li>
          <div className="w-[50%] inline-flex justify-center items-center text-4xl">
            <img src="./profile.jpg" alt="" className="rounded-full object-cover size-40" />
          </div>
        </div>
        <div style={{ height: `${itemHeight}px` }} className="group right-0 text-[240px] flex items-center overflow-hidden h-full  w-screen hover:translate-x-[0%] -translate-x-[50%]  transition-all duration-300 bg-second bg-opacity-0 hover:bg-opacity-100  text-white hover:text-black">
          <div className="w-[50%] inline-flex justify-center items-center text-2xl">
            <ul>
              <li>
                {/* TEXT */}
              </li>
            </ul>
          </div>
          <li className="w-[50%] inline-flex justify-center font-bebas">SKILLS</li>
          <li className="w-[50%] inline-flex justify-center font-bebas absolute -right-3  group-hover:opacity-100 opacity-0 transition-all duration-300 text-third">SKILLS</li>

        </div>
        <div style={
          {
            height: `${itemHeight}px`
          }
        } className="w-screen group text-[240px] flex items-center overflow-hidden hover:-translate-x-[0%] translate-x-[50%] transition-all duration-300 bg-third bg-opacity-0 hover:bg-opacity-100 h-full text-white hover:text-black">
          <li className="w-[50%] inline-flex justify-center font-bebas">Contact</li>
          <li className="w-[50%] inline-flex justify-center font-bebas absolute -left-3 bg-transparent group-hover:opacity-100 opacity-0 transition-all duration-300 text-white ">Contact</li>
          <div className='w-[50%] flex items-center justify-evenly'>
            <FacebookOutlined className='w-20 h-20' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

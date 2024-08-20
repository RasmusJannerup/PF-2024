import { FacebookOutlined } from '@mui/icons-material';
import Spline from '@splinetool/react-spline';
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
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
          <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
              position: 'absolute',
              top: 0,
            }}
          >
            <ShaderGradient
              control='query'
              urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%23F4F4F4&color2=%236DECB9&color3=%2311999E&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.1&uDensity=0.8&uFrequency=5.5&uSpeed=0.2&uStrength=0.3&uTime=0&wireframe=false'
            />
          </ShaderGradientCanvas>

        </div>
        <div style={
          {
            height: `${itemHeight}px`
          }
        } className="flex group items-center top-0 right-0 sm:w-screen w-[200%] translate-x-[0%] text-[100px] hover:-translate-x-[50%] sm:text-[240px] overflow-hidden sm:hover:-translate-x-[0%] sm:translate-x-[50%] text-white hover:text-black transition-all duration-300 bg-first bg-opacity-0 hover:bg-opacity-100 h-full">
          <li className="w-[50%] inline-flex justify-center font-bebas">ABOUT ME</li>
          <li className="w-[50%] inline-flex justify-center font-bebas absolute -left-3 group-hover:opacity-100 opacity-0 transition-all duration-300 text-second ">ABOUT ME</li>
          <div className="w-[50%] inline-flex justify-center items-center text-4xl">
            <img src="./profile.jpg" alt="" className="rounded-full object-cover size-40" />
            <div className='flex flex-col justify-start items-center'>
              <p className='text-2xl'>
                I'm a web developer
              </p>

            </div>
          </div>
        </div>
        <div style={{ height: `${itemHeight}px` }} className="group right-0 text-[100px] sm:text-[240px] flex items-center overflow-hidden h-full w-[200%] hover:translate-x-[0%] -translate-x-[50%] sm:w-screen sm:hover:translate-x-[0%] sm:-translate-x-[50%]  transition-all duration-300 bg-second  bg-opacity-0 hover:bg-opacity-100  text-white hover:text-black">
          <div className="w-[50%] inline-flex justify-center items-center text-2xl">
            <ul>
              <li>
                paoiskdpoak
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
        } className="w-[200%] translate-x-[0%]  hover:-translate-x-[50%] sm:w-screen group sm:text-[240px] text-[100px] flex items-center overflow-hidden sm:hover:-translate-x-[0%] sm:translate-x-[50%] transition-all duration-300 bg-third bg-opacity-0 hover:bg-opacity-100 h-full text-white hover:text-black">
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

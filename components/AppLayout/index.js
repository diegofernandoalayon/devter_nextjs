import {colors} from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'
const backgroundColor = addOpacityToColor(colors.primary,0.2)
export default function AppLayout({children})  {

  return (
    <>
      <main>
        {children}
      </main>
      <style jsx global >{`
        html,
        body {
          background-image: radial-gradient( ${backgroundColor} 1px, transparent 1px), radial-gradient(${colors.primary} 1px, transparent 1px) ;
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
        }
        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </>
  )
}
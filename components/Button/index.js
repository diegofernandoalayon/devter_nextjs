import { colors } from '../../styles/theme'

export default function Button ({ children, disabled, onClick }) {
  return (
   <>
      <button disabled={disabled} onClick={onClick}>{children}</button>
      <style jsx>{`
          button{
            display:flex;
            aling-items: center;
            background: ${colors.black};
            border: 0;
            color: ${colors.white};
            border-radius: 9999px;
            font-weight: 800;
            padding: 10px 24px;
            curson: pointer;
            transition: opacity: .3s ease;
            user-select: none;
          }
          button[disabled]{
            pointer-events: none;
            opacity: 0.2;
          }
          button > :global(svg){
            margin-right: 8px;
          }
          button:hover{
            opacity: .8;
          }
        `}</style>
   </>
  )
}

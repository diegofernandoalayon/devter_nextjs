import { colors } from "../../styles/theme";

export default function Button({children, onClick}){

  return(
   <>
      <button onClick={onClick}>{children}</button>   
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
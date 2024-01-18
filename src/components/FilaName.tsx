import { FaRegCheckCircle , FaRegArrowAltCircleDown} from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
import { FiLayers } from 'react-icons/fi';
import {tv} from 'tailwind-variants'


interface fileNameProps{
    fileName:string,
    status: 'fineshed' | 'Wrong' | "In progress",
}
const div = tv({
    variants: {
      color: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-purple-500 text-white'
      },
    },
  
});

export function FileName({fileName , status}:fileNameProps){
  

  const stylesDiv = `bg-[#343A40] w-[403px] h-[43px] rounded flex flex-row items-center justify-between px-5 border border-solid border-[#828282] hover:border-violet transition`
  const stylesText =`font-bold text-[#000] truncate w-[250px]`

    return(
        
    <div className={stylesDiv}>
        <div className='flex flex-row items-center gap-2'>
           
           {
            status == "Wrong" ? <TiDeleteOutline color='#EB5757' size={20}/>
            : status == "fineshed"? <FaRegCheckCircle color='#27AE60' /> : <GiSandsOfTime  color='#F2C94C'/>
          }
           <p className={stylesText}>
             {fileName}
           </p>
        </div>

        <div className='flex items-center gap-2'>
            {
              status == 'fineshed' ?   <FaRegArrowAltCircleDown  size={20} color='#27AE60' className='cursor-pointer' />: ""
            }
           <MdOutlineDeleteOutline size={20} color='#EB5757' className='cursor-pointer'/>
        </div>
     </div>  
    )
}
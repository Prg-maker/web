import Image from 'next/image'
import { useState } from 'react';
import { FaFileArrowUp } from "react-icons/fa6";
import { FaRegCheckCircle , FaRegArrowAltCircleDown} from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
import { FiLayers } from 'react-icons/fi';
import { FileName } from '@/components/FilaName';


export default function Home() {
  const [fileName, setFileName] = useState("")

  if (typeof document !== 'undefined') {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    
    fileInput.addEventListener('change', (event) => {
      const input = event.target as HTMLInputElement;

      if (input.files) {
          // A propriedade files contém a lista de arquivos selecionados
        console.log(input.files)
        const files = input.files;
        setFileName(files[0].name)
      }
    });
    
 }

 function Dowloa(){
  console.log("aaqui")
}

  
 
  return (
    <div className='bg-background h-screen flex flex-col justify-center items-center '>
        <main className='w-[500px] h-[600px] bg-text rounded-md py-14 flex flex-col  items-center gap-10'>

          <section>
            <form className=''>
              <div className='flex items-center justify-center '>

                <label id="labelfile" htmlFor="file" className='w-[350px] h-[50px]  justify-between bg-gray-400 cursor-pointer flex flex-row items-center px-10 rounded-md border border-solid border-[#828282] hover:border-violet transition' >
                  <p className='text-[#828282] truncate mr-2' >

                    {
                      fileName ? fileName : "Choose file"
                    }

                  </p>
                  <FaFileArrowUp color='#828282' />
                  <input   type="file" id='file' name="file" className='hidden' accept='.zip,.rar,.7zip,.tar.xz,.tar'/>
                </label>

              </div>
            </form>
          </section>

          <section className='bg-[#333333] w-[430px] h-[450px] rounded flex flex-col items-center py-4 gap-5 overflow-y-auto '>
           

            <FileName fileName={fileName} status='fineshed' />
            <FileName fileName={fileName} status='fineshed' />
            <FileName fileName={fileName} status='fineshed' />
           
        
  
          </section>

        </main>

        <footer className=' relative top-11' >

        <p className='text-[#BDBDBD] '>Desenvolvido pelo o Daniel ♥️ 🚀.</p>

        </footer>
    </div>
  )
}

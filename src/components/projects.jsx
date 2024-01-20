import Tecnology from "./tecnology"

export default function Projects ({id, titulo, descripcion, tecnologias, imagen, }) {


    return (
        <div className="my-4 text2 md:flex  md:justify-between">
            <div className="w-3/12 my-4">                          
                <img src={imagen} alt="" className="rounded-sm border-2 overflow-hidden border-gray-500 "/>            
            </div>
            <div className="w-8/12">
                <div>{titulo}</div>    
                <div>{descripcion}</div>
                <ul className="flex">
                {
                    tecnologias.map((obj, index)=>(
                        <li className="mr-1" key={index}>
                            <Tecnology
                                tecnologia={obj}
                            />
                        </li>
                    ))
                }
                </ul>
            </div>
            
            
            
            
                              
        </div> 
            
    
    )
}
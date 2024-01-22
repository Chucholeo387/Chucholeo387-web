import IntervaloExp from "./intervaloExp"
import Tecnology from "./tecnology"


export default function Experiencia ({ ini, end, puesto, empresa,tecnologias, link}) {
    

    return (
        <div>
            <a href={link} target="_blank">
            <div className="my-5 text2 lg: md:p-5  md:flex duration-300 md:hover:bg-slate-500/10 rounded-md">
                <div className="sm:w-3/12 md:w-4/12 lg:w-4/12">
                    <IntervaloExp
                        ini={ini}
                        end={end}
                        
                    />
                </div>
                <div className="sm:w-7/12 lg:w-8/12">
                    <div >
                        {puesto}
                    </div>
                    <div >
                        {empresa}
                    </div>
                    <ul className="flex flex-wrap">
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
            </a>   
        </div>
                                           
    )
}
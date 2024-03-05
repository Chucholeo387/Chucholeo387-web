import Experiencia from "@/components/experiencia"
import Projects from "@/components/projects"
import  Nav from "@/components/nav"
import TimeExp from "@/components/timeExpirience"




export default function Home() {

  const experiencias = [
    {
        id:'1',
        ini: 'Feb 2023',
        end: 'PRESENT',
        puesto:'Fullstack web developer' ,
        empresa:'SmartReport' ,
        link: "https://www.smartreport.cl/",
        tecnologias:['Vue', 'Quasar', 'Graphql', 'PostgresSQL'] ,
    },
    {   
        id:'2',
        ini: 'Dec 2022',
        end: 'PRESENT',
        puesto:'Fullstack web developer' ,
        empresa:'Frelancer' ,
        link: "https://chucholeo387.vercel.app/",
        tecnologias:['Vue', 'React', 'Quasar', 'Next', 'Graphql','PostgresSQL'],
    },
  ] 

  const projects = [
    {
      id:"1",
      titulo: 'CashFlow',
      descripcion: 'This application allows you to write down your monthly expenses',
      tecnologias: ['Vue'],
      imagen: '/cashflow-chucholeo387.png',
      link: "https://chucholeo387-cashflow.netlify.app/"   
    },
    {
      id:"2",  
      titulo: 'Personal Web',
      descripcion:'Personal space for the people to know my work',
      tecnologias: ['React', 'Next'],
      imagen: '/web-chucholeo387.png',
      link: "https://github.com/Chucholeo387/Chucholeo387-web"     
    },
    {
      id:"3",  
      titulo: 'Chucholeo Projects',
      descripcion:'Most relevant projects as web developer and  few colobarations with partners',
      tecnologias: ['React', 'Next'],
      imagen: '/chucholeoproject.png',
      link: "https://chucholeo387projects.vercel.app/en"     
    }
] 





  return (

    <main className="px-6 py-12 lg:px-32 lg:flex">
      <div className="flex justify-center sm:justify-start h-screen  lg:w-6/12 ">
        <div className="flex flex-col lg:flex lg:flex-col justify-around lg:h-5/6 lg:fixed">
        
          <header>
            <h1 className="font-bold text-4xl sm:text-5xl name">Jesus L Lugo R</h1>
            <h2 className="font-bold text-lg sm:text-xl mt-3 carrera"> Fullstack Web Developer</h2>
            <h2 className="text2 text-xl mt-3"> Lets build a digital presence </h2>
          </header>

          <Nav/>
  
          
          
          <ul className="flex mt-8">
            <li className="mr-4">
              <a href="https://www.instagram.com/chucholeo387/?hl=es-la" target="_blanck">
                <img className="w-8 h-8" src="/instagram_chucholeo387.svg"/>
              </a> 
            </li>
            <li className="mx-4">
              <a href="https://github.com/Chucholeo387" target="_blanck">
                <img className="w-8 h-8" src="/github_logo_chucholeo387.svg"/>
              </a> 
            </li>
            <li className="mx-4">
              <a href="https://www.linkedin.com/in/jesus-leonardo-lugo-rodriguez/" target="_blanck">
                <img className="w-8 h-8" src="/linkedin_jesus_leonardo_lugo_rodriguez.svg"/>
              </a> 
            </li>
          </ul>
        </div>
      </div>
      
      <div className="lg:w-6/12">
        <div className="lg:my-20" id="about">
          <h3  className=" font-bold text-yellow-400">ABOUT</h3>
          <div className="my-4 text2 ">
            <p className="py-3">I am a bioanalyst who decided to venture into the world of technology to create digital applications that would allow me to be the bridge between two worlds. Since then, <TimeExp fechaIni="2022/11/01"/> have passed, and every day I feel like the Golden Gate.</p>
            <p className="py-3">I rely on technologies such as Vue, React, Quasar, Next, and GraphQL to achieve my goals and enhance the user experience. This has allowed me to focus on frontend development.</p>
            <p className="py-3">When I am not a web developer or bioanalyst, I enjoy going out to eat, spending time with my wife, playing video games, and watching movies.</p>
          </div> 
        </div>
        <div className="lg:pt-20 lg:my-20"  id="experience">
          <h3 className="font-bold  text-yellow-400" >EXPERIENCIA</h3>
          {
            experiencias.map((obj)=>(
          
              <Experiencia
                key={obj.id}
                ini={obj.ini}
                end={obj.end}
                puesto={obj.puesto}
                empresa={obj.empresa}
                tecnologias={obj.tecnologias}
                link={obj.link}
              />
        
            ))
          }
          
        </div>
        <div className="lg:pt-20 mt-20" id="projects">
          <h3 className="font-bold text-yellow-400" >PROJECTS</h3>
          {
            projects.map((obj)=>(
              <Projects
                key={obj.id}
                titulo= {obj.titulo}
                descripcion= {obj.descripcion}
                tecnologias= {obj.tecnologias}
                imagen= {obj.imagen}
                link={obj.link}
              />
            ))
          }
        </div>
        {/* <div>
          <h3 className="lg:mt-20 font-bold">CONTACT</h3>
          <ul>
            <li>
              <a href="" target="_blanck">
                <img className="w-8 h-8" src="/place-chucholeo387.svg"/>
              </a> 
            </li>
            <li className="text2">
                lugojesus387@gmail.com
            </li>        
          </ul>
        </div>  */}
        
        
      </div>
    </main>
  )
}

import Link from 'next/link'
import estilo from '../styles/Home.module.css'
import {FaWhatsappSquare,FaGithubSquare, FaLinkedin,} from "react-icons/fa"
export default function Contato(){
    
    return (
        <div className={estilo.container}>
          <header className={estilo.header}>
            <div className={estilo.logo}>
              <h1>Logo</h1>
            </div>
            <div className={estilo.nav}>
              <Link href='/'>
                <button>Home</button>
              </Link>
              <Link href='/contato'>
                <button>Contato</button>
              </Link>
            </div>
          </header>
    <section className={estilo.section}>
        <h1>Contato</h1>
        <div>
        <FaWhatsappSquare size={30} color="#5edc1f"/>
        <FaGithubSquare size={30} color="#26262a"   />
        <FaLinkedin size={30} color="#0f66be" />
        <span className={estilo.instagram}>
       
      
        </span>
        </div>
    </section>
         
        </div>
      )
    }
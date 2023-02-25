import Link from 'next/link'
import estilo from '../styles/Home.module.css'
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin, } from "react-icons/fa"
export default function Contato() {

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


        <div className={estilo.social}>
          <Link href='https://wa.me/5544999148427' target="_blank" ><FaWhatsappSquare size={30} color="#5edc1f" /></Link>
          <Link href='https://github.com/M-inacio' target="_blank" ><FaGithubSquare size={30} color="#26262a" /></Link>
          <Link href='https://www.linkedin.com/in/marcos-inacio-3a97a0130/' target="_blank" ><FaLinkedin size={30} color="#0f66be" /></Link>

        </div>
      </section>

    </div>
  )
}
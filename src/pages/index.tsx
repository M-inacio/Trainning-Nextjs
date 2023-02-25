import Link from 'next/link'
import { useState } from 'react'
import estilo from '../styles/Home.module.css'

type Address = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}

export default function Home() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<Address>({} as Address)

  function handleSave() {
    console.log({ name, age })
  }

  function handleGetAddress() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((data) => data.json())
      .then((json) => setAddress(json))
  }

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
        <h2>Formulário</h2>
        <div className={estilo.form}>
          <div className={estilo.fields}>
            <label htmlFor='name'>Nome</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className={estilo.fields}>
            <label htmlFor='age'>Idade</label>
            <input
              type='text'
              id='age'
              value={age}
              onChange={(e) => setAge(e.currentTarget.value)}
            />
          </div>
          <button onClick={handleSave}>Gravar</button>
        </div>
      </section>
      <section className={estilo.section}>
        <h2>Consulta CEP</h2>
        <div className={estilo.form}>
          <div className={estilo.fields}>
            <label htmlFor='cep'>CEP</label>
            <input
              type='text'
              id='cep'
              value={cep}
              onChange={(e) => setCep(e.currentTarget.value)}
            />
          </div>
          <button onClick={handleGetAddress}>Buscar</button>
          <div className={estilo.fields}>
            <input
              type='text'
              placeholder='Rua'
              value={address.logradouro}
              readOnly
            />
          </div>
          <div className={estilo.fields}>
            <input
              type='text'
              placeholder='Bairro'
              value={address.bairro}
              readOnly
            />
          </div>
          <div className={estilo.fields}>
            <input
              type='text'
              placeholder='Cidade'
              value={address.localidade}
              readOnly
            />
          </div>
          <div className={estilo.fields}>
            <input
              type='text'
              placeholder='Estado'
              value={address.uf}
              readOnly
            />
          </div>
        </div>
      </section>
    </div>
  )
}

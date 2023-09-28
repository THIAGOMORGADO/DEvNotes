import Header from "../../components/Header"
import Input from "../../components/Input"
import Button from "../../components/Button"

import "./singupModules.css"

export default function SignUp() {
  return (
    <>
      <Header />
      <section className="section-container">
        <div className="section-content">
          <h2>Cadastra novo super User...</h2>
          <hr className="divider" />
          <div className="form">
            <p>Nome:</p>
            <Input placeholder="Digite seu nome..." />
            <p>E-mail:</p>
            <Input placeholder="Digite seu email..." />
            <p>Senha:</p>
            <Input placeholder="Digite seu senha..." />
            <Button title="cadastra-se" />
          </div>
        </div>
      </section>
    </>
  )
}

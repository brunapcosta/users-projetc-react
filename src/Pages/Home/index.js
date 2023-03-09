/* REACT HOOKS => FERRAMENTAS AUXILIARES.
→ useState (um estado do react):
    const [name, setName] = useState();
    const [age, setAge] = useState();
→ useRef(mapeia itens no HTML, conseguindo assim pegar informações dele)
→ useEffect(efeito colateral):
A aplicação inicia(a página carregou, useEffect é chamado). Quando um estado que está no array dependencia useEffect é alterado.

USO DO LINK, EXEMPLO:
index:
<button to"link"></button>
styles.js:
import { Link } from "react-router-dom";
export const Button = styled(Link)``

*/

import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios"
import People from "../../assets/people.png"
import Arrow from "../../assets/arrow.png"

import H1 from "../../Components/Title";
import ContainerItems from "../../Components/ContainerItems";
import Button from "../../Components/Button";


import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {

  // const users = [];
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]); //spread operator: "...")

    history.push("/usuarios");
  }

  //   function changeInputName(event){
  //       setName(event.target.value)
  //   }

  //   function changeInputAge(event){
  //     setAge(event.target.value)
  // }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        {/* <Input onChange={changeInputName} placeholder="Nome" /> */}
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        {/* <Input onChange={changeInputAge} placeholder="Idade" /> */}
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Seta" src={Arrow} />
        </Button>

      </ContainerItems>

    </Container>);
}

export default App;
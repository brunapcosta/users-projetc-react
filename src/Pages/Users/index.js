/* REACT HOOKS => FERRAMENTAS AUXILIARES.
→ useState (um estado do react)
→ useRef(mapeia itens no HTML, conseguindo assim pegar informações dele)
→ useEffect(efeito colateral):
A aplicação inicia(a página carregou, useEffect é chamado). Quando um estado que está no array dependencia useEffect é alterado.

*/

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Avatar from "../../assets/avatar.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";

import H1 from "../../Components/Title";
import ContainerItems from "../../Components/ContainerItems";
import Button from "../../Components/Button";

import {
  Container,
  Image,
  User
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/users");

      setUsers(newUser);
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage(){
    history.push("/")
  }

  //   function changeInputName(event){
  //       setName(event.target.value)
  //   }

  //   function changeInputAge(event){
  //     setAge(event.target.value)
  // }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="Seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItems>

    </Container>);
}

export default Users;
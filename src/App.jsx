
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './assets/components/FormUser'
import UserCard from './assets/components/UserCard'
import UseCrud from './hooks/UseCrud'


function App() {
  const [closeForm, setCloseForm] = useState(true)
  const [eliminar, setEliminar] = useState(true)





  const { users, getAllUsers, createNewUser, deleteUserById, updateUserById } = UseCrud()

  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])

  const nav = () => {
    setEliminar(true)
  }


  console.log(users)

  return (
    <div className="App">
      <div className={`delet   ${eliminar && `delete`}`}>
        <div className="caja">
          <button></button>
          <h2 className='h2'>Usuario Eliminado</h2>
          <p>El usuario  se ha eliminado Correctamente</p>
          <button onClick={nav} className="btn-nav">Enviar</button>
        </div>
      </div>
      <div className='container'>




        <h1 className='title'>Users</h1>

        <button className='open-fo' onClick={() => setCloseForm(false)}>+ Create New Users</button>


      </div>
      <div className={`form-container ${closeForm && 'close__form'}`}
      >

        <FormUser

          setCloseForm={setCloseForm}
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo} />
      </div>

      <div className='user-container'>
        {
          users?.map(user => (

            <UserCard
              setEliminar={setEliminar}
              setCloseForm={setCloseForm}
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }

      </div>
    </div >
  )
}

export default App

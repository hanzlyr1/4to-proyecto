import React from 'react'


const UserCard = ({ user, deleteUserById, setUpdateInfo, setCloseForm, setEliminar }) => {

    const handleEdit = () => {
        setUpdateInfo(user)
        setCloseForm(false)
    }
    const hande = () => {
        setCloseForm(true)
    }

    const deleteUser = () => {
        deleteUserById(user.id)
        setEliminar(false)
    }

    return (
        <article className='card'>

            <h3 className="card__title">{user.last_name} {user.first_name}</h3>
            <ul className='card__body'>
                <li className='card__item'>
                    <span className='card__span'>Email</span>
                    {user.email}
                </li>
                <li className='card__item'>
                    <span className='card__span'>Birthday</span>
                    <div className='gift-card'>

                        <i class="fa-solid fa-gift gift" ></i>{user.birthday}
                    </div>
                </li>
            </ul>
            <footer className='card__footer'>
                <button className='card__btn card__btn__trash' onClick={deleteUser}><i className="fa-regular fa-trash-can"></i></button>
                <button className="card__btn card__btn__edit" onClick={handleEdit}><i className="fa-regular fa-pen-to-square"></i></button>
            </footer>

        </article>
    )
}

export default UserCard
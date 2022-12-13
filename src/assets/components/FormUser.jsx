import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm }) => {
    useEffect(() => {
        reset(updateInfo)

    }, [updateInfo])


    const { register, reset, handleSubmit, } = useForm()



    const submit = data => {
        if (updateInfo) {
            //actualizar
            updateUserById(updateInfo.id, data)
            setUpdateInfo()


        } else {

            createNewUser(data)

        }
        setCloseForm(true)


        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""

        }
        )

    }


    return (
        <form className='form' onSubmit={handleSubmit(submit)}>

            <button onClick={() => setCloseForm(true)} className='form__x'>X</button>
            <h2 className="form__title">{updateInfo ? "Editar Usuario" : "Nuevo Usuario"}</h2>
            <div className='form__div'>
                <label className='form__label' htmlFor="email"><b>Email</b></label>
                <input placeholder='Ingresa Tu Correo' className='form__input' type="email" id='email' {...register("email")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="password">Password</label>
                <input placeholder='Ingresa tu Contraseña' className='form__input' type="password" id="password" {...register("password")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="first_name">First Name</label>
                <input placeholder='Ingresa tu Nombre' className='form__input' type="text" id="first_name" {...register("first_name")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="last_name">Last Name</label>
                <input placeholder='Ingresa tu Apellido' className='form__input' type="text" id="last_name" {...register("last_name")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="birthday">Birthday</label>
                <input className='form__input' type="date" id="birthday" {...register("birthday")} />
            </div>

            <button className='form__btn'>Submit</button>

        </form>
    )
}

export default FormUser
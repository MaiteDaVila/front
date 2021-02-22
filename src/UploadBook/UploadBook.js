import './UploadBook.css';
import { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import {  useSelector } from 'react-redux';
import { registerApi } from '../Api/api';

function UploadBook() {
    const [name, setName] = useState('')
    const [surnames, setSurnames] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [locationBook, setLocationBook] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('waiting')
    const [data, setData] = useState('')

    let location = useLocation()

    const login = useSelector(s => s.login)
    // const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const dato = await registerApi(name, surnames, address, locationBook, phone, email, password)
            console.log(dato)
            setStatus('success')
            setData(dato)

        } catch (e) {
            setStatus('error')
        }
    }

    if (login) return <Redirect to={location.state.prevPath} />

    return (
        <div  className="register-wrapper">
        <div className="register-form">
            <h2>Formulario de registro</h2>
            {(status === 'waiting' || status === 'error') && (<form className="page register" onSubmit={handleSubmit}>
                <div className="register-form-element">
                    <label className="register-label">ISBN:</label>
                    <input className="register-input"  value={name} onChange={e => setName(e.target.value)} required autofocus />
                </div>
                <div className="register-form-element">
                    <label className="register-label">Título:</label>
                    <input className="register-input" p value={surnames} onChange={e => setSurnames(e.target.value)} required />
                </div>
                <div className="register-form-element">
                    <label className="register-label">Editorial:</label>
                    <input className="register-input" value={address} onChange={e => setAddress(e.target.value)} required />
                </div>
                <div className="register-form-element">
                    <label className="register-label">Año:</label>
                    <input className="register-input" value={locationBook} onChange={e => setLocationBook(e.target.value)} required />
                </div>
              
                <div className="register-form-element">
                    <label className="register-label" >Subir fotografía:</label>
                    <input className="register-input" />
                </div>
                <button className="registrarse">Subir Libro</button>
            </form>)}
            {status === 'error' &&
                <div>Los campos introducidos no son correctos, vuelve a intentarlo por favor</div>

            }
            {status === 'success' &&
                <div>
                    {data}
                    <button>Aceptar</button>
                </div>

            }
        </div>
        </div>
    );
}

export default UploadBook;
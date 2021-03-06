import { useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import './Panel.css'

function Panel() {
    const login = useSelector(s => s.login)
    const route = useSelector(s => s.route)
    console.log(route)
    console.log(login)

    if (!login) {
        return <Redirect to="/" />
    }

    const options = [
        {
            "title": "Datos Personales",
            "route": "/user/mypanel/profile/:id"
        },
        {
            "title": "Transacciones",
            "route": "/user/mypanel/transactions/list"
        },
        {
            "title": "Mis libros ",
            "route": "/user/books"
        },
        {
            "title": "Subir libro",
            "route": "/upload"
        },
        {
            "title": "Valoraciones",
            "route": "/user/transactions/reviews"
        },
        {
            "title": "Peticiones",
            "route": "user/requests"
        },
        {
            "title": "Mis mensajes",
            "route": "/user/mypanel/messages-chats/chatlist"
        },
        {
            "title": "Cambiar contraseña",
            "route": "/user/mypanel/password/update"
        }
    ]

    return (
        <div className="panelinterno">
        <div className="panel" >
            <h2>MI CUENTA</h2>
            <ul className="panel-menu-left">
            {options.map((option, i) =>
                <Link key={i} to={option.route} className="user option" >
                    <li>{option.title.toUpperCase()}</li>
                </Link>
                
            )}
            </ul>
        </div>
        </div>
    )
}

export default Panel;
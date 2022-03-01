import React from "react"

// Interface para tipar o user
interface IUser {
    nome: string
    email: string
}

// Interface para tipar a React.FC (componente funcional). Isso foi feito para o elemento
// continuar tendo acesso à propriedade children, pois se o parâmetro do componente User
// fosse tipado como IUser diretamente não teria acesso a propriedade children já que ela não
// tá na interface IUser. Outra forma que ACHO que daria para resolver isso seria colocar
// a propriedade children?: opicional no IUser
interface Props {
    user: IUser
}

// React.FC é do próprio React
const User: React.FC<Props> = ({user}) => {
    return (
        <div>
            <strong>Nome: </strong> {user.nome} <br />
            <strong>Email: </strong> {user.email} <br />
        </div>
    )
}

export default User

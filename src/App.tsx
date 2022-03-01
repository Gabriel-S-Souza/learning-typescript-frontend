import React, { useEffect, useState } from 'react'
import User from './components/User'
import api from './services/api'

// Criar uma interface para incluir os tipos contidos na response.data
interface IUser {
	nome: string;
	email: string;
}

function App() {
	const [users, setUsers] = useState<IUser[]>([])

	// Usando a api dentro de um useEffect para 
	// carregar alguns dados assim dque o componente é montado em tela
	useEffect(() => {
		api.get<IUser[]>('/users').then(response => {
			setUsers(response.data)
		})
}, [])

	return (
		<div className="App">
			{ users.map(user => <User key={user.email} user={user} /> ) }
		</div>
	);
}

export default App;

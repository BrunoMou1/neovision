import { FormEvent, useState } from 'react'
import { api } from '../../service/api'
import styles from './index.module.scss'


export function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if (!name && !email) {
            return
        }

        var body = { "name": name, "email": email }
        var headers = {
            "Authorization": 'brunopmoura1@gmail.com'
        }


        api.post("/register", body, {headers})
            .then(() => alert('Cadastro realizado com sucesso'))
            .catch((error: any) => {
                console.log('error', error)
                alert('Erro ao realizar cadastro. Verifique se todos os campos estão preenchidos corretamente')
            });

        setName('')
        setEmail('')
    }

    return (
        <div className={styles.container}>
            <h1>Quer conhecer mais sobre o Neovision?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Nome'
                    required
                />
                <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='E-mail'
                    required
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
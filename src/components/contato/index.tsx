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

        var myHeaders = new Headers();
        myHeaders.append("Authorization", email);
        var raw = JSON.stringify({ "name": name, "email": email });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };
        
        api.post("/register", requestOptions)
            .then((response: any) => response.data())
            .catch((error: any) => console.log('error', error));

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
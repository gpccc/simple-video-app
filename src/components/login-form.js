import React, { useState } from "react"
import * as styles from "./login.module.css"
import axios from "axios"

const LoginForm = ({ storeToken }) => {
    const [name, setName] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        const result = await axios({
            method: "POST",
            url: "https://tan-cat-7689.twil.io/create-token",
            data: {
                identity: name,
            },
        })
        console.log(result);
        const jwt = result.data;
        storeToken(jwt);
    }

    return (
        <section className={styles.contact}>
            <h3>Login</h3>
            <div className={styles.center}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        Display Name: <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            className={styles.formControl}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit" className={styles.submit}>Join Video Chat</button>
                </form>
            </div>
        </section>
    )
}

export default LoginForm
import React, { useState } from "react"
import * as styles from "./login.module.css"

const LoginForm = () => {
    const [name, setName] = useState("")

    return (
        <section className={styles.contact}>
            <h3>Login</h3>
            <div className={styles.center}>
                <form>
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
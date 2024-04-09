import styles from './forms.module.css'

function Forms(){
    return(
        <div className={styles.local}>
        <input className={styles.componente} type="text" placeholder="Nome" required=""></input>
        <input className={styles.componente} type="email" placeholder="Email" required=""></input>
        <textarea className={styles.componente} placeholder="Mensagem" required=""></textarea>
        <button className={styles.botao} type="submit">Enviar</button>
        </div>
    )
}
export default Forms;
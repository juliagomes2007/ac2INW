import styles from './Cards.module.css'

function Cards(){
    return(
        <div className={styles.local}>
        <div className={styles.card}>
            <h3 >Julia Leal</h3>
            <p>Sabe codar em Java e a melhor aluna de Backend</p>
        </div>

        <div className={styles.card}>
            <h3>Eduardo Viudes</h3>
            <p>Faz de tudo um pouco, mas esta fazendo cursos da alura para melhorar</p>
        </div>

        <div className={styles.card}>
            <h3>Pedro Araújo</h3>
            <p>Criador do Bobert, um futuro profissional da area de mecatronica</p>
        </div>
        </div>
    )
}

export default Cards;
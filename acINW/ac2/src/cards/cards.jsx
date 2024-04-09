import styles from './Cards.module.css'

function Cards(){
    return(
        <div className={styles.local}>
        <div className={styles.card}>
            <h3 >Julia Leal</h3>
            <p>Backend</p>
        </div>

        <div className={styles.card}>
            <h3>Eduardo Viudes</h3>
            <p>Frontend</p>
        </div>

        <div className={styles.card}>
            <h3>Pedro Araújo</h3>
            <p>Design</p>
        </div>
        </div>
    )
}

export default Cards;
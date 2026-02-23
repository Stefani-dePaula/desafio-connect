import ImgPerfil from '../../assets/perfil.jpg'
import styles from './Perfil.module.scss'


function Perfil() {
    return (
        <section className={styles.containerTelaPerfil}>
            <article>
                <img src={ImgPerfil} alt="Foto de perfil de Stefani de Paula" />
                <div className={styles.cardInfo}>
                    <h2>Stefani de Paula</h2>
                    <h3>Voluntária Ativa</h3>

                    <p className={styles.paragrafoSobreMim}>“Sou movida pelo desejo de fazer a diferença na comunidade, acreditando que pequenas ações têm o poder de transformar vidas e buscando constantemente novas formas de contribuir”.</p>

                    <address>
                        <p>Caçapava, SP</p>
                        <p>stefanidepauladasilva1@hotmail.com. </p>
                        <p>Membro desde Novembro de 2025</p>
                    </address>

                    <ul className={styles.listaInteresses}>
                        <li>Educação</li>
                        <li>Meio Ambiente</li>
                        <li>Assistência Social</li>
                        <li>Design</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Perfil
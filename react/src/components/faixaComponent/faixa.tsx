import styles from './faixa.module.scss'


interface FaixaDTO{
    nameFaixa :string,
    nameAlbum: string,
}
export function Faixa({nameFaixa, nameAlbum}:FaixaDTO) {
  return (
    <>


    <div className={styles.containerItem}>
        <div className={styles.miniBox}></div>
        <div>
            <strong> {nameFaixa} </strong>
            <span>{nameAlbum}</span>
        </div>
    </div>
    </>
  )
}


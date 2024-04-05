import styles from './album.module.scss'

interface AlbumDto{
    nome:string,
    path:string,
}
export  function Album({path, nome}:AlbumDto) {
  return (
    <div className={styles.container}>
        <span>
            <strong>{nome}</strong>
            <img src={`http://localhost:8000/storage/${path}`} alt="" />
        </span>
    </div>
  )
}

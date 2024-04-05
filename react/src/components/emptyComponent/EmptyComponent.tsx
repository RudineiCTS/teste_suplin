import styles from './empty.module.scss'
import {GoSearch} from 'react-icons/go'
export  function EmptyComponent() {
  return (
    <div className={styles.containerEmpty}>
        <strong> NADA POR AQUI!</strong>
        <GoSearch size={200} color={'#303030'}/>
        <p>pesquisa na tela do lado para aparecer seus resultados aqui</p>

    </div>
  )
}

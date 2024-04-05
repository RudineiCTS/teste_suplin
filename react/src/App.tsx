import './index.css';
import styles from './app.module.scss'
import { SearchComponent } from './components/search';
import { Faixa } from './components/faixaComponent/faixa';
import { EmptyComponent } from './components/emptyComponent/EmptyComponent';
import useAlbumFaixaContext from './hook/useAlbumFaixaContext';
import { useState } from 'react';
import { Album } from './components/albumComponent/album';

function App() {
const {albumArrays, faixaArrays} = useAlbumFaixaContext()
const [tipo, setTipo] = useState<'album'|'faixa'>('album');
console.log(albumArrays)
  const handleTipo = () => {
    setTipo(tipo === 'album'? 'faixa' : 'album');
  }
  return (
      <div className={styles.container}>
        <div >
            <SearchComponent setTipo={handleTipo} tipo={tipo}/>

            <div className={styles.containerAddItems}>
                <button>
                    Adicionar faixa
                </button>
                <button>
                    Adicionar album
                </button>
            </div>


        </div>

        <div className={styles.containerResult}>
        {
            tipo ==='album'? (albumArrays.length === 0 ?
                <EmptyComponent/> :
                albumArrays.map((album)=>{
                    return <Album key={album.id} nome={album.album_name} path={album.album_image} />
                })): (faixaArrays.length === 0 ?
                    <EmptyComponent/> :
                    faixaArrays.map(faixa => {
                        return <Faixa key={faixa.id} nameAlbum={faixa.album_name} nameFaixa={faixa.faixa_name}/>
                    })
                    )


                }

        </div>


    </div> //div container




  )
}

export default App

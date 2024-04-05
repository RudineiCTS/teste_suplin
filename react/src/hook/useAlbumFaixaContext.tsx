import {AlbumFaixaContext} from '../context/albumFaixaContext'
import {useContext} from 'react'

function useAlbumFaixaContext(){
    const context = useContext(AlbumFaixaContext)

    if(context === undefined){
        throw new Error('não esta no contexto')
    }
    return context;
}
export default useAlbumFaixaContext

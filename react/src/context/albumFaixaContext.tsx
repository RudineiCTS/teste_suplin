/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, createContext, useState } from "react";

interface albumFaixaContext{
    album: albumArray;
    setAlbum:(album:albumArray) =>void;
    faixa: faixaArray
    setFaixa:(faixa:faixaArray) =>void;
    albumArrays: albumArray[]
    setAlbumArrays:(albumArrays:albumArray[]) =>void;
    faixaArrays: faixaArray[];
    setFaixaArrays:(faixaArray:faixaArray[]) =>void;
}

interface albumArray {
    album_image:string;
    album_name:string;
    created_at:string;
    id:number;
    updated_at:string;
}
interface faixaArray{
    album_id:number;
    created_at:string;
    faixa_name:string;
    id:number;
    updated_at:string;
    url_faixa:string;
    album_name:string;
}

// interface albumAndFaixa{

// }
export const AlbumFaixaContext = createContext({} as albumFaixaContext);

export function AlbumFaixaProvider({children}:{children:ReactNode}){
    const [album, setAlbum]= useState<albumArray>({} as albumArray);
    const [faixa, setFaixa]= useState<faixaArray>({} as faixaArray);
    const [albumArrays, setAlbumArrays]= useState<albumArray[]>([]);
    const [faixaArrays, setFaixaArrays]= useState<faixaArray[]>([]);

    return(
        <AlbumFaixaContext.Provider value={{album, setAlbum, faixa, setFaixa, albumArrays, setAlbumArrays, faixaArrays,setFaixaArrays }}>
            {children}
        </AlbumFaixaContext.Provider>
    )
}

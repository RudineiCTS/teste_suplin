/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoSearch } from 'react-icons/go';
import styles from './search.module.scss';
import { useState } from 'react';
import axiosApi from '../axios-client';
import useAlbumFaixaContext from '../hook/useAlbumFaixaContext';


interface searchComponentDTO {
    tipo: string;
    setTipo: (value: string) => void;
}

export function SearchComponent({tipo, setTipo}:searchComponentDTO) {
    const {album, faixa, setAlbum, setFaixa, setAlbumArrays, albumArrays, setFaixaArrays}=useAlbumFaixaContext()
    const [inputText, setInputText] = useState('');


    function handleSelectChange(event:any){
        const selectedValue = event.target.value;
        setTipo(selectedValue);
    }

    function handleSearchText(e:any){
        e.preventDefault();
        setInputText(e.target.value)
        console.log(inputText)
    }

    async function  handleSearchItem(e:any){
        e.preventDefault();

        if(!inputText){
            if(tipo ==='album'){
                const response = await axiosApi.get('album')

                setAlbumArrays( response.data.map((album:any) => ({
                        album_image: album.album_image,
                        album_name: album.album_name,
                        id: album.id,
                        created_at: album.created_at,
                        updated_at: album.updated_at

                })));


            }else if(tipo ==='faixa'){
                const response = await axiosApi.get('faixa')
                setFaixaArrays (response.data.map((faixa:any) =>({
                        faixa_image: faixa.url_faixa,
                        faixa_name: faixa.faixa_name,
                        id: faixa.id,
                        created_at: faixa.created_at,
                        updated_at: faixa.updated_at,

            })))
            }
        }else
        {

            if(tipo === 'album'){
                const response = await axiosApi.get('find/album',{
                    params:{
                nome:inputText
                }
            })
            setAlbumArrays(response.data.map((album:any) => ({
                    album_image: album.album_image,
                    album_name: album.album_name,
                    id: album.id,
                    created_at: album.created_at,
                    updated_at: album.updated_at

            })));

            } else if(tipo === 'faixa'){
                const response = await axiosApi.get('find/faixa',{
                    params:{
                        nome:inputText
                    }
                })
                const faixas = response.data.map((faixa:any) => ({
                    albumInput: {
                        albumImage: faixa.album.album_image,
                        albumName: faixa.album.album_name,
                        id: faixa.album.id,
                        created_at: faixa.album.created_at,
                        updated_at: faixa.album.updated_at
                    },
                    faixaInput: {
                        faixaImage: faixa.url_faixa,
                        faixaName: faixa.faixa_name,
                        id: faixa.id,
                        created_at: faixa.created_at,
                        updated_at: faixa.updated_at
                    }
                }));

                setFaixaArrays(faixas.map((faixa:any)=>({
                    faixaImage: faixa.faixaInput.faixaImage,
                    faixa_name: faixa.faixaInput.faixaName,
                    id: faixa.faixaInput.id,
                    created_at: faixa.faixaInput.created_at,
                    updated_at: faixa.faixaInput.updated_at,
                    album_id:faixa.albumInput.id,
                    album_name:faixa.albumInput.albumName
                })));
            }
        }
    }


    return (
        <div className={styles.content}>
    <h1> Discografia</h1>
    <h2> Tião Carreiro e Pardinho</h2>

    <div className={styles.searchContainer}>

        <div className={styles.inputContent}>
            <input type="text"
            name="search"
            placeholder='digite aqui para pesquisar'
            onChange={(e)=>handleSearchText(e)}
            value={inputText}
            />
            <button onClick={(e)=>handleSearchItem(e)}>
                <GoSearch color='#fff' />
            </button>
        </div>


        <div className={styles.searchContent}>
        <span>pesquisando por: </span>
        <select name="searchFor" value={tipo} onChange={handleSelectChange} >
            <option value="album"> album</option>
            <option value="faixa"> faixa</option>
        </select>
        </div>
    </div>
    </div>
)
}

import { useState } from "react";
import axiosApi from "../axios-client";


export function AddAlbum() {
    const [albumData, setAlbumData] = useState({
        album_name: '',
        album_image: ''
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setAlbumData({ ...albumData, [name]: value });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados para o backend, como via axios.post()
        console.log('Dados do álbum:', albumData);
        // Resetar o formulário após a submissão

        const saveAlbum = await axiosApi.post('album',{
                album_name: albumData.album_name,
                album_image: albumData.album_image

        })
        console.log(saveAlbum.data);
        setAlbumData({ album_name: '', album_image: '' });
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Álbum:
            <input
              type="text"
              name="album_name"
              value={albumData.album_name}
              onChange={handleChange}
            />
          </label>
          <label>
            URL da Imagem do Álbum:
            <input
              type="file"
              name="album_image"
              value={albumData.album_image}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      );
    }

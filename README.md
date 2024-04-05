# Rotas Úteis

## Rota para a parte de álbum:

### ROTA GET

- Rota index do álbum, onde retorna todos os álbuns cadastrados: [localhost:8000/api/album](http://localhost:8000/api/album)
- Rota de busca pelo nome. Recebe como parâmetro: `nome:string` -> [localhost:8000/api/find/album](http://localhost:8000/api/find/album)

### ROTA DELETE

- Rota de exclusão de item -> [localhost:8000/api/album/{id}](http://localhost:8000/api/album/{id})

### ROTA POST

- Rota de criação de álbum. Os parâmetros para criação são: `album_name = string; album_image = file` -> [localhost:8000/api/album](http://localhost:8000/api/album)

---

## Rota para a parte de faixa:

### ROTA GET

- Rota index da faixa, onde retorna todas as faixas -> [localhost:8000/api/faixa](http://localhost:8000/api/faixa)
- Rota de busca pelo nome. Recebe como parâmetro: `nome:string` -> [localhost:8000/api/find/faixa](http://localhost:8000/api/find/faixa)

### ROTA POST

- Rota de criação de faixa. Os parâmetros para criação são: `faixa_name = string; url_faixa = file, album_id= number` -> [localhost:8000/api/faixa](http://localhost:8000/api/faixa)

### ROTA DELETE

- Rota de exclusão de item -> [localhost:8000/api/faixa/{id}](http://localhost:8000/api/faixa/{id})

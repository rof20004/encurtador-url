# encurtador-url

API Rest usada para criar urls encurtadas.

# serviços

| Serviço | Verbo HTTP | Descrição | Exemplo |
| --- | --- | --- | --- |
| /api/v1/shortner-uris | POST | Cadastra uma url encurtada a partir da url fornecida | { "url": "https://www.google.com.br" } |
| /:shortUri | GET | Recebe a url encurtada e redireciona para a url original | http://localhost:3000/1j4324u989 } |

# servidores

|Ambiente | Url  | Banco |
|---|---|---|
|DEV| localhost:3000 | sqlite |

# swagger

> http://localhost:3000/api

# tecnologias

* NestJS
* Node.js  
* SQLite3
* Swagger
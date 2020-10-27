# encurtador-url

API Rest usada para criar urls encurtadas.

# serviços

| Serviço | Verbo HTTP | Descrição | Exemplo |
| --- | --- | --- | --- |
| /api/v1/shortner-uris | POST | Cadastra uma url encurtada a partir da url fornecida | { "url": "https://www.google.com.br" } |

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
* Swagger 2
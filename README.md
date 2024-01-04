## Full Cycle
#### Docker | Desafio Nginx com Node.js

Desafio Nginx com Node.js utilizando docker, ao rodar o comando
```
docker-compose up -d
```
a aplicação subirá um container nginx, que funciona como um proxy reverso, um container com mysql para banco de dados onde serão armazenados nomes em uma tabela "people" e um container com a aplicação em Node.js.
Ao acessar à URL: http://localhost:8080, a aplicação insere um novo nome no banco e na tela devemos ver um \<h1\> com a frase: "Full Cycle Rocks!" seguida por uma lista com os nomes dos usuários cadastrados no banco.

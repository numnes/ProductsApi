
<img src="https://res.cloudinary.com/nunes/image/upload/v1659213868/products/ProductsApi_vs9fng.png"/>

### Sobre
 Esta aplicação é um CRUD simples que gere registros de produtos genéricos, neste repositório está o backend da aplicação, a interface que faz parte do projeto está no repositório [matheusnunesismael/productsfront](https://github.com/matheusnunesismael/ProductsFront).

 A aplicação completa está hospedada em : https://productsfront.herokuapp.com 

### Execução
Este projeto foi criado em NestJs, e utiliza o MongoDB como banco de dados, para executá-lo basta clonar o repositório em uma máquina com o NodeJs instalado e executar os comandos abaixo:

```bash
## Npm 
npm install
npm run start:dev

## Yarn 
yarn install
yarn start:dev
```

Um exemplo das variáveis de ambiente que devem ser configuradas está no arquivo **.env.example**

### Documentação
A aplicação possui uma página Swagger com todos os exemplos de chamadas que podem ser executadas com suas respectivas descrições. Ao executar a aplicação está página ficará disponível em http://localhost:**PORT**/api, onde **PORT** é a porta definida nas variáveis de ambiente.
A versão online da documentação Swagger está disponível em https://aroductsapi.herokuapp.com/api.

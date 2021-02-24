
<p  align="center">

<a  href="https://wisereducacao.com/"  target="blank"><img  src="https://wisereducacao.com/images/logo-wiser.png"  width="560"  alt="Wiser Educação"  /></a>

</p>

  

<p  align="center">Serviço de encurtamento de URL || Challenge Technical in Wiser </p>

  

## Descriçao

  

Está é uma API, construida com [NODE JS](https://nodejs.org/en/) Ultilizando como framework o [NEST JS](https://nestjs.com/)

  

## Instalando e Iniciando a Aplicação

  
### Instalando o NestJS 
```bash

$ npm i -g @nestjs/cli

```
### Instalando as dependências do projeto 
```bash

$ npm run i || yarn install

```

### Configurando as variáveis de ambiente 
Crie um arquivo .env na raiz do projeto, ele irá conter as informações necessários que a api precisa.

Segue abaixo o exemplo das informações que está em produção:

Obs: em projetos reais, essas informações não podem ser divulgadas
```json

URL_SERVER=https://shorten-wiser-education.herokuapp.com/
PORT=3000
DB_TYPE=postgres
DB_HOST=motty.db.elephantsql.com
DB_PORT=5432
DB_USERNAME=msuwbbsg
DB_PASSWORD=ZGfwP0SKr47GWjDmqYl-xeN-K35xMYsK
DB_DATABASE=msuwbbsg


```

### Modos de Inicio da API

#### Start Padrão
```bash

$ npm start || yarn start

```

#### Modo De Desenvolvimento

```bash

$ npm start || yarn start:dev

```

#### Modo De Debug
```bash

$ npm start || yarn start:debug

```

#### Modo De Produção
```bash

$ npm start || yarn start:prod

```


  

## Testes Unitários

  

```bash

$ npm run test || yarn test

```
  

# Teste Coverage
```bash

$ npm run test:cov || yarn test:cov

```

  

## API Documentation

  

Documentação da API feita com o swagger [Swagger Docs](https://shorten-wiser-education.herokuapp.com/docs).

  

## Redes Sociais

  

```markdown
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/RabeloJunior105)](https://github.com/RabeloJunior105)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/junior-rabelo-04b744185/)](https://www.linkedin.com/in/junior-rabelo-04b744185/)


```

  

## Deploy

  

O deploy do projeto foi feito no [Heroku](https://heroku.com). e você consegue visuarlizar  [clicando aqui](https://shorten-wiser-education.herokuapp.com/).

  

## License

  

This project is under MIT license. Look [License](LICENSE) for more details!

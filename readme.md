Explain
# NodeSheetMaster

NodeSheetMaster é uma aplicação Node.js escrita em TypeScript que facilita a interação com o Google Sheets API. Permitindo aos usuários realizar operações básicas de leitura e escrita em planilhas do Google, como obter metadados, ler e escrever valores de células, adicionar linhas e atualizar valores.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Autenticação segura com o Google Sheets API
- Leitura de metadados e valores de células específicas
- Adição e atualização de linhas em planilhas
- Suporte para manipulação de dados em tempo real

## Requirements

- Node.js v14 ou superior
- TypeScript v4 ou superior
- Conta Google e acesso ao Google Sheets API

## Installation

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/NodeSheetMaster.git 
cd NodeSheetMaster
```
2. Instale as dependências:
```
npm install
```

3. Crie um arquivo `credentials.json` na pasta `src/config/` ou `./` com suas credenciais do Google Sheets API.

4. Rode o projeto:
```
npm start
```

## Usage

O NodeSheetMaster expõe endpoints RESTful que permitem interagir com o Google Sheets. Os endpoints disponíveis são:

- `GET /metadata`: Retorna os metadados da planilha.
- `GET /getRows`: Retorna os valores de linhas específicas da planilha.
- `POST /addRow`: Adiciona uma nova linha à planilha.
- `POST /updateValues`: Atualiza valores em uma planilha.

## Contributing

Fique à vontade para enviar pull requests, relatar problemas ou sugerir melhorias.

## License

Este projeto está licenciado sob a MIT License.

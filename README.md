# Documentação da API de Dashboard para Dados Excel

## 1. Introdução

Esta documentação descreve uma API REST desenvolvida em Node.js com Express.js, projetada para extrair, processar e fornecer dados de um arquivo Excel (`secor.xlsx`) para visualização em um dashboard. A API oferece funcionalidades para leitura de dados, filtragem com base em critérios específicos e fornecimento de estatísticas resumidas.

## 2. Objetivo

O objetivo principal desta API é fornecer uma interface para acessar e manipular dados de um arquivo Excel de forma programática, permitindo a criação de dashboards e outras aplicações que necessitem visualizar ou analisar esses dados.

## 3. Funcionalidades

A API oferece as seguintes funcionalidades:

- **Leitura de Dados do Excel:** Extrai dados de um arquivo Excel e os converte para o formato JSON.
- **Conversão de Datas e Tempos:** Converte datas e tempos seriais do Excel para formatos JavaScript.
- **Filtragem de Dados:** Permite filtrar os dados com base em critérios específicos, como prioridade, status e intervalo de datas.
- **Estatísticas Resumidas:** Fornece estatísticas resumidas dos dados, como total de chamados, chamados finalizados e em aberto.

## 4. Tecnologias e Ferramentas

As seguintes tecnologias e ferramentas foram utilizadas no desenvolvimento da API:

- **Node.js:** Plataforma de execução JavaScript para o servidor.
- **Express.js:** Framework web para Node.js, utilizado para criar a API REST.
- **xlsx:** Biblioteca para leitura e escrita de arquivos Excel.
- **cors:** Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
- **dotenv:** Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.
- **morgan:** Middleware para logging de requisições HTTP.

## 5. Estrutura do Projeto

```
 dash_api/
 ├── README.md
 ├── package.json
 ├── server.js
 └── src/
     ├── controllers/
     │   └── excelController.js
     ├── routes/
     │   └── index.js
     ├── services/
     │   └── excelService.js
     ├── utils/
     │   ├── delta.js
     │   ├── filters.js
     │   └── functions.js
     └── data/
         └── secor.xlsx
```

## 6. Como Usar

### 6.1. Pré-requisitos

- Node.js instalado na sua máquina.
- Arquivo Excel `secor.xlsx` na pasta `src/data/`.

### 6.2. Instalação

1. Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITÓRIO>
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd dash_api
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto e defina a variável de ambiente `PORT`:

    ```ini
    PORT=3000
    ```

### 6.3. Execução

1. Inicie o servidor em modo de desenvolvimento:

    ```bash
    npm run dev
    ```

2. Ou inicie o servidor em modo de produção:

    ```bash
    npm start
    ```

3. A API estará disponível em `http://localhost:3000`.

### 6.4. Endpoints

#### **`GET /dashboard`**

Retorna todos os dados do Excel e estatísticas resumidas.

**Resposta:**

```json
{
    "message": "Informações da planilha",
    "Total_de_chamados": 100,
    "chamados_finalizados": 70,
    "chamados_em_aberto": 30,
    "planilha": [...]
}
```

#### **`POST /dashboard/filters`**

Filtra os dados com base nos critérios fornecidos no corpo da requisição.

**Corpo da Requisição:**

```json
{
    "filtros": ["Protocolo", "Assunto", "Categoria"]
}
```

**Resposta:**

```json
[
    {
        "Protocolo": "851",
        "Assunto": "Segundo treinamento rotina thermas - Caixa",
        "Categoria": "Suporte"
    }
]
```

## 7. Considerações Finais

Esta documentação fornece uma visão geral da API de dashboard para dados Excel. Para mais informações ou dúvidas, entre em contato com o responsável pelo projeto.


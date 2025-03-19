# Documentação da API de Dashboard para Dados Excel

## 1. Introdução

Esta documentação descreve uma API REST desenvolvida em Node.js com Express.js, projetada para extrair, processar e fornecer dados de um arquivo Excel (`secor.xlsx`) para visualização em um dashboard. A API oferece funcionalidades para leitura de dados, filtragem com base em critérios específicos e fornecimento de estatísticas resumidas.

## 2. Objetivo

O objetivo principal desta API é fornecer uma interface para acessar e manipular dados de um arquivo Excel de forma programática, permitindo a criação de dashboards e outras aplicações que necessitem visualizar ou analisar esses dados.

## 3. Funcionalidades

A API oferece as seguintes funcionalidades:

* **Leitura de Dados do Excel:** Extrai dados de um arquivo Excel e os converte para o formato JSON.
* **Conversão de Datas e Tempos:** Converte datas e tempos seriais do Excel para formatos JavaScript.
* **Filtragem de Dados:** Permite filtrar os dados com base em critérios específicos, como prioridade, status e intervalo de datas.
* **Estatísticas Resumidas:** Fornece estatísticas resumidas dos dados, como total de chamados, chamados finalizados e em aberto.

## 4. Tecnologias e Ferramentas

As seguintes tecnologias e ferramentas foram utilizadas no desenvolvimento da API:

* **Node.js:** Plataforma de execução JavaScript para o servidor.
* **Express.js:** Framework web para Node.js, utilizado para criar a API REST.
* **xlsx:** Biblioteca para leitura e escrita de arquivos Excel.
* **cors:** Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
* **dotenv:** Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.
* **morgan:** Middleware para logging de requisições HTTP.

## 5. Estrutura do Projeto

A estrutura do projeto é a seguinte:
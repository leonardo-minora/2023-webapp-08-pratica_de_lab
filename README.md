# Prática de laboratório - Requisção a API - Aplicação web

## Informações gerais
- **Tema**: Fundamentos de React
- **Subtema**: Requisição a API
- **Aula base**: [Usando dados a partir de requisições a API](fundamentos/08-requisicao_api-tarefas.md)
- curso: infoweb
- disciplina: [programação orientada a serviços](https://github.com/infoweb-pos/)
- conteúdo: [aplicação web](https://github.com/infoweb-pos/react-notas_de_aula)
- instituição: IFRN CNAT [DIATINF](https://diatinf.ifrn.edu.br/)
- professor: [Leonardo Ataide Minora](https://github.com/leonardo-minora/)

## Resumo da tarefa
Criar uma aplicação web usando o framework React e a linguagem de programação TypeScript contendo 3 componentes React: (i) AppNavBar, contendo um título; (ii) AppUFLista, contendo a lista das siglas das Unidades Federativas do Brasil; e (iii) AppUFDetalhe, contendo os detalhes de uma determinada Unidade Federativa.

A lista das siglas das Unidades Federativas bem como os detalhes sobre uma determinada Unidade Federativa serão _carregadas_ por requisições a API, respectivamente https://infoweb-api.vercel.app/uf e https://infoweb-api.vercel.app/uf/:sigla.

No primeiro momento, os detalhes podem ser carregados a partir dos dados da primeira requisição mas o objetivo deste exercício será fazer 2 requisições distintas.

## Tarefas
1. Fork deste repositório https://github.com/infoweb-pos/2023-webapp-08-pratica_de_lab/.
2. Criar uma aplicação web com o vite usando react e typescript.
3. Abrir o VS Code com o projeto.
4. Executar a aplicação web e abrir no navagador.
5. No arquivo `src/App.tsx`, fazer as tarefas
   1. Limpar o código padrão.
   2. Criar o compnente `AppNavBar` com um título fixo;
   3. Colocar uma instância de `AppNavBar` em `App`;
   4. Criar o componente `AppUFLista` com uma lista de siglas de unidades federativas;
   5. Colocar uma instância de `AppUFLista` em `App`
   6. Criar o componente `AppUFDetalhe` com pelo menos a sigla e nome da unidade federativa. Os itens de `AppUFDetalhe` não devem permitir edição;
   7. Colocar uma instância de `AppUFDetalhe` em `App`;
   8. No componente `AppUFDetalhe`, transferir os dados do JSX para um estado do componente `uf`;
   9. Elevar o estado `uf` de `AppUFDetalhe` para `App`. Lembre de levar a função que atualiza o estado `uf`; 
   10. Se usou `uf` como `string`, modificar para um objeto `uf` e usa-lo para repassar de `App` para `AppUFDetalhe`;
   11. No componente `AppUFLista`, transferir os dados do JSX para um estado do componente `ufs`.
       1.  Use o `uf.id` ou `uf.sigla` para definir o `key`;
       2.  No mapeamento de `ufs` para JSX, deve conter o evento `onClick`;
       3.  O tratamento do `onClick` pode ter como parâmetro o `uf.sigla` ou a própria `uf`.
       4.  O tramento irá colocar o valor `uf` no estado `uf` de `App`.
   12. Elevar o estado `ufs` de `AppUFLista` para `App`;
   13. Colocar `[]` lista vazia no valor inicial de `ufs`
   14. Adicionar um botão em `AppUFDetalhe` para _carregar_ as UFs;
   15. Criar a função `carregarUFs` e adicionar ao evento `onClick` do botão _carregar_;
   16. Programar a função `carregarUFs` para acessar https://infoweb-api.vercel.app/uf e modificar o estado `ufs`.

## Desafios

**Carregar detalhe da UF a partir de uma requisição a API**

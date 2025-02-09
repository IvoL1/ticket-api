# Ticket API

API para gerenciamento de tickets de suporte técnico, desenvolvida com Node.js. A API permite a criação, atualização, listagem, filtragem, fechamento e exclusão de tickets, facilitando o acompanhamento e a gestão de problemas relacionados a equipamentos e usuários.

## Funcionalidades

- **Criar Ticket**: Criação de novos tickets com informações sobre o equipamento, descrição e nome do usuário.
- **Listar Tickets**: Obtenção de uma lista de todos os tickets criados.
- **Filtrar Tickets**: Filtragem de tickets por status.
- **Atualizar Ticket**: Edição de informações, como equipamento e descrição, mantendo o nome do usuário fixo.
- **Excluir Ticket**: Exclusão de tickets indesejados.
- **Fechar Ticket**: Alteração do status do ticket para "Fechado".

## Tecnologias Utilizadas

- **Node.js**: Para o desenvolvimento da API.
- **Express.js**: Framework para facilitar a criação das rotas.
- **UUID**: Para geração automática de IDs exclusivos para cada ticket.

## Endpoints

### 1. **Criar Ticket**
- **Método**: `POST`
- **Rota**: `/tickets`
- **Corpo da requisição**:
  ```json
  {
    "user": "Nome do usuário",
    "equipment": "Equipamento relacionado ao problema",
    "description": "Descrição do problema"
  }
  ```

### 2. **Listar Tickets**
- **Método**: `GET`
- **Rota**: `/tickets`

### 3. **Filtrar Tickets**
- **Método**: `GET`
- **Rota**: `/tickets/filter/:id`
- **Parâmetros**:
  - `status`: Status do ticket (ex: "open", "close")

### 4. **Atualizar Ticket**
- **Método**: `PUT`
- **Rota**: `/tickets/:id`
- **Corpo da requisição**:
  ```json
  {
    "equipment": "Novo equipamento",
    "description": "Nova descrição do problema"
  }
  ```

### 5. **Excluir Ticket**
- **Método**: `DELETE`
- **Rota**: `/tickets/:id`

### 6. **Fechar Ticket**
- **Método**: `PATCH`
- **Rota**: `/tickets/:id/close`

## Instruções de Uso

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/ticket-api.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd ticket-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. A API estará rodando em `http://localhost:3000`.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça suas alterações e envie-as (`git commit -am 'Adicionar nova feature'`).
4. Envie para o repositório original (`git push origin feature/nome-da-feature`).
5. Crie uma pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

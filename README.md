<!-- ```markdown
# Calculadora em React com Styled Components

![Calculadora](https://via.placeholder.com/400x300.png?text=Calculadora+React)  
*(Imagem ilustrativa da calculadora)*

## Descrição do Projeto -->

### Este projeto é uma calculadora simples desenvolvida utilizando **React** para a estruturação dos componentes e **Styled Components** para a estilização. A calculadora realiza operações básicas como adição, subtração, multiplicação e divisão, além de incluir funcionalidades como limpar o visor e calcular porcentagens.

## Funcionalidades

- **Operações básicas:** Adição, subtração, multiplicação e divisão.
- **Limpar visor:** Botão para resetar o visor da calculadora.
- **Porcentagem:** Calcula a porcentagem de um número.
- **Interface responsiva:** Design adaptável para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **[React](https://reactjs.org/):** Biblioteca JavaScript para construção de interfaces de usuário.
- **[Styled Components](https://styled-components.com/):** Biblioteca para estilizar componentes React com CSS-in-JS.
<!-- **[React Icons](https://react-icons.github.io/react-icons/):** Biblioteca de ícones para React.
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida para projetos modernos. -->

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto no seu ambiente local:

### Pré-requisitos

- Node.js instalado (versão 16.x ou superior).
- NPM ou Yarn instalado.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   # ou
   yarn start
   ```

5. acesse:

   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

Aqui está uma visão geral da estrutura de pastas do projeto:

```
src/
├── components/       # Componentes React
│   ├── Button.jsx    # Componente de botão
│   ├── Display.jsx   # Componente do visor da calculadora
│   └── Calculator.jsx # Componente principal da calculadora
├── styles/           # Estilos com Styled Components
│   ├── GlobalStyles.js # Estilos globais
│   └── theme.js      # Tema de cores (opcional)
├── App.jsx           # Componente raiz
└── main.jsx          # Ponto de entrada do React
```

<!-- ## Exemplo de Código

Aqui está um exemplo de como um componente pode ser estilizado com Styled Components:

```javascript
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Button;
``` -->

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

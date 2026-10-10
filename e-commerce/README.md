# 🛒 E-Commerce

<h1 align="center">
  🛒 E-Commerce
</h1>

<p align="center">
  <strong>Página de Produto com Formulário de Checkout</strong><br>
  <em>Front-End • Formulários • Integração com APIs REST • UI/UX</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/API-ViaCEP-2E8B57?style=flat" alt="ViaCEP API">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=flat" alt="Status">
</p>

<p align="center">
  • <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-conceitos-praticados">Conceitos</a> •
  <br>
  • <a href="#️-tecnologias">Tecnologias</a> •
  <a href="#-como-executar-o-projeto">Como executar</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-autor">Autor</a> •
</p>

---

## 💻 Sobre o projeto

O **E-Commerce** é um projeto de interface web que simula parte da experiência de compra de uma loja virtual, reunindo uma página de produto e um formulário de checkout com informações de entrega.

A interface apresenta informações do produto, imagem, avaliação por estrelas, preços, desconto e seleção de variantes de cor. Além disso, disponibiliza um formulário para preenchimento dos dados do cliente e do endereço de entrega.

Um dos principais recursos é a integração com a API pública ViaCEP, que permite consultar o endereço a partir do CEP informado e preencher automaticamente os campos correspondentes.

Desenvolvido com HTML5, CSS3 e JavaScript Vanilla, o projeto tem como foco a construção de interfaces comerciais, a validação de formulários e a integração entre dados externos e elementos da página.

### 🎯 Objetivos do projeto

- Construir uma página de produto com estrutura semelhante à de uma loja virtual.
- Praticar a criação de formulários com múltiplos campos.
- Implementar validações de entrada e campos obrigatórios.
- Integrar uma API REST para consulta de endereços.
- Automatizar o preenchimento dos dados de entrega.
- Manipular o DOM e responder a eventos do usuário.
- Desenvolver layouts responsivos com CSS Grid e Flexbox.
- Aplicar um design system para manter a consistência visual.

---

## 🚀 Funcionalidades

O projeto reúne os principais elementos visuais e interativos de uma página de produto com formulário de checkout.

| Funcionalidade | Descrição |
|---|---|
| **Página de produto** | Exibe imagem, título, avaliação por estrelas, preços e desconto. |
| **Seleção de cores** | Permite selecionar variantes do produto, como Space Gray e Silver. |
| **Formulário de checkout** | Disponibiliza campos para preenchimento dos dados pessoais e do endereço de entrega. |
| **Consulta automática de CEP** | Busca informações de endereço por meio da API ViaCEP. |
| **Preenchimento automático** | Preenche campos como rua, bairro e estado com os dados retornados pela API. |
| **Validação de formulário** | Verifica os campos obrigatórios e a formatação das entradas. |
| **Footer completo** | Reúne links de navegação, contato e redes sociais. |
| **Layout responsivo** | Adapta a interface para diferentes tamanhos de tela. |

> O projeto simula a interface de uma etapa de compra. Recursos como processamento de pagamentos, persistência de pedidos e integração com sistemas de estoque não são presumidos como implementados.

---

## 🧠 Conceitos praticados

### Estruturação com HTML5

- Organização semântica da página de produto.
- Construção de formulários com diferentes tipos de campos.
- Utilização de labels e atributos de validação.
- Organização de informações comerciais e de entrega.
- Estruturação de navegação e rodapé.

### Estilização com CSS3

- Criação de layouts com CSS Grid e Flexbox.
- Utilização de variáveis CSS para cores, tipografia e espaçamentos.
- Desenvolvimento de layouts responsivos com media queries.
- Estilização de campos, botões e opções de variantes.
- Organização visual de informações do produto.
- Aplicação de estados visuais para elementos interativos.

### JavaScript e manipulação do DOM

- Seleção e atualização de elementos HTML.
- Captura de eventos de formulário e interação.
- Implementação da seleção de variantes de cor.
- Validação de campos e formatação de entradas.
- Atualização automática dos campos de endereço.
- Integração com serviços externos por meio da Fetch API.

### Integração com APIs REST

- Envio de requisições HTTP.
- Consumo e processamento de respostas JSON.
- Consulta de CEP por meio de um endpoint externo.
- Preenchimento dos campos com dados retornados.
- Tratamento de respostas inválidas e falhas de conexão.

### UI/UX e design system

- Organização da hierarquia visual da página de produto.
- Apresentação clara de preços, descontos e variantes.
- Agrupamento dos campos de checkout por contexto.
- Consistência de cores, tipografia e espaçamentos.
- Criação de uma experiência de preenchimento simples e intuitiva.

---

## 🛠️ Tecnologias

### Front-End

- **HTML5** — Estrutura semântica da página e dos formulários.
- **CSS3** — Estilização, variáveis CSS, layouts responsivos e componentes visuais.
- **JavaScript ES6+** — Lógica de interação, validação e manipulação do DOM.
- **Fetch API** — Comunicação com a API externa de consulta de CEP.

### API externa

- **ViaCEP** — Serviço público utilizado para consultar endereços brasileiros a partir do CEP.

### Ferramentas

- **Visual Studio Code** — Ambiente de desenvolvimento.
- **Live Server** — Execução local da aplicação.
- **Git e GitHub** — Controle de versão e hospedagem do código-fonte.

---

## 🌐 API utilizada

### ViaCEP

A aplicação utiliza a API pública ViaCEP para recuperar informações de endereço a partir do CEP informado no formulário de checkout.

- **Site oficial:** https://viacep.com.br/
- **Endpoint:** `https://viacep.com.br/ws/{CEP}/json/`
- **Formato da resposta:** JSON.

### Exemplo de requisição

```text
https://viacep.com.br/ws/01001000/json/
```

A resposta contém informações como logradouro, bairro, município, estado e CEP. Esses dados podem ser utilizados para preencher automaticamente os campos correspondentes do formulário.

A aplicação deve validar o CEP antes da consulta e tratar situações em que o endereço não seja encontrado ou a requisição falhe.

---

## 🎨 Design System

O projeto utiliza variáveis CSS para centralizar valores visuais e manter a consistência entre os diferentes elementos da interface.

### Elementos do design system

- **Cores:** definidas por variáveis CSS para facilitar a manutenção da identidade visual.
- **Tipografia:** organizada para diferenciar títulos, informações do produto, preços e textos auxiliares.
- **Espaçamentos:** padronizados para manter o alinhamento entre seções e campos.
- **Componentes:** campos, botões, seletores de cor e áreas de informação estilizados de forma consistente.
- **Responsividade:** regras de layout adaptadas para dispositivos móveis, tablets e desktops.

---

## 🚀 Como executar o projeto

### 1. Acesse a pasta do projeto

Se você já clonou o repositório Interface.Lab, execute:

```bash
cd e-commerce
```

Caso ainda não tenha clonado o repositório, execute:

```bash
git clone https://github.com/Dferreiraz/Interface.Lab.git
cd Interface.Lab/e-commerce
```

### 2. Abra a aplicação

Abra a pasta no Visual Studio Code e execute o arquivo `index.html` com a extensão **Live Server**.

Também é possível abrir o arquivo diretamente no navegador.

### 3. Teste as funcionalidades

1. Explore a página e confira as informações do produto.
2. Selecione as opções de cor disponíveis.
3. Preencha os campos do formulário de checkout.
4. Informe um CEP válido para testar a consulta automática.
5. Confira o preenchimento dos campos de endereço.
6. Teste as validações e a adaptação do layout em diferentes tamanhos de tela.

> É necessária uma conexão com a internet para consultar os dados da API ViaCEP.

---

## 📂 Estrutura do projeto

```text
e-commerce/
│
├── index.html
│
├── css/
│   ├── global.css
│   └── styles.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── img/
│       ├── product/
│       └── icons/
│
└── README.md
```

- **`index.html`** — Estrutura da página de produto e do formulário de checkout.
- **`css/global.css`** — Reset, variáveis CSS e estilos base.
- **`css/styles.css`** — Estilos específicos, componentes e responsividade.
- **`js/script.js`** — Lógica de consulta de CEP, seleção de cores e eventos do formulário.
- **`assets/img/`** — Imagens do produto e ícones utilizados na interface.

> A estrutura apresentada é uma referência. Ajuste os nomes das pastas e arquivos conforme a organização real do repositório.

---

## 👨‍💻 Autor

Desenvolvido por **Davi Ferreira** como parte da jornada de aprendizado em desenvolvimento Front-End e construção de interfaces web.

<p>
  <a href="https://github.com/Dferreiraz">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://br.linkedin.com/in/davirobertoferreira">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

---

<p align="center">
  🛒 <strong>E-Commerce</strong> — Da visualização do produto ao preenchimento do endereço de entrega.
</p>
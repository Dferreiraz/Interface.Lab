# 📍 Consulta de CEP

<h1 align="center">
  📍 Consulta de CEP
</h1>

<p align="center">
  <strong>Aplicação Web para Consulta de Endereços Brasileiros</strong><br>
  <em>Front-End • Integração com APIs REST • JavaScript Vanilla</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat&logo=javascript&logoColor=black" alt="JavaScript ES6+">
  <img src="https://img.shields.io/badge/API-ViaCEP-2E8B57?style=flat" alt="ViaCEP API">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=flat" alt="Status">
</p>

<p align="center">
  • <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-como-executar-o-projeto">Como executar</a> •
  <br>
  • <a href="#-conceitos-praticados">Conceitos</a> •
  <a href="#️-tecnologias">Tecnologias</a> •
  <a href="#-api-utilizada">API</a> •
  <a href="#-autor">Autor</a> •
</p>

---

## 💻 Sobre o projeto

O **Consulta de CEP** é uma aplicação web desenvolvida para consultar endereços brasileiros a partir do Código de Endereçamento Postal (CEP), utilizando a API pública ViaCEP.

O projeto foi desenvolvido com HTML5, CSS3 e JavaScript Vanilla, com foco na integração com APIs REST, na validação de formulários e na manipulação dinâmica do DOM.

A aplicação permite consultar um CEP, obter informações de endereço e preencher automaticamente os campos correspondentes, oferecendo feedback visual durante as operações.

Sua interface utiliza um design moderno com gradiente verde e efeito glassmorphism, combinando apresentação visual e funcionalidade em uma experiência responsiva.

### 🎯 Objetivos do projeto

- Praticar o consumo de APIs REST utilizando a Fetch API.
- Compreender o processamento de respostas no formato JSON.
- Implementar validações de entrada antes de realizar requisições.
- Manipular o DOM para atualizar campos dinamicamente.
- Trabalhar com eventos de formulários e interação do usuário.
- Tratar erros de validação, respostas da API e falhas de conexão.
- Desenvolver interfaces responsivas com CSS3.
- Aplicar feedback visual para melhorar a experiência do usuário.

---

## 🚀 Funcionalidades

A aplicação reúne recursos para tornar a consulta de endereços simples e intuitiva.

| Funcionalidade | Descrição |
|---|---|
| **Consulta de CEP** | Busca informações de endereço por meio da API ViaCEP. |
| **Busca automática** | Realiza a consulta ao sair do campo CEP, utilizando o evento `blur`. |
| **Formatação automática** | Aplica uma máscara ao CEP durante a digitação, no formato `00000-000`. |
| **Preenchimento automático** | Atualiza os campos de logradouro, bairro e estado com os dados retornados. |
| **Validação de entrada** | Verifica se o CEP possui oito dígitos antes de realizar a requisição. |
| **Feedback visual** | Apresenta estados de carregamento, sucesso e erro. |
| **Tratamento de erros** | Informa quando o CEP não é encontrado ou ocorre uma falha na consulta. |
| **Interface responsiva** | Adapta o layout a diferentes tamanhos de tela. |

---

## 🧠 Conceitos praticados

Durante o desenvolvimento, são aplicados conceitos fundamentais do JavaScript e do desenvolvimento Front-End.

**JavaScript e manipulação do DOM**

- Seleção e atualização de elementos HTML.
- Manipulação de valores de campos de formulário.
- Gerenciamento de eventos, como `input`, `blur` e `submit`.
- Funções e organização da lógica da aplicação.
- Formatação e validação de dados.

**Integração com APIs REST**

- Requisições HTTP utilizando a Fetch API.
- Consumo de endpoints externos.
- Conversão de respostas para JSON.
- Processamento dos dados retornados.
- Tratamento de erros e respostas inválidas.
- Verificação de CEPs não encontrados.

**Formulários e validação**

- Validação de campos antes de realizar requisições.
- Verificação da quantidade de dígitos do CEP.
- Aplicação de máscara de entrada.
- Preenchimento automático de campos.
- Apresentação de mensagens de feedback.

**CSS e experiência do usuário**

- Layout responsivo com CSS Grid e Flexbox.
- Utilização de variáveis CSS.
- Gradientes e efeitos de glassmorphism.
- Organização visual dos campos e informações.
- Estados visuais de carregamento, sucesso e erro.

---

## 🛠️ Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento da aplicação.

### Front-End

- **HTML5** — Estruturação semântica dos elementos e formulários.
- **CSS3** — Estilização, variáveis CSS, layout responsivo, gradientes e glassmorphism.
- **JavaScript ES6+** — Lógica da aplicação, eventos, validação e manipulação do DOM.
- **Fetch API** — Comunicação com a API externa para obtenção dos dados de endereço.

### API externa

- **ViaCEP** — Serviço público para consulta de informações de endereços brasileiros a partir do CEP.

### Ferramentas

- **Visual Studio Code** — Ambiente de desenvolvimento.
- **Live Server** — Execução local da aplicação durante o desenvolvimento.
- **Git e GitHub** — Controle de versão e hospedagem do código-fonte.

---

## 🚀 Como executar o projeto

### 1. Acesse a pasta do projeto

Se você já clonou o repositório Interface.Lab, execute:

```bash
cd consulta-de-cep
```

Caso ainda não tenha clonado o repositório, execute:

```bash
git clone https://github.com/Dferreiraz/Interface.Lab.git
cd Interface.Lab/consulta-de-cep
```

### 2. Abra o projeto no navegador

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

O Live Server é recomendado durante o desenvolvimento para facilitar a execução e os testes da aplicação.

### 3. Realize uma consulta

- Digite um CEP brasileiro com oito dígitos, como `01001-000`.
- Clique no botão **Buscar** ou pressione Enter.
- Aguarde a consulta e confira os dados retornados.
- Observe as mensagens apresentadas em caso de sucesso ou erro.

> É necessária uma conexão com a internet para consultar os dados da API ViaCEP.

---

## 🌐 API utilizada

### ViaCEP

A aplicação utiliza a API pública **ViaCEP**, que permite consultar informações de endereços brasileiros a partir de um CEP.

- **Site oficial:** https://viacep.com.br/
- **Endpoint de consulta:** `https://viacep.com.br/ws/{CEP}/json/`
- **Formato da resposta:** JSON.

### Exemplo de requisição

Para consultar o CEP `01001000`, utilize o seguinte endpoint:

```text
https://viacep.com.br/ws/01001000/json/
```

### Exemplo de resposta

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "unidade": "",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "estado": "São Paulo",
  "regiao": "Sudeste",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

A aplicação utiliza os dados retornados para preencher os campos de endereço correspondentes.

A API também pode retornar uma indicação de CEP não encontrado. Por isso, a aplicação deve verificar o resultado da consulta e apresentar mensagens apropriadas ao usuário.

---

## 📂 Estrutura do projeto

```text
consulta-de-cep/
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
└── README.md
```

> A estrutura acima representa uma organização sugerida para o projeto. Os nomes e diretórios devem corresponder aos arquivos realmente existentes no repositório.

---

## 👨‍💻 Autor

Desenvolvido por **Davi Ferreira** como parte da jornada de aprendizado em desenvolvimento Front-End.

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
  📍 <strong>Consulta de CEP</strong> — Conectando dados, lógica e experiência do usuário.
</p>
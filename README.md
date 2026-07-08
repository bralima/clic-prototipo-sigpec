# 🏛️ CLIC - Central de Informações e Apoio (Protótipo)

Este repositório contém o protótipo estático da **CLIC – Central de Informações e Apoio**, desenvolvido para simular a interface e o fluxo de navegação do sistema de gestão de pessoas da COGEP/SEGES.

> **Aviso:** Este é um protótipo funcional apenas para demonstrar a experiência do usuário (UX/UI). Todos os dados, links e formulários são simulados e não armazenam informações reais.

---

## 🎯 Objetivo do projeto

Criar uma base visual e estrutural para o novo portal de suporte da COGEP, alinhado ao design proposto no Figma, com navegação fluida entre as principais telas:

- Página inicial com notícias e atalhos
- Login e cadastro de usuários
- Recuperação de senha
- Motivos de solicitação (5 opções)
- Formulários específicos para cada motivo

---

## 🧩 Tecnologias utilizadas

- **HTML5** – Estrutura das páginas
- **CSS3** – Estilização com variáveis, grid e flexbox
- **JavaScript (vanilla)** – Interações leves, validações e navegação

Tudo foi desenvolvido com foco em **componentização** e **reutilização de código**, facilitando a futura migração para outras tecnologias.

---

## 🎨 Paleta de cores (baseada no Figma)

| Cor | Uso |
|-----|-----|
| `#325FAA` | Azul SIGPEC (botões, títulos) |
| `#5F94D9` | Azul médio (destaques) |
| `#6EABFA` | Azul claro (links, hover) |
| `#03989E` | Teal (avisos, destaques) |
| `#565555` | Cinza Word (textos) |
| `#F4F4F4` | Cinza claro (fundos) |
| `#C0C0C0` | Cinza borda |
| `#FFBE5A` | Laranja (botão destaque) |
| `#FFFFFF` | Branco (cards, fundos) |

---


## 📁 Estrutura de diretórios

clic-prototipo/
├── index.html                 # Página inicial
├── pages/
│   ├── login-sigpec.html      # Login
│   ├── cadastro-sigpec.html   # Cadastro
│   ├── recuperar-senha.html   # Recuperação de senha
│   ├── motivo-solicitacao.html # Motivo da solicitação
│   └── formulario/            # Formulários de cada motivo
│       ├── inclusao_usuario.html
│       ├── inclusao_padrao.html
│       ├── alteracao_setor.html
│       ├── exclusao_padrao.html
│       └── ativar_desativar_acesso.html
├── css/
│   ├── style.css              # Estilos globais
│   ├── login-sigpec.css
│   ├── cadastro-sigpec.css
│   ├── recuperar-senha.css
│   ├── motivo-solicitacao.css
│   └── formularios.css        # CSS unificado para todos os formulários
├── img/                       # Imagens (logos, ícones, ilustrações)
└── js/
    └── script.js              # Funções JS compartilhadas


---

## 🖥️ Como visualizar o protótipo

1. Acesse o link do GitHub Pages:  
   `https://SEU_USUARIO.github.io/clic-prototipo/`
2. Navegue pelas páginas usando os menus e botões.
3. Interaja com formulários e links (todos exibem alertas simulados).

---

## 👥 Créditos

- **Design original** – Paulo (concepção no Photoshop e ajustes no Figma).
- **Estruturação e desenvolvimento do protótipo** – equipe interna, com **apoio técnico do DeepSeek** para organização do código, componentização e ajustes de navegação.
- **COGEP/SEGES** – pela idealização do projeto e diretrizes de usabilidade.

---

## 📌 Observações

- Este repositório contém apenas **front-end estático**.
- Nenhum dado é enviado para servidores – tudo é simulado via JavaScript.
- O projeto foi desenvolvido para ser facilmente adaptável a futuras implementações back-end.

---

## 📄 Licença

Este projeto é de uso interno da Prefeitura de São Paulo – SEGES/COTIC e está disponível para fins de demonstração e prototipagem.

---

Feito com 💙 pela equipe CLIC.

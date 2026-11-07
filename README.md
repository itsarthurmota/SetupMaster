# SetupMaster 

>  O Setup Master é um Sistema Web para Gestão de Ferramental, Padronização e Comparação Inteligente de Setups Industriais.
# SetupMaster - Web (Front-End)

> **Sistema Web para Gestão de Ferramental, Padronização e Comparação Inteligente de Setups Industriais.**



## Equipe de Desenvolvimento

| Integrante | Função / Responsabilidade | GitHub |
| :--- | :--- | :--- |
| **Arthur Mota** | Tech Lead | [@motatur](https://github.com/itsarthurmota) |
| **Guilherme** | Banco de Dados / Database | [@GuilhermeMFerreira](https://github.com/GuilhermeMFerreira) |
| **Iris** | UI/UX Design & Front-End | [@Iris-Caetano](https://github.com/Iris-Caetano) |



O **SetupMaster** é um MVP (Produto Mínimo Viável) desenvolvido para resolver problemas reais de chão de fábrica e usinagem CNC. A plataforma permite o cadastro centralizado de peças e ferramentas automotivas, a gestão preventiva do estoque de insumos e a comparação inteligente de setups entre diferentes produtos para otimizar o tempo de preparação de máquinas.

---

## Funcionalidades do MVP

- [x] **Autenticação & Acesso Corporativo:** Interface segura para login e cadastro de indústrias.
- [x] **Gestão de Ferramental (Estoque):** Controle de fresas, brocas e mandris, com alertas de estoque mínimo e taxa de desgastes/quebras.
- [x] **Cadastro de Peças & Vinculação:** Mapeamento de atributos das peças automotivas e associação com as ferramentas utilizadas em seu processo fabril.
- [x] **Comparador Inteligente de Setups:** Módulo core para seleção de duas peças e cruzamento das listas de ferramentas (exibindo itens em comum, exclusivos de cada peça e facilitando o pré-ajuste).
- [x] **Dashboard de Métricas Fabris:** Indicadores visuais do estado das ferramentas e insumos.

---

## Estrutura do Projeto

O repositório segue a arquitetura padrão para organização de arquivos e estilos:

```text
dvl-web
├── assets
│   ├── css
│   │   ├── base
│   │   │   ├── fonts.css
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── variables.css
│   │   ├── components
│   │   │   ├── benefits.css
│   │   │   ├── buttons.css
│   │   │   ├── cards.css
│   │   │   ├── forms.css
│   │   │   └── modal.css
│   │   ├── layout
│   │   │   ├── footer.css
│   │   │   ├── grid.css
│   │   │   └── header.css
│   │   ├── main.css
│   │   └── pages
│   │       ├── auth.css
│   │       └── home.css
│   ├── fonts
│   │   ├── NotoSans-Italic-VariableFont_wdth,wght.ttf
│   │   ├── NotoSans-VariableFont_wdth,wght.ttf
│   │   └── static/
│   ├── images
│   │   ├── fundo-cnc.png
│   │   ├── icons/
│   └── js
│       ├── components
│       │   └── togglePassword.js
│       ├── main.js
│       ├── pages
│       │   ├── home.js
│       │   ├── login.js
│       │   └── register.js
│       └── utils
│           ├── formatters.js
│           └── validators.js
├── docs
│   └── README.md
├── index.html
├── pages
│   ├── login.html
│   └── register.html
└── README.md

# 📝 Lista de Tarefas - Atividade Individual Angular

Aplicação web de gerenciamento de tarefas desenvolvida em **Angular** como atividade individual prática do Bootcamp Front-End .NET / Angular da **WoMakersCode**.

---

## 🎯 Sobre o Projeto

O objetivo desta aplicação é praticar os conceitos fundamentais da arquitetura Angular:

- **Componentização & Templates HTML**
- **Data Binding:** Interpolação `{{ }}`, Property Binding `[ ]`, Event Binding `( )` e Two-Way Binding `[(ngModel)]`
- **Diretivas Estruturais:** `*ngFor` para repetição de listas
- **Class Binding:** Aplicação dinâmica de estilos visuais (texto riscado em tarefas concluídas)
- **Regras de Negócio & Validação:** Impedir a adição de tarefas vazias e calcular dinamicamente o número de tarefas concluídas

---

## 🛠️ Tecnologias Utilizadas

- **Angular CLI**
- **TypeScript**
- **HTML5 & CSS3**
- **FormsModules** (para comunicação bidirecional com formulários)
- **Git & GitHub**

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **Angular CLI** instalados em sua máquina:

```bash
node -v
npm install -g @angular/cli
```

## Passo a Passo

- Clone este repositório:

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git
```

- Acesse a pasta do projeto:

```bash
cd NOME-DO-SEU-REPOSITORIO
```

- Instale as dependências:

```bash
npm install
```

- Execute o servidor de desenvolvimento:

```bash
ng serve
```

- Acesse no navegador:

```bash
Abra http://localhost:4200/ no navegador para visualizar a aplicação rodando!
```

## Rotina de Branches

main → feature/nome-da-atividade → commit → push → pull request → merge

- feature/atividade-individual-todo
- git checkout -b feature/atividade-individual-todo

## 👩‍💻 Autora

Desenvolvido por Marcia Moreira durante o Bootcamp da comunidade WoMakersCode.

---
---

## Demais Informações do Projeto Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

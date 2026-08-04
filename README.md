# Django React Study

Projeto de estudo para integrar backend em Django com frontend em React/Vite.

## Objetivo

O objetivo deste projeto e praticar a criacao de APIs com Django, Django REST Framework e CORS, enquanto o frontend em React consome essas rotas via Axios.

## Stack

- Backend: Django
- API: Django REST Framework
- CORS: django-cors-headers
- Frontend: React + Vite
- HTTP client: Axios
- Gerenciamento dos scripts: npm + concurrently

## Estrutura do projeto

```text
django-react-study/
│
├── backend/
│
├── frontend/
│
├── scripts/
│
└── package.json
```

## Requisitos

- Python 3.12 ou superior recomendado
- Node.js 20 ou superior recomendado
- npm
- Git

## Instalacao

### 1. Clonar o repositorio

```bash
git clone https://github.com/EngelRyan/django-react-study
cd django-react-study
```

### 2. Configurar o ambiente

O projeto possui scripts automatizados para configurar dependencias, migrations e inicializar as aplicacoes.

Para a primeira execucao, utilize:

```bash
npm run dev:setup
```

Esse comando realiza:

- Instalacao das dependencias do frontend;
- Instalacao das dependencias do backend;
- Aplicacao das migrations existentes;
- Inicializacao do backend Django e frontend React.

## Como rodar o projeto

### Execucao normal

Após o ambiente estar configurado:

```bash
npm run dev
```

Esse comando inicia simultaneamente:

Backend Django:

```text
http://127.0.0.1:8000/
```

Frontend React/Vite:

```text
http://localhost:5173/
```

Os logs das aplicacoes serao identificados no terminal como:

```text
[BACKEND]
[FRONTEND]
```

## Scripts disponiveis

### Iniciar o projeto

```bash
npm run dev
```

Inicia o backend e frontend simultaneamente.

---

### Configurar o projeto e iniciar

```bash
npm run dev:setup
```

Executa o setup completo antes de iniciar as aplicacoes:

- `npm install` do frontend;
- `pip install` das dependencias do backend;
- migrations;
- inicializacao dos servidores.

---

### Rodar migrations e iniciar

```bash
npm run dev:migrate
```

Utilizado quando houver alteracoes nos models do Django.

Executa:

```bash
python manage.py makemigrations
python manage.py migrate
```

e depois inicia o backend e frontend.

---

### Apenas configurar o ambiente

```bash
npm run setup
```

Executa apenas a preparacao do ambiente, sem iniciar os servidores.

## Dependencias instaladas

### Backend

As dependencias principais estao em:

[backend/requirements.txt](backend/requirements.txt)

Principais dependencias:

- Django
- Django REST Framework
- django-cors-headers
- gunicorn

### Frontend

As dependencias principais estao em:

[frontend/package.json](frontend/package.json)

Principais dependencias:

- react
- react-dom
- axios
- vite

### Raiz do projeto

O `package.json` da raiz controla os scripts de execucao.

Dependencia principal:

- concurrently

## Observacao sobre erro do Rolldown

Em alguns ambientes Windows, pode ocorrer um erro relacionado ao `rolldown`, como:

```text
Cannot find native binding
Cannot find module '@rolldown/binding-win32-x64-msvc'
```

Caso isso aconteca, execute dentro da pasta `frontend`:

```bash
npm install @rolldown/binding-win32-x64-msvc --save-dev
```

Depois volte para a raiz do projeto e execute novamente:

```bash
npm run dev
```

## Git basics

### Verificar branch atual

```bash
git branch
```

### Criar e mudar para uma branch nova

```bash
git checkout -b minha-branch
```

### Se ja tiver uma branch apenas

```bash
git checkout minha-branch
```

### Verificar status

```bash
git status
```

### Adicionar arquivos

```bash
git add .
```

### Criar commit

```bash
git commit -m "Minha mensagem de commit"
```

### Enviar a branch para o remoto

```bash
git push -u origin minha-branch
```

### Atualizar a branch com as ultimas mudancas da main

```bash
git checkout minha-branch
git pull origin main
```

### Dicas para nao enviar PR na main

- Sempre faca push da sua branch, nunca da `main`.
- Na hora de abrir o Pull Request, escolha a sua branch como origem.
- A branch de destino deve ser `main`, mas o PR deve partir da sua branch pessoal.

## Fluxo recomendado

1. Atualize a `main` local.
2. Crie uma branch de trabalho.
3. Faca suas alteracoes.
4. Execute `npm run dev` para validar o projeto.
5. Caso altere models Django, execute `npm run dev:migrate`.
6. Faca commit e push da branch.
7. Abra o PR da sua branch para a `main`.

## Observacao sobre CORS

O backend esta preparado para aceitar chamadas do Vite em desenvolvimento nas portas padrao:

- `http://localhost:5173`
- `http://127.0.0.1:5173`
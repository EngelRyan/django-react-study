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

## Estrutura do projeto

```text
backend/
frontend/
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

### 2. Configurar o backend

Crie e ative um ambiente virtual no Windows.

PowerShell:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

CMD:

```cmd
cd backend
python -m venv .venv
.\.venv\Scripts\activate.bat
```

Instale as dependencias do backend:

```bash
pip install -r requirements.txt
```

Aplique as migracoes:

```bash
python manage.py migrate
```

Suba o servidor do Django:

```bash
python manage.py runserver
```

O backend normalmente vai ficar em:

```text
http://127.0.0.1:8000/
```

### 3. Configurar o frontend

Em outro terminal:

```bash
cd frontend
npm install
```

Se quiser instalar apenas a dependencia principal ja usada para chamadas HTTP:

```bash
npm install axios
```

Suba o frontend Vite:

```bash
npm run dev
```

O frontend normalmente vai ficar em:

```text
http://localhost:5173/
```

## Como rodar o projeto completo

1. Inicie o backend com `python manage.py runserver` dentro da pasta `backend`.
2. Inicie o frontend com `npm run dev` dentro da pasta `frontend`.
3. Acesse o frontend no navegador e faça as chamadas para a API do Django.

## Dependencias instaladas

### Backend

As dependencias principais estao em [backend/requirements.txt](backend/requirements.txt).

- Django
- Django REST Framework
- django-cors-headers
- gunicorn

### Frontend

As dependencias principais estao em [frontend/package.json](frontend/package.json).

- react
- react-dom
- axios
- vite

## Git basics

### Verificar branch atual

```bash
git branch
```

### Criar e mudar para uma branch nova

```bash
git checkout -b minha-branch
```

### Se já tiver uma branch apenas

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
3. Faça suas alteracoes.
4. Suba o projeto para validar.
5. Faça commit e push da branch.
6. Abra o PR da sua branch para a `main`.

## Observacao sobre CORS

O backend esta preparado para aceitar chamadas do Vite em desenvolvimento nas portas padrao:

- `http://localhost:5173`
- `http://127.0.0.1:5173`

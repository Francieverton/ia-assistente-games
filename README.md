# 🎮 Game Guide AI - NLW

Este projeto foi desenvolvido durante o evento **NLW** da **Rocketseat**. Trata-se de um assistente inteligente focado em jogos, capaz de responder perguntas sobre estratégias, builds, itens e dicas, utilizando a poderosa API do **Google Gemini**.

## 🚀 Funcionalidades

- **Seleção de Jogo**: Escolha o jogo sobre o qual deseja perguntar.
- **Perguntas Personalizadas**: Faça perguntas específicas sobre mecânicas ou meta atual.
- **Respostas com IA**: Utiliza o modelo `gemini-2.5-flash` para gerar respostas precisas.
- **Busca em Tempo Real**: A IA utiliza a ferramenta de busca do Google (Google Grounding) para trazer informações atualizadas sobre patches recentes.
- **Formatação Markdown**: As respostas são exibidas formatadas (negrito, listas, etc.) para melhor leitura.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização (layout e visual).
- **JavaScript (Vanilla)**: Lógica da aplicação e integração com a API.
- **Google Gemini API**: Inteligência Artificial generativa.
- **Showdown.js**: Biblioteca para converter a resposta da IA (Markdown) em HTML.

## 🔑 Como obter a API Key do Gemini

Para utilizar este projeto, você precisará de uma chave de API gratuita do Google:

1. Acesse o Google AI Studio.
2. Faça login com sua conta Google.
3. Clique em **"Get API key"** no menu lateral esquerdo.
4. Clique em **"Create API key"**.
5. Copie a chave gerada (ela começa com `AIza...`).

## 📦 Como rodar o projeto

### Pré-requisitos
- Um navegador web moderno (Chrome, Firefox, Edge, etc.).
- Uma API Key do Google Gemini.

### Passo a passo

1. **Clone o repositório**:
   Abra seu terminal e execute o comando abaixo:
   ```bash
   git clone https://github.com/seu-usuario/game-guide-nlw.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd game-guide-nlw
   ```

3. **Abra o projeto**:
   Abra o arquivo `index.html` no seu navegador.

## 🕹️ Como usar

1. No campo **"API Key"**, cole a chave que você gerou no Google AI Studio.
2. Selecione o **Jogo** desejado no menu suspenso.
3. Digite sua **pergunta** (ex: "Qual a melhor build para Rengar?").
4. Clique em **"Perguntar"**.
5. Aguarde a IA processar e veja a resposta na tela!

---

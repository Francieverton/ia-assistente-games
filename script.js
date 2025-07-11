const apiKeyInput = document.querySelector('#apiKey')
const gameSelect = document.querySelector('#gameSelect')
const questionInput = document.querySelector('#questionInput')
const askButton = document.querySelector('#askButton')
const aiResponse = document.querySelector('#aiResponse')
const form = document.querySelector('#form')

const markdownToHTML = (text) => {
    const converter = new showdown.Converter()
    return converter.makeHtml(text)
}

const perguntarIA = async (question, game, apiKey) => {
    const model = 'gemini-2.5-flash'
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
    const pergunta = `
    ## Especialidade
    Você é um especialista assistente de meta para o jogo ${game}.

    ## Tarefa
    Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, build e dicas.
    
    ## Regras
    - Se você não sabe a resposta, responda com 'Não sei' e não tente inventar a resposta.
    - Se a pergunta não está relacionada ao jogo, responda com 'Está pergunta não está recionada ao jogo'.
    - Considere a data atual ${new Date().toLocaleDateString()}.
    - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
    - Nunca responda itens que você não tenha certeza de que existe no patch atual.

    ## Resposta
    - Economize na resposta, seja direto e responda no máximo 500 caracteres.
    - Responda em Markdown.
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.

    ## Exemplo de resposta
    pergunta do usuário: melhor build para rengar jungle
    resposta: a melhor e mais atual é: \n\n **Itens**\n itens aqui.\n\n **Runas: **\n\n runas aqui.

    ___
    Pergunta do usuário: ${question}
    `

    const contents = [{
        role: 'user',
        parts: [{
            text: pergunta
        }]
    }]

    const tools = [{
        google_search: {}
    }]

    const response = await fetch(geminiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents,
            tools
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

const enviarFormulario = async (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput.value
    const game = gameSelect.value
    const question = questionInput.value

    if (apiKey == '' || game == '' || question == '') {
        alert('Por favor, preencha todos os campos')
        return
    }

    askButton.disabled = true
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')

    try {
        const text = await perguntarIA(question, game, apiKey)
        aiResponse.querySelector('.response-content').innerHTML = markdownToHTML(text)
        aiResponse.classList.remove('hidden')

    } catch (error) {
        console.log('Erro:', error)
    } finally {
        askButton.disabled = false
        askButton.textContent = 'Perguntar'
        askButton.classList.remove('loading')
    }



}

form.addEventListener('submit', enviarFormulario)
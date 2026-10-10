const form = document.getElementById('cep-form');
const cepInput = document.getElementById('cep-input');
const errorMsg = document.getElementById('error-msg');
const resultSection = document.getElementById('result-section');

const resLogradouro = document.getElementById('res-logradouro');
const resBairro = document.getElementById('res-bairro');
const resCidade = document.getElementById('res-cidade');
const resEstado = document.getElementById('res-estado');

const formatCEP = (value) => {
    return value.replace(/\D/g, '')
                .replace(/^(\d{5})(\d)/, '$1-$2')
                .substring(0, 9);
};

const clearResults = () => {
    resLogradouro.textContent = '--';
    resBairro.textContent = '--';
    resCidade.textContent = '--';
    resEstado.textContent = '--';
    resultSection.classList.add('hidden');
    errorMsg.textContent = '';
};

const showResult = (data) => {
    resLogradouro.textContent = data.logradouro || 'Não informado';
    resBairro.textContent = data.bairro || 'Não informado';
    resCidade.textContent = data.localidade;
    resEstado.textContent = data.uf;
    resultSection.classList.remove('hidden');
};

cepInput.addEventListener('input', (e) => {
    e.target.value = formatCEP(e.target.value);
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const cep = cepInput.value.replace(/\D/g, '');
    clearResults();

    if (cep.length !== 8) {
        errorMsg.textContent = 'Por favor, digite um CEP válido com 8 dígitos.';
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            errorMsg.textContent = 'CEP não encontrado. Verifique o número e tente novamente.';
            return;
        }

        showResult(data);
    } catch (error) {
        errorMsg.textContent = 'Erro ao conectar com a API. Tente novamente mais tarde.';
    }
});
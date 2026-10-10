// ==========================================================================
// SELEÇÃO DE CORES
// ==========================================================================
const colorDots = document.querySelectorAll('.color-dot');
const colorLabel = document.querySelector('.color-label strong');

const colorNames = {
    'gray': 'Space Gray',
    'silver': 'Silver'
};

colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        // Remove active de todos
        colorDots.forEach(d => d.classList.remove('active'));
        // Adiciona active no clicado
        dot.classList.add('active');
        // Atualiza texto
        const colorKey = dot.getAttribute('data-color');
        if(colorNames[colorKey]) {
            colorLabel.textContent = colorNames[colorKey];
        }
    });
});

// ==========================================================================
// CONSULTA DE CEP (VIA API)
// ==========================================================================
const cepInput = document.getElementById('cep');
const ruaInput = document.getElementById('rua');
const bairroInput = document.getElementById('bairro');
const estadoInput = document.getElementById('estado');
const form = document.getElementById('checkout-form');

// Formata o CEP enquanto digita (00000-000)
cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
});

const limparFormularioEndereco = () => {
    ruaInput.value = '';
    bairroInput.value = '';
    estadoInput.value = '';
};

const preencherFormulario = (dados) => {
    ruaInput.value = dados.logradouro || '';
    bairroInput.value = dados.bairro || '';
    estadoInput.value = dados.uf || '';
};

const buscarCep = async (cep) => {
    const cepLimpo = cep.replace(/\D/g, '');
    
    if (cepLimpo.length !== 8) {
        return;
    }

    try {
        // Mostra que está buscando
        ruaInput.value = 'Buscando...';
        
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const dados = await response.json();

        if (dados.erro) {
            limparFormularioEndereco();
            alert('CEP não encontrado.');
            return;
        }

        preencherFormulario(dados);
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        limparFormularioEndereco();
        alert('Erro ao conectar com a API de CEP.');
    }
};

// Dispara a busca quando o usuário sai do campo
cepInput.addEventListener('blur', () => {
    buscarCep(cepInput.value);
});

// Previne o envio real do formulário para demonstração
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulário enviado com sucesso! (Simulação)');
});
function showContent(section) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar a seção correspondente
    const activeSection = document.getElementById(section);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Exibir a seção de Cortes por padrão quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    showContent('cortes');
});



// script.js

// Máscara para CPF
function mascaraCPF(event) {
    let valor = event.target.value;

    // Remove qualquer não número
    valor = valor.replace(/\D/g, "");

    // Adiciona a máscara do CPF (xxx.xxx.xxx-xx)
    valor = valor.replace(/(\d{3})(\d{1,3})$/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,3})$/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    event.target.value = valor;
}

// Máscara para WhatsApp
function mascaraWhatsapp(event) {
    let valor = event.target.value;

    // Remove qualquer não número
    valor = valor.replace(/\D/g, "");

    // Adiciona a máscara para WhatsApp (xx) xxxxx-xxxx
    if (valor.length <= 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})(\d{1,2})$/, "($1) $2-$3");
    }

    event.target.value = valor;
}

// Validação do formulário
function validarFormulario() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let endereco = document.getElementById('endereco').value;
    let whatsapp = document.getElementById('whatsapp').value;

    // Validação simples para verificar se os campos estão preenchidos
    if (!nome || !cpf || !dataNascimento || !endereco || !whatsapp) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Exibir os dados cadastrados
    alert("Cadastro realizado com sucesso!");
    console.log({
        Nome: nome,
        CPF: cpf,
        DataNascimento: dataNascimento,
        Endereco: endereco,
        Whatsapp: whatsapp
    });

    return false; // Evitar que o formulário seja enviado para o servidor (simulação)
}



 <script>
        // Função para alternar a visibilidade do submenu
        function toggleSubMenu() {
            const submenu = document.getElementById('submenu');
            const btnCortes = document.getElementById('btnCortes');
            
            // Verifica se o submenu está visível
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none'; // Recolhe o submenu
            } else {
                submenu.style.display = 'block'; // Expande o submenu
            }

            // Adiciona ou remove a classe 'expanded' para expandir/recolher a sidebar
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('expanded');
        }

        // Função para carregar conteúdo no iframe
        function showContent(contentType) {
            const iframe = document.getElementById('contentIframe');
            let contentHTML = '';

            switch(contentType) {
                case 'clienteCadastrado':
                    contentHTML = `<h2>Cliente Cadastrado</h2><p>Conteúdo do cliente cadastrado.</p>`;
                    break;
                case 'clienteAvulso':
                    contentHTML = `<h2>Cliente Avulso</h2><p>Conteúdo do cliente avulso.</p>`;
                    break;
                case 'produtos':
                    contentHTML = `<h2>Produtos</h2><p>Conteúdo sobre produtos.</p>`;
                    break;
                case 'pagamento':
                    contentHTML = `<h2>Pagamento</h2><p>Conteúdo sobre pagamento.</p>`;
                    break;
            }

            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(contentHTML);
            iframe.contentWindow.document.close();
        }
    </script>


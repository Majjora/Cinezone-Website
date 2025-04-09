/**
 * @file Este arquivo JavaScript contém a lógica para funcionalidades como
 * tradução de textos, controle de formulários de login, registro e recuperação de senha,
 * simulações dessas ações e interações com um painel de detalhes de filmes.
 */

/**
 * @constant {object} filmDescriptions
 * @description Objeto que armazena as traduções das descrições dos filmes
 * para diferentes idiomas. As chaves primárias são os títulos dos filmes
 * (que devem corresponder aos identificadores usados em outras partes do código),
 * e os valores são objetos contendo as traduções para 'pt-br' (português do Brasil)
 * e 'en' (inglês).
 */
const filmDescriptions = {
    'Action': {
        'pt-br': 'Em uma missão de resgate, um ex-soldado se vê em uma corrida contra o tempo para salvar sua filha de um grupo de criminosos implacáveis. Armado e perigoso, ele deve enfrentar traições, explosões e perigos inesperados enquanto luta pela sobrevivência em um cenário tenso e cheio de adrenalina. Cada passo é crucial, e a única chance de vencer é confiar na sua habilidade para escapar do inferno em que se encontra.',
        'en': 'On a rescue mission, a former soldier finds himself racing against time to save his daughter from a group of ruthless criminals. Armed and dangerous, he must face betrayals, explosions, and unexpected dangers while fighting for survival in a tense, adrenaline-filled scenario. Every step is crucial, and the only chance to win is to trust his ability to escape the hell he is in.'
    },
    'Anime': {
        'pt-br': 'Em uma floresta sombria, três amigos se veem em fuga de uma criatura misteriosa e aterrorizante que os persegue incansavelmente. Enquanto correm pela densa vegetação, eles precisam usar suas habilidades e inteligência para escapar das garras do monstro. Mas a amizade e o trabalho em equipe serão essenciais para sobreviver a essa ameaça sobrenatural. Com cada passo, o medo aumenta, e as escolhas deles podem ser a diferença entre a vida e a morte.',
        'en': 'In a dark forest, three friends find themselves fleeing from a mysterious and terrifying creature that relentlessly pursues them. As they run through the dense vegetation, they must use their skills and intelligence to escape the monster\'s grasp. But friendship and teamwork will be essential to survive this supernatural threat. With every step, fear grows, and their choices may mean the difference between life and death.'
    },
    'Stranger': {
        'pt-br': 'Em uma pequena cidade, um grupo de jovens se vê envolvido em um mistério que vai além de qualquer coisa que possam imaginar. Quando acontecimentos inexplicáveis começam a ocorrer, eles unem forças com um policial local para desvendar a verdade. Mas quanto mais se aprofundam, mais perigosas as revelações se tornam, e a linha entre o normal e o sobrenatural começa a desaparecer. Eles conseguirão descobrir o segredo por trás dos eventos antes que seja tarde demais?',
        'en': 'In a small town, a group of teenagers finds themselves caught in a mystery beyond anything they could imagine. As inexplicable events begin to occur, they team up with a local police officer to uncover the truth. But the deeper they go, the more dangerous the revelations become, and the line between the normal and the supernatural begins to blur. Will they be able to uncover the secret behind the events before it\'s too late?'
    },
    'Stardust': {
        'pt-br': 'Em uma missão para explorar os confins do espaço, uma tripulação militar é confrontada com um inimigo desconhecido, uma força alienígena que ameaça destruir tudo o que conhecem. No centro da batalha está uma corajosa comandante, que precisa liderar sua equipe e enfrentar os mistérios do universo para salvar a Terra. Entre traições e batalhas intergalácticas, ela descobre segredos que podem mudar o destino da humanidade. A luta por sobrevivência nunca foi tão intensa.',
        'en': 'On a mission to explore the far reaches of space, a military crew faces an unknown enemy – an alien force threatening to destroy everything they know. At the heart of the battle is a brave commander who must lead her team and confront the mysteries of the universe to save Earth. Amidst betrayals and intergalactic battles, she uncovers secrets that could change the fate of humanity. The fight for survival has never been more intense.'
    },
    'Mystery': {
        'pt-br': 'Quando uma antiga bibliotecária encontra um livro misterioso em seu porão, ela se vê involuntariamente envolvida em uma trama cheia de segredos e conspirações. Com a ajuda de dois investigadores locais, ela começa a desvendar pistas e mistérios, levando a um caso que remonta a décadas. À medida que o enigma se aprofunda, cada resposta traz novas perguntas, e o perigo de revelar a verdade se torna cada vez mais iminente. A chave para resolver o mistério está em suas mãos, mas ela poderá sobreviver a tudo o que irá descobrir?',
        'en': 'When an old librarian finds a mysterious book in her basement, she finds herself inadvertently involved in a plot full of secrets and conspiracies. With the help of two local investigators, she begins to unravel clues and mysteries, leading to a case that spans decades. As the enigma deepens, every answer brings new questions, and the danger of revealing the truth becomes ever more imminent. The key to solving the mystery is in her hands, but will she survive everything she will uncover?'
    }
};

/**
 * @function changeLanguage
 * @description Altera o idioma dos textos da página com base na seleção do usuário.
 * Esta função lê o valor do elemento de seleção de idioma e atualiza o conteúdo
 * de vários elementos HTML (títulos, botões, placeholders, links, etc.) com as
 * traduções correspondentes em português brasileiro ('pt-br') ou inglês ('en').
 * Se um painel de detalhes de filme estiver aberto, sua descrição também será traduzida.
 */
function changeLanguage() {
    // Obtém o valor selecionado no seletor de idioma
    const language = document.getElementById('language').value;

    // Verifica se o idioma selecionado é português brasileiro
    if (language === 'pt-br') {
        document.getElementById('title').textContent = 'Cine Zone - Assista Séries e Filmes'; // Titulo da página
        document.getElementById('login-title').textContent = 'Entrar'; // Título do login
        document.querySelector('.login-container button').textContent = 'Entrar'; // Botão de login
        document.getElementById('username').placeholder = 'Usuário'; // Placeholder do campo usuário
        document.getElementById('password').placeholder = 'Senha'; // Placeholder do campo senha
        document.getElementById('submitButton').textContent = 'Entrar'; // Texto do botão de envio
        document.getElementById('closeButton').textContent = 'Fechar'; // Texto do botão de fechar
        document.getElementById('forgot-password-title').textContent = 'Recuperar Senha'; // Título da recuperação de senha
        document.getElementById('register-link').textContent = 'Registre-se'; // Link para registro
        document.getElementById('forgot-password-link').textContent = 'Recuperar Senha'; // Link para recuperação de senha
        document.getElementById('register-title').textContent = 'Registrar-se'; // Título do registro

        // Tradução dos campos e botões dentro do formulário de registro
        document.getElementById('new-username').placeholder = 'Nome de usuário';
        document.getElementById('new-email').placeholder = 'Email';
        document.getElementById('new-password').placeholder = 'Senha';
        document.getElementById('registerButton').textContent = 'Registrar';
        document.getElementById('closeRegisterButton').textContent = 'Fechar'; // Tradução do botão Fechar no painel de registro

        // Tradução dos campos e botões dentro do formulário de recuperação de senha
        document.getElementById('recover-email').placeholder = 'Digite seu email';
        document.getElementById('recoverButton').textContent = 'Enviar';
        document.getElementById('closeForgotPasswordButton').textContent = 'Fechar';

        // Tradução do campo principal e botão saiba mais
        document.getElementById('saibamaisbutton').textContent = 'Saiba Mais';
        document.getElementById('textprincipal').textContent = 'Quem somos nós?';

        // Tradução do campo secundario
        document.getElementById('textsecond').textContent = 'DESTAQUES';

        // Tradução do campo Footer
        document.getElementById('footer-text').textContent = 'Explore a melhor seleção de filmes, séries desenhos e animes online. A CineZone oferece uma experiência de streaming inovadora com uma vasta biblioteca de títulos.';
        document.getElementById('footer-links-text').textContent = 'Links Rápidos';
        document.getElementById('footer-sobrenos-text').textContent = 'Sobre nós';
        document.getElementById('footer-termos-text').textContent = 'Termos de Uso';
        document.getElementById('footer-politica-text').textContent = 'Política de Privacidade';
        document.getElementById('footer-ajuda-text').textContent = 'Ajuda';
        document.getElementById('footer-social-text').textContent = 'Redes Sociais';
        document.getElementById('newsletter-email').placeholder = 'Digite seu e-mail';
        document.getElementById('inscreva-se-button').textContent = 'Inscrever-se';
        document.getElementById('footer-final-text').textContent = '© 2025 CineZone. Todos os direitos reservados.';

    } else if (language === 'en') {
        // Se o idioma selecionado for inglês
        document.getElementById('title').textContent = 'Cine Zone - Stream Series and Movies';
        document.getElementById('login-title').textContent = 'Login';
        document.querySelector('.login-container button').textContent = 'Login';
        document.getElementById('username').placeholder = 'Username';
        document.getElementById('password').placeholder = 'Password';
        document.getElementById('submitButton').textContent = 'Login';
        document.getElementById('closeButton').textContent = 'Close';
        document.getElementById('forgot-password-title').textContent = 'Recover Password';
        document.getElementById('register-link').textContent = 'Register'; // Link para registro
        document.getElementById('forgot-password-link').textContent = 'Forgot Password'; // Link para recuperação de senha
        document.getElementById('register-title').textContent = 'Register'; // Título do registro

        // Tradução dos campos e botões dentro do formulário de registro
        document.getElementById('new-username').placeholder = 'Username';
        document.getElementById('new-email').placeholder = 'Email';
        document.getElementById('new-password').placeholder = 'Password';
        document.getElementById('registerButton').textContent = 'Register';
        document.getElementById('closeRegisterButton').textContent = 'Close'; // Tradução do botão Fechar no painel de registro

        // Tradução dos campos e botões dentro do formulário de recuperação de senha
        document.getElementById('recover-email').placeholder = 'Enter your email';
        document.getElementById('recoverButton').textContent = 'Send';
        document.getElementById('closeForgotPasswordButton').textContent = 'Close';

        // Tradução do campo principal e botão saiba mais
        document.getElementById('saibamaisbutton').textContent = 'Learn more';
        document.getElementById('textprincipal').textContent = 'Who are we?';

        // Tradução do campo secundario
        document.getElementById('textsecond').textContent = 'HIGHLIGHTS';

        // Tradução do campo Footer
        document.getElementById('footer-text').textContent = 'Explore the best selection of movies, series, cartoons, and animes online. CineZone offers an innovative streaming experience with a vast library of titles.';
        document.getElementById('footer-links-text').textContent = 'Quick Links';
        document.getElementById('footer-sobrenos-text').textContent = 'About Us';
        document.getElementById('footer-termos-text').textContent = 'Terms of Use';
        document.getElementById('footer-politica-text').textContent = 'Privacy Policy';
        document.getElementById('footer-ajuda-text').textContent = 'Help';
        document.getElementById('footer-social-text').textContent = 'Social Media';
        document.getElementById('newsletter-email').placeholder = 'Enter your email';
        document.getElementById('inscreva-se-button').textContent = 'Subscribe';
        document.getElementById('footer-final-text').textContent = '© 2025 CineZone. All rights reserved.';

    }

    // Traduz a descrição do filme no painel, caso ele esteja aberto
    if (window.panelOpen) {
        const currentTitle = document.getElementById('panelTitle').innerText;
        document.getElementById('panelDescription').innerText = filmDescriptions[currentTitle][language];
    }
}

/**
 * @function toggleLoginForm
 * @description Exibe ou oculta o formulário de login, e também garante que os
 * outros formulários (registro e recuperação de senha) estejam ocultos.
 * Utiliza a propriedade 'display' do CSS para controlar a visibilidade e
 * adiciona/remove uma classe para aplicar uma transição visual.
 */
function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    // Fecha outros formulários se estiverem abertos
    if (forgotPasswordForm.style.display === 'block') {
        forgotPasswordForm.style.display = 'none';
    }

    if (registerForm.style.display === 'block') {
        registerForm.style.display = 'none';
    }

    // Alterna a visibilidade do formulário de login
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none'; // Esconde o formulário
    } else {
        loginForm.style.display = 'block'; // Exibe o formulário
        loginForm.classList.toggle('show'); // Adiciona ou remove a classe 'show' para a transição
    }
}

/**
 * @function fakeLogin
 * @description Simula um processo de login. Previne o envio real do formulário,
 * coleta os dados de usuário e senha, e simula uma verificação.
 * Se os campos estiverem preenchidos, redireciona o usuário para outra página
 * após um breve período. Caso contrário, exibe uma mensagem de erro.
 * @param {Event} event O objeto de evento do formulário.
 */
function fakeLogin(event) {
    event.preventDefault(); // Previne o envio do formulário

    console.log("fakeLogin foi chamada!"); // Log para depuração

    // Obtém os valores dos campos de login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se os campos estão preenchidos
    if (username && password) {
        setTimeout(function() {
            window.location.href = "index.html"; // Redireciona após 1 segundo
        }, 1000);
    } else {
        // Exibe a mensagem de erro caso os campos não estejam preenchidos corretamente
        document.getElementById('message').textContent = "Usuário e/ou senha incorretos.";
        document.getElementById('message').style.color = 'red';

        // Limpa a mensagem após 3 segundos
        setTimeout(function() {
            document.getElementById('message').textContent = "";
        }, 3000);
    }
}

/**
 * @function toggleRegisterForm
 * @description Exibe ou oculta o formulário de registro, e também garante que os
 * outros formulários (login e recuperação de senha) estejam ocultos.
 * Utiliza a propriedade 'display' do CSS para controlar a visibilidade e
 * adiciona/remove uma classe para aplicar uma transição visual.
 */
function toggleRegisterForm() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    // Fecha o formulário de login se estiver aberto
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
    }

    // Fecha o formulário de recuperação de senha se estiver aberto
    if (forgotPasswordForm.style.display === 'block') {
        forgotPasswordForm.style.display = 'none';
    }

    // Alterna a visibilidade do formulário de registro
    if (registerForm.style.display === 'block') {
        registerForm.style.display = 'none'; // Esconde o formulário
    } else {
        registerForm.style.display = 'block'; // Exibe o formulário
        registerForm.classList.toggle('show'); // Adiciona ou remove a classe 'show' para a transição
    }
}

/**
 * @function fakeRegister
 * @description Simula um processo de registro de usuário. Previne o envio real do
 * formulário, coleta os dados dos campos de registro e simula uma criação de conta.
 * Se todos os campos estiverem preenchidos, redireciona o usuário para outra página
 * após um breve período. Caso contrário, exibe uma mensagem de erro.
 * @param {Event} event O objeto de evento do formulário.
 */
function fakeRegister(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos de registro
    const newusername = document.getElementById('new-username').value;
    const newemail = document.getElementById('new-email').value;
    const newpassword = document.getElementById('new-password').value;

    // Verifica se os campos estão preenchidos
    if (newusername && newemail && newpassword) {
        setTimeout(function() {
            window.location.href = "index.html"; // Redireciona após 1 segundo
        }, 1000);
    } else {
        // Exibe a mensagem de erro caso os campos não estejam preenchidos corretamente
        document.getElementById('message').textContent = "Preencha todos os campos corretamente.";
        document.getElementById('message').style.color
        document.getElementById('message').style.color = 'red';

        // Limpa a mensagem após 3 segundos
        setTimeout(function() {
            document.getElementById('message').textContent = "";
        }, 3000);
    }
}

/**
 * @function toggleForgotPasswordForm
 * @description Exibe ou oculta o formulário de recuperação de senha, e também
 * garante que os outros formulários (login e registro) estejam ocultos.
 * Utiliza a propriedade 'display' do CSS para controlar a visibilidade e
 * adiciona/remove uma classe para aplicar uma transição visual.
 */
function toggleForgotPasswordForm() {
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Fecha os outros formulários se estiverem abertos
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
    }
    if (registerForm.style.display === 'block') {
        registerForm.style.display = 'none';
    }

    // Alterna a visibilidade do formulário de recuperação de senha
    if (forgotPasswordForm.style.display === 'block') {
        forgotPasswordForm.style.display = 'none'; // Esconde o formulário
    } else {
        forgotPasswordForm.style.display = 'block'; // Exibe o formulário
        forgotPasswordForm.classList.toggle('show'); // Adiciona ou remove a classe 'show' para a transição
    }
}

/**
 * @function fakeRecoverPassword
 * @description Simula o processo de recuperação de senha. Previne o envio real
 * do formulário, coleta o e-mail fornecido e simula o envio de um e-mail de
 * recuperação. Exibe uma mensagem de confirmação e redireciona o usuário
 * para a página inicial após um breve período. Se o campo de e-mail estiver
 * vazio, exibe uma mensagem de erro.
 * @param {Event} event O objeto de evento do formulário.
 */
function fakeRecoverPassword(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém o valor do campo de e-mail para recuperação
    const email = document.getElementById('recover-email').value;

    // Verifica se o campo de e-mail foi preenchido
    if (email) {
        window.scrollTo(0, 0); // Rola a página até o topo

        // Exibe a mensagem de confirmação
        document.getElementById('message').textContent = "E-mail de recuperação enviado!";
        document.getElementById('message').style.color = 'green';

        // Limpa a mensagem após 3 segundos
        setTimeout(function() {
            document.getElementById('message').textContent = "";
        }, 3000);

        // Redireciona após 1 segundo
        setTimeout(function() {
            window.location.href = "index.html"; // Redireciona para a página inicial
        }, 1000);
    } else {
        // Exibe a mensagem de erro caso o campo de e-mail não esteja preenchido
        document.getElementById('message').textContent = "Preencha o e-mail!";
        document.getElementById('message').style.color = 'red';

        // Limpa a mensagem após 3 segundos
        setTimeout(function() {
            document.getElementById('message').textContent = "";
        }, 3000);
    }
}

/**
 * @listens DOMContentLoaded
 * @description Adiciona um ouvinte de evento para o carregamento completo do DOM.
 * Quando o DOM estiver pronto, seleciona o botão "Saiba Mais" e adiciona um
 * ouvinte de evento de clique para redirecionar o usuário para uma página de destino.
 */
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('saibamaisbutton');
    button.addEventListener('click', function() {
        window.location.href = 'about-us.html';
    });
});

/**
 * @function openDetailPanel
 * @description Exibe o painel de detalhes de um filme. Define o título do painel
 * com base no argumento fornecido e exibe a descrição do filme no idioma atualmente
 * selecionado. Também define uma variável global para indicar que o painel está aberto.
 * @param {string} title O título do filme para exibir os detalhes.
 */
function openDetailPanel(title) {
    // Exibe o painel
    document.getElementById('detailPanel').style.display = 'flex';
    window.panelOpen = true; // Marca que o painel foi aberto

    // Define o título do painel
    document.getElementById('panelTitle').innerText = title;

    // Exibe a descrição no painel (traduzida de acordo com o idioma atual)
    const language = document.getElementById('language').value;
    document.getElementById('panelDescription').innerText = filmDescriptions[title][language];
}

/**
 * @listens click
 * @description Adiciona um ouvinte de evento de clique ao botão de fechar do
 * painel de detalhes. Quando clicado, oculta o painel e atualiza a variável
 * global para indicar que o painel foi fechado.
 */
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('detailPanel').style.display = 'none';
    window.panelOpen = false; // Marca que o painel foi fechado
});

/**
 * @listens DOMContentLoaded
 * @description Adiciona um ouvinte de evento para o carregamento completo do DOM.
 * Quando o DOM estiver pronto, seleciona o botão de inscrição (usando sua classe)
 * e adiciona um ouvinte de evento de clique para redirecionar o usuário para a
 * página inicial (ou outra página desejada).
 */
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão usando a classe
    const botaoInscrevaSe = document.querySelector(".inscreva-se-button");

    // Adiciona o evento de clique no botão
    botaoInscrevaSe.addEventListener("click", function() {
        // Redireciona para a página inicial ou para a página que você quiser
        window.location.href = "index.html"; // Mude "index.html" para o URL desejado
    });
});
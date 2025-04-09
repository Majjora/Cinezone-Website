// Função responsável por alterar o conteúdo da página conforme o idioma selecionado
function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === 'pt-br') {
        // Atualiza os textos para o idioma Português (Brasil)
        document.getElementById('title').textContent = 'CineZone - Ajuda';
        document.getElementById('titulo-text').textContent = 'Ajuda';

        document.getElementById('titulo-principal').textContent = 'Ajuda';
        document.getElementById("text-1").textContent = "Se você está com dúvidas sobre como usar o site, fique tranquilo! Abaixo explicamos cada";
        document.getElementById("text-2").textContent = "funcionalidade para facilitar sua navegação:";
        document.getElementById("text-3").textContent = "Login, Registro e Recuperação de Senha";
        document.getElementById("text-4").innerHTML = "<b>Como fazer login</b>";
        document.getElementById("text-5").innerHTML = "Vá até a área de <b>Login</b> na página inicial.";
        document.getElementById("text-6").textContent = "Digite seu nome de usuário e senha.";
        document.getElementById("text-7").innerHTML = "Clique em <b>Entrar</b>.";
        document.getElementById("text-8").textContent = "Se os dados estiverem corretos, você será redirecionado para a área principal do site.";
        document.getElementById("text-9").innerHTML = "<b>Como se registrar</b>";
        document.getElementById("text-10").innerHTML = "Clique no botão <b>Registrar.</b>";
        document.getElementById("text-11").innerHTML = "Preencha os campos de <b>nome de usuário, e-mail e senha.</b>";
        document.getElementById("text-12").innerHTML = "Clique em <b>Criar Conta.</b>";
        document.getElementById("text-13").textContent = "Se tudo estiver preenchido corretamente, você será redirecionado para a próxima página após alguns";
        document.getElementById("text-14").textContent = "segundos.";
        document.getElementById("text-15").innerHTML = "<b>Problemas para acessar sua conta?</b>";
        document.getElementById("text-16").innerHTML = "Clique em <b>Esqueci minha senha.</b>";
        document.getElementById("text-17").textContent = "Digite o e-mail usado no cadastro.";
        document.getElementById("text-18").textContent = "Você verá uma mensagem de confirmação de envio do e-mail de recuperação.";
        document.getElementById("text-19").textContent = "Após alguns segundos, será redirecionado para a página inicial.";
        document.getElementById("text-20").textContent = "Painel de Detalhes dos Filmes";
        document.getElementById("text-21").textContent = "Ao navegar pelo catálogo, você pode clicar em um filme para ver mais detalhes. Um painel lateral se";
        document.getElementById("text-22").textContent = "abrirá com:";
        document.getElementById("text-23").innerHTML = "O <b>título do filme</b>";
        document.getElementById("text-24").innerHTML = "Uma <b>descrição</b> no idioma selecionado";
        document.getElementById("text-25").innerHTML = "Para fechar o painel, clique no <b>botão de fechar (X)</b> no canto superior direito.";
        document.getElementById("text-26").textContent = "Idiomas";
        document.getElementById("text-27").textContent = "Nosso site oferece suporte a vários idiomas. Basta selecionar seu idioma preferido no canto superior da";
        document.getElementById("text-28").textContent = "página para ver todas as informações traduzidas automaticamente.";
        document.getElementById("text-29").textContent = "Ainda com dúvidas?";
        document.getElementById("text-30").innerHTML = "Se você tiver algum problema ou sugestão, entre em contato conosco pela página de <b>Contato</b> ou envie";
        document.getElementById("text-31").textContent = "um e-mail para:";
        document.getElementById("text-32").textContent = "suporte@cinezone.com";

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
        // Atualiza os textos para o idioma Inglês
        document.getElementById('title').textContent = 'CineZone - Help';   
        document.getElementById('titulo-text').textContent = 'Help';

        document.getElementById('titulo-principal').textContent = 'Help';
        document.getElementById("text-1").textContent = "If you're unsure how to use the site, don't worry! Below we explain each";
        document.getElementById("text-2").textContent = "feature to make your navigation easier:";
        document.getElementById("text-3").textContent = "Login, Registration and Password Recovery";
        document.getElementById("text-4").innerHTML = "<b>How to log in</b>";
        document.getElementById("text-5").innerHTML = "Go to the <b>Login</b> section on the homepage.";
        document.getElementById("text-6").textContent = "Enter your username and password.";
        document.getElementById("text-7").innerHTML = "Click on <b>Login</b>.";
        document.getElementById("text-8").textContent = "If the data is correct, you will be redirected to the main area of the site.";
        document.getElementById("text-9").innerHTML = "<b>How to register</b>";
        document.getElementById("text-10").innerHTML = "Click the <b>Register</b> button.";
        document.getElementById("text-11").innerHTML = "Fill in the <b>username, email, and password</b> fields.";
        document.getElementById("text-12").innerHTML = "Click on <b>Create Account</b>.";
        document.getElementById("text-13").textContent = "If everything is filled in correctly, you will be redirected to the next page after a few";
        document.getElementById("text-14").textContent = "seconds.";
        document.getElementById("text-15").innerHTML = "<b>Having trouble accessing your account?</b>";
        document.getElementById("text-16").innerHTML = "Click on <b>Forgot my password</b>.";
        document.getElementById("text-17").textContent = "Enter the email used during registration.";
        document.getElementById("text-18").textContent = "You will see a confirmation message that the recovery email has been sent.";
        document.getElementById("text-19").textContent = "After a few seconds, you will be redirected to the homepage.";
        document.getElementById("text-20").textContent = "Movie Details Panel";
        document.getElementById("text-21").textContent = "While browsing the catalog, you can click on a movie to see more details. A side panel will";
        document.getElementById("text-22").textContent = "open with:";
        document.getElementById("text-23").innerHTML = "The <b>movie title</b>";
        document.getElementById("text-24").innerHTML = "A <b>description</b> in the selected language";
        document.getElementById("text-25").innerHTML = "To close the panel, click the <b>close button (X)</b> in the top-right corner.";
        document.getElementById("text-26").textContent = "Languages";
        document.getElementById("text-27").textContent = "Our site supports multiple languages. Just select your preferred language at the top of the";
        document.getElementById("text-28").textContent = "page to see all information automatically translated.";
        document.getElementById("text-29").textContent = "Still have questions?";
        document.getElementById("text-30").innerHTML = "If you have any problems or suggestions, contact us through the <b>Contact</b> page or send";
        document.getElementById("text-31").textContent = "an email to:";
        document.getElementById("text-32").textContent = "support@cinezone.com";

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
}

// Evento que aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão usando a classe
    const botaoInscrevaSe = document.querySelector(".inscreva-se-button");

    // Adiciona o evento de clique no botão
    botaoInscrevaSe.addEventListener("click", function() {
        // Redireciona para a página que está
        window.location.href = "help.html";
    });
});

// Função responsável por alterar o conteúdo da página conforme o idioma selecionado
function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === 'pt-br') {
        // Atualiza os textos para o idioma Português (Brasil)
        document.getElementById('title').textContent = 'CineZone - Política de Privacidade';
        document.getElementById('titulo-text').textContent = 'Política de Privacidade';

        document.getElementById('titulo-principal').textContent = 'Política de Privacidade';
        document.getElementById('text-1').textContent = 'Na CineZone, levamos a sua privacidade a sério. Esta política explica como coletamos, usamos e';
        document.getElementById('text-2').textContent = 'protegemos seus dados.';
        document.getElementById('text-3').textContent = 'Ao utilizar nossos serviços, você concorda com a coleta e uso das informações conforme esta política.';
        document.getElementById('text-4').textContent = 'Não vendemos, trocamos ou transferimos seus dados pessoais para terceiros não autorizados.';
        document.getElementById('text-5').textContent = 'As informações são usadas para melhorar nossos serviços, personalizar sua experiência e garantir';
        document.getElementById('text-6').textContent = 'segurança.';
        document.getElementById('text-7').textContent = 'Utilizamos cookies para armazenar preferências e fornecer conteúdo relevante.';
        document.getElementById('text-8').textContent = 'Você pode desativar os cookies nas configurações do seu navegador.';
        document.getElementById('text-9').textContent = 'Adotamos medidas de segurança para proteger suas informações pessoais contra acessos não';
        document.getElementById('text-10').textContent = 'autorizados.';
        document.getElementById('text-11').textContent = 'Esta política pode ser atualizada. Em caso de mudanças significativas, notificaremos você.';
        document.getElementById('text-12').textContent = 'Para dúvidas, entre em contato: privacidade@cinezone.com.br';

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
        document.getElementById('title').textContent = 'CineZone - Privacy Policy';   
        document.getElementById('titulo-text').textContent = 'Privacy Policy';

        document.getElementById('titulo-principal').textContent = 'Privacy Policy';
        document.getElementById('text-1').textContent = 'At CineZone, we take your privacy seriously. This policy explains how we collect, use, and';
        document.getElementById('text-2').textContent = 'protect your data.';
        document.getElementById('text-3').textContent = 'By using our services, you agree to the collection and use of your information as described in this policy.';
        document.getElementById('text-4').textContent = 'We do not sell, trade, or transfer your personal data to unauthorized third parties.';
        document.getElementById('text-5').textContent = 'Information is used to improve our services, personalize your experience, and ensure';
        document.getElementById('text-6').textContent = 'security.';
        document.getElementById('text-7').textContent = 'We use cookies to store preferences and deliver relevant content.';
        document.getElementById('text-8').textContent = 'You can disable cookies in your browser settings.';
        document.getElementById('text-9').textContent = 'We take security measures to protect your personal information from unauthorized';
        document.getElementById('text-10').textContent = 'access.';
        document.getElementById('text-11').textContent = 'This policy may be updated. In case of significant changes, we will notify you.';
        document.getElementById('text-12').textContent = 'For questions, contact us at: privacy@cinezone.com.br';

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
        window.location.href = "privacy-policy.html";
    });
});

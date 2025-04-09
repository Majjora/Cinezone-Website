// Função responsável por alterar o conteúdo da página conforme o idioma selecionado
function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === 'pt-br') {
        // Atualiza os textos para o idioma Português (Brasil)
        document.getElementById('title').textContent = 'CineZone - Sobre nós';
        document.getElementById('titulo-text').textContent = 'Sobre nós';

        document.getElementById('titulo-principal').textContent = 'Sobre nós';
        document.getElementById('text-1').textContent = 'Bem-vindo à CineZone, sua plataforma de streaming definitiva, onde o melhor do entretenimento está';
        document.getElementById('text-2').innerHTML = 'ao seu alcance. Na <b>CineZone</b>, oferecemos uma experiência única, trazendo filmes, séries e conteúdos';
        document.getElementById('text-3').textContent = 'exclusivos para você assistir onde e quando quiser.';
        document.getElementById('text-4').textContent = 'Somos apaixonados por conectar você ao que há de melhor no mundo do entretenimento. Da ação';
        document.getElementById('text-5').textContent = 'intensa aos dramas emocionantes, das comédias inesquecíveis aos documentários reveladores, temos';
        document.getElementById('text-6').textContent = 'tudo o que você precisa para uma experiência de streaming completa e envolvente.';
        document.getElementById('text-7').innerHTML = 'Com a <b>CineZone</b>, você tem acesso a:';
        document.getElementById('text-8').innerHTML = '<b>Conteúdo Exclusivo:</b> Produções originais e títulos exclusivos, criados especialmente para nossos assinantes.';
        document.getElementById('text-9').innerHTML = '<b>Uma Biblioteca Completa:</b> Milhares de filmes e séries de todos os gêneros, prontos para serem explorados por você e sua família.';
        document.getElementById('text-10').innerHTML = '<b>Acessibilidade em Todos os Dispositivos:</b> Assista a qualquer hora e em qualquer lugar – no celular, tablet, computador ou smart TV.';
        document.getElementById('text-11').innerHTML = '<b>Qualidade Superior:</b> Transmissão em 4K, HDR e Dolby Atmos para uma experiência visual e sonora incomparável.';
        document.getElementById('text-12').innerHTML = 'Na <b>CineZone</b>, estamos sempre trabalhando para oferecer o melhor conteúdo e a melhor experiência';
        document.getElementById('text-13').textContent = 'para você. Com novos lançamentos e produções exclusivas chegando regularmente, você nunca vai ficar';
        document.getElementById('text-14').textContent = 'sem opções de entretenimento.';
        document.getElementById('text-15').innerHTML = '<b>Assine agora e descubra um mundo de filmes e séries – tudo ao alcance de um clique, só na</b>';

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
        document.getElementById('title').textContent = 'CineZone - About us';   
        document.getElementById('titulo-text').textContent = 'About us';

        document.getElementById('titulo-principal').textContent = 'About us';
        document.getElementById('text-1').textContent = 'Welcome to CineZone, your ultimate streaming platform, where the best in entertainment is';
        document.getElementById('text-2').innerHTML = 'within your reach. At <b>CineZone</b>, we offer a unique experience, bringing you movies, series, and';
        document.getElementById('text-3').textContent = 'exclusive content to watch anytime, anywhere.';
        document.getElementById('text-4').textContent = 'We are passionate about connecting you to the very best in the world of entertainment. From intense';
        document.getElementById('text-5').textContent = 'action to emotional dramas, from unforgettable comedies to eye-opening documentaries, we have';
        document.getElementById('text-6').textContent = 'everything you need for a complete and immersive streaming experience.';
        document.getElementById('text-7').innerHTML = 'With <b>CineZone</b>, you have access to:';
        document.getElementById('text-8').innerHTML = '<b>Exclusive Content:</b> Original productions and exclusive titles, created especially for our subscribers.';
        document.getElementById('text-9').innerHTML = '<b>A Complete Library:</b> Thousands of movies and series of all genres, ready to be explored by you and your family.';
        document.getElementById('text-10').innerHTML = '<b>Accessibility on All Devices:</b> Watch anytime and anywhere – on your phone, tablet, computer, or smart TV.';
        document.getElementById('text-11').innerHTML = '<b>Superior Quality:</b> 4K, HDR, and Dolby Atmos streaming for an unparalleled visual and sound experience.';
        document.getElementById('text-12').innerHTML = 'At <b>CineZone</b>, we are always working to deliver the best content and the best experience';
        document.getElementById('text-13').textContent = 'for you. With new releases and exclusive productions arriving regularly, you\'ll never run out';
        document.getElementById('text-14').textContent = 'of entertainment options.';
        document.getElementById('text-15').innerHTML = '<b>Subscribe now and discover a world of movies and series – all just a click away, only on</b>';

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
        window.location.href = "about-us.html";
    });
});

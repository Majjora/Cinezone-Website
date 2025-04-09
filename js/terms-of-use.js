// Função responsável por alterar o conteúdo da página conforme o idioma selecionado
function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === 'pt-br') {
        // Atualiza os textos para o idioma Português (Brasil)
        document.getElementById('title').textContent = 'CineZone - Termos de uso';
        document.getElementById('titulo-text').textContent = 'Termos de uso';

        document.getElementById('titulo-principal').textContent = 'Termos de uso';
        document.getElementById('text-1').innerHTML = 'Bem-vindo à <b>CineZone</b>, a sua plataforma de streaming de filmes, séries e conteúdos exclusivos. Ao';
        document.getElementById('text-2').innerHTML = 'acessar ou utilizar nossos serviços, você concorda com os presentes Termos de Uso. Por favor, leia com';
        document.getElementById('text-3').textContent = 'atenção.';

        document.getElementById('text-4').textContent = '1. Aceitação dos Termos';

        document.getElementById('text-5').innerHTML = 'Ao se cadastrar, acessar ou utilizar a plataforma <b>CineZone</b>, você declara que leu, entendeu e concorda';
        document.getElementById('text-6').textContent = 'com estes Termos de Uso, bem como com nossa [Política de Privacidade].';
        document.getElementById('text-7').textContent = 'Se você não concordar com qualquer parte dos termos, não utilize nossos serviços.';

        document.getElementById('text-8').textContent = '2. Descrição do Serviço';

        document.getElementById('text-9').textContent = 'A CineZone oferece acesso a conteúdos audiovisuais sob demanda, como filmes, séries, documentários';
        document.getElementById('text-10').textContent = 'e produções originais, por meio de assinatura mensal, trimestral ou anual, conforme plano contratado.';
        document.getElementById('text-11').textContent = 'O conteúdo está disponível por streaming e pode ser acessado em múltiplos dispositivos compatíveis,';
        document.getElementById('text-12').textContent = 'como computadores, tablets, smartphones e smart TVs.';

        document.getElementById('text-13').textContent = '3. Cadastro e Conta do Usuário';

        document.getElementById('text-14').textContent = 'Para acessar o serviço, você deve criar uma conta, fornecendo informações verídicas, atualizadas e completas.';
        document.getElementById('text-15').textContent = 'Você é responsável por manter a confidencialidade da sua senha e por todas as atividades que ocorram na sua conta.';
        document.getElementById('text-16').textContent = 'Não é permitido compartilhar sua conta com terceiros não autorizados.';

        document.getElementById('text-17').textContent = '4. Assinaturas e Pagamentos';

        document.getElementById('text-18').innerHTML = 'O serviço <b>CineZone</b> funciona por meio de planos de assinatura.';
        document.getElementById('text-19').textContent = 'A cobrança será feita de forma recorrente (mensal, trimestral ou anual) com base no plano escolhido.';
        document.getElementById('text-20').textContent = 'Os valores estão sujeitos a reajustes mediante aviso prévio.';
        document.getElementById('text-21').textContent = 'O não pagamento implicará na suspensão ou cancelamento automático da conta.';

        document.getElementById('text-22').textContent = '5. Cancelamento e Reembolso';

        document.getElementById('text-23').textContent = 'Você pode cancelar sua assinatura a qualquer momento na área de configurações da conta.';
        document.getElementById('text-24').textContent = 'Pagamentos já realizados não são reembolsáveis, exceto em casos previstos em lei ou falhas do serviço.';

        document.getElementById('text-25').textContent = '6. Propriedade Intelectual';

        document.getElementById('text-26').innerHTML = 'Todos os conteúdos disponibilizados pela <b>CineZone</b> (vídeos, marcas, logotipos, design, etc.) são protegidos por leis de propriedade intelectual.';
        document.getElementById('text-27').textContent = 'É proibido copiar, reproduzir, distribuir ou exibir publicamente qualquer conteúdo sem autorização prévia.';

        document.getElementById('text-28').textContent = '7. Uso Indevido';
        document.getElementById('text-29').textContent = 'É proibido:';
        document.getElementById('text-30').textContent = 'Utilizar o serviço para fins ilegais ou não autorizados;';
        document.getElementById('text-31').textContent = 'Tentar burlar mecanismos de proteção ou restrição de acesso;';
        document.getElementById('text-32').textContent = 'Compartilhar, redistribuir ou gravar o conteúdo para terceiros;';
        document.getElementById('text-33').textContent = 'Utilizar automações ou scripts para acessar ou extrair dados do serviço.';

        document.getElementById('text-34').textContent = '8. Alterações no Serviço e nos Termos';

        document.getElementById('text-35').innerHTML = 'A <b>CineZone</b> poderá alterar ou descontinuar partes do serviço a qualquer momento, bem como atualizar';
        document.getElementById('text-36').textContent = 'estes Termos de Uso.';
        document.getElementById('text-37').textContent = 'Caso mudanças significativas ocorram, você será informado com antecedência. O uso contínuo do';
        document.getElementById('text-38').textContent = 'serviço após as alterações será interpretado como concordância.';

        document.getElementById('text-39').textContent = '9. Limitação de Responsabilidade';

        document.getElementById('text-40').innerHTML = 'A <b>CineZone</b> não será responsável por:';
        document.getElementById('text-41').textContent = 'Interrupções ou falhas temporárias no serviço;';
        document.getElementById('text-42').textContent = 'Danos decorrentes de uso indevido ou não autorizado;';
        document.getElementById('text-43').textContent = 'Incompatibilidade com dispositivos ou conexões de internet do usuário.';

        document.getElementById('text-44').textContent = '10. Legislação Aplicável';

        document.getElementById('text-45').textContent = 'Estes Termos são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas no foro da comarca';
        document.getElementById('text-46').textContent = 'de Curitiba, Paraná, salvo disposição em contrário.';

        document.getElementById('text-47').textContent = '11. Contato';

        document.getElementById('text-48').textContent = 'Se tiver dúvidas, sugestões ou precisar de suporte, entre em contato pelo e-mail:';
        document.getElementById('text-49').textContent = 'suporte@cinezone.com.br';

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
        document.getElementById('title').textContent = 'CineZone - Terms of use';   
        document.getElementById('titulo-text').textContent = 'Terms of use';

        document.getElementById('titulo-principal').textContent = 'Terms of use';
        document.getElementById('text-1').innerHTML = 'Welcome to <b>CineZone</b>, your streaming platform for movies, series, and exclusive content. By';
        document.getElementById('text-2').innerHTML = 'accessing or using our services, you agree to these Terms of Use. Please read them';
        document.getElementById('text-3').textContent = 'carefully.';

        document.getElementById('text-4').textContent = '1. Acceptance of Terms';

        document.getElementById('text-5').innerHTML = 'By registering, accessing or using the <b>CineZone</b> platform, you declare that you have read, understood and agree';
        document.getElementById('text-6').textContent = 'to these Terms of Use, as well as to our [Privacy Policy].';
        document.getElementById('text-7').textContent = 'If you do not agree with any part of the terms, do not use our services.';

        document.getElementById('text-8').textContent = '2. Service Description';

        document.getElementById('text-9').textContent = 'CineZone offers on-demand access to audiovisual content such as movies, series, documentaries';
        document.getElementById('text-10').textContent = 'and original productions, through a monthly, quarterly or yearly subscription, depending on the chosen plan.';
        document.getElementById('text-11').textContent = 'Content is available via streaming and can be accessed on multiple compatible devices,';
        document.getElementById('text-12').textContent = 'such as computers, tablets, smartphones, and smart TVs.';

        document.getElementById('text-13').textContent = '3. User Registration and Account';

        document.getElementById('text-14').textContent = 'To access the service, you must create an account with truthful, up-to-date and complete information.';
        document.getElementById('text-15').textContent = 'You are responsible for maintaining the confidentiality of your password and all activities under your account.';
        document.getElementById('text-16').textContent = 'You are not allowed to share your account with unauthorized third parties.';

        document.getElementById('text-17').textContent = '4. Subscriptions and Payments';

        document.getElementById('text-18').innerHTML = 'The <b>CineZone</b> service operates through subscription plans.';
        document.getElementById('text-19').textContent = 'Billing will be recurring (monthly, quarterly or yearly) based on the chosen plan.';
        document.getElementById('text-20').textContent = 'Prices are subject to adjustment with prior notice.';
        document.getElementById('text-21').textContent = 'Non-payment will result in suspension or automatic cancellation of the account.';

        document.getElementById('text-22').textContent = '5. Cancellation and Refund';

        document.getElementById('text-23').textContent = 'You can cancel your subscription at any time in the account settings area.';
        document.getElementById('text-24').textContent = 'Payments already made are non-refundable, except as required by law or service failure.';

        document.getElementById('text-25').textContent = '6. Intellectual Property';

        document.getElementById('text-26').innerHTML = 'All content provided by <b>CineZone</b> (videos, trademarks, logos, design, etc.) is protected by intellectual property laws.';
        document.getElementById('text-27').textContent = 'It is forbidden to copy, reproduce, distribute or publicly display any content without prior authorization.';

        document.getElementById('text-28').textContent = '7. Misuse';
        document.getElementById('text-29').textContent = 'It is prohibited to:';
        document.getElementById('text-30').textContent = 'Use the service for illegal or unauthorized purposes;';
        document.getElementById('text-31').textContent = 'Attempt to bypass protection or access restriction mechanisms;';
        document.getElementById('text-32').textContent = 'Share, redistribute or record the content for third parties;';
        document.getElementById('text-33').textContent = 'Use automations or scripts to access or extract service data.';

        document.getElementById('text-34').textContent = '8. Service and Terms Changes';

        document.getElementById('text-35').innerHTML = '<b>CineZone</b> may change or discontinue parts of the service at any time, as well as update';
        document.getElementById('text-36').textContent = 'these Terms of Use.';
        document.getElementById('text-37').textContent = 'If significant changes occur, you will be notified in advance. Continued use of';
        document.getElementById('text-38').textContent = 'the service after changes will be interpreted as agreement.';

        document.getElementById('text-39').textContent = '9. Limitation of Liability';

        document.getElementById('text-40').innerHTML = '<b>CineZone</b> will not be responsible for:';
        document.getElementById('text-41').textContent = 'Temporary interruptions or service failures;';
        document.getElementById('text-42').textContent = 'Damages resulting from misuse or unauthorized use;';
        document.getElementById('text-43').textContent = 'Incompatibility with user devices or internet connections.';

        document.getElementById('text-44').textContent = '10. Applicable Law';

        document.getElementById('text-45').textContent = 'These Terms are governed by Brazilian law. Any disputes will be resolved in the court of the';
        document.getElementById('text-46').textContent = 'Curitiba district, Paraná, unless otherwise provided.';

        document.getElementById('text-47').textContent = '11. Contact';

        document.getElementById('text-48').textContent = 'If you have any questions, suggestions, or need support, contact us at:';
        document.getElementById('text-49').textContent = 'suporte@cinezone.com.br';
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
        window.location.href = "terms-of-use.html";
    });
});

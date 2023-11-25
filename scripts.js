
document.querySelector('.letter').addEventListener('click', () => {
    document.querySelector('.paper').style.opacity = 1;
    document.querySelector('.paper').style.visibility = 'visible';
});

// Função para enviar e-mail
const enviarEmail = () => {
    // Substitua 'your_service_id' e 'your_template_id' pelos valores fornecidos pelo EmailJS após o registro
    const serviceID = 'service_fuvkio9';
    const templateID = 'template_snjqjom';
    const publicKeyCredential = 'EnsXAQ5cnAjaaqdcG'

    // Substitua os valores do e-mail conforme necessário
    const emailParams = {
        to_email: 'keetilyn.eduardaa@gmail.com', // substitua pelo endereço de e-mail do destinatário
        subject: 'Assunto do E-mail',
        text: 'Corpo do E-mail',
    };

    emailjs.send(serviceID, templateID, emailParams, publicKeyCredential)
        .then((response) => {
            console.log('E-mail enviado:', response);
        })
        .catch((error) => {
            console.error('Erro ao enviar e-mail:', error);
        });
};

// Chame a função enviarEmail quando o botão for clicado
document.getElementById('acceptButton').addEventListener('click', enviarEmail);

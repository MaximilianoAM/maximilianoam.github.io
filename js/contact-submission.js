document.addEventListener("DOMContentLoaded", async function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {

            // TODO: Implement actual submission logic here

            let firstName = data.name.split(' ')[0];

            let message = 'Obrigado por entrar em contato ' + firstName + '!'
                + '\n\n Em breve responderei sua mensagem no seu email "' + data.email + '".';

            alert(message);
            form.reset();

        } catch (error) {
            console.error('Error while submitting form:', error);
            alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
        }
    });
});
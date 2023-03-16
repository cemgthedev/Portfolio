import emailjs from '@emailjs/browser';

export function sendMessage(e: any) {
    e.preventDefault();

    emailjs.sendForm('service_pz36v8n', 'template_071i4ym', e.target, 'rF28mQHvZFEJCddkr')
      .then((result) => {
          window.alert("Obrigado pelo seu feedback 😉");
      }, (error) => {
          window.alert("Não foi possível enviar feedback. Contate diretamente.")
    });

    e.target.reset();
} 
import emailjs from '@emailjs/browser';
import env from "react-dotenv";

export function sendMessage(e: any) {
    e.preventDefault();

    emailjs.sendForm(env.SERVICEID, env.TEMPLATEID, e.target, env.PUBLICKEY)
      .then((result) => {
          window.alert("Obrigado pelo seu feedback 😉");
      }, (error) => {
          window.alert("Não foi possível enviar feedback. Contate diretamente.")
    });

    e.target.reset();
} 
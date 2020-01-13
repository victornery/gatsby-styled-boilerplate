/**
 * @constant recaptchaId
 * @description Essa é a ID do Recaptcha solicitado pelo Back-end da Aplicação, necessária pela 
 * API de Sumário da aplicação.
 */

import { recaptchaId } from "../data/settings.json";

/**
 * @function generateRecaptchaToken
 * @description Intuitivamente, trata-se de uma Promise que retorna o novo Token necessário para o Recaptcha
 * do Google.
 */

export const generateRecaptchaToken = async () =>
  new Promise(res =>
    grecaptcha.ready(() => {
      grecaptcha
        .execute(recaptchaId, { action: "ACTION_RECAPTCHA" })
        .then(token => res(token));
    })
  );

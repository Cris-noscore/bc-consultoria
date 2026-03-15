/**
 * lib/constants.ts
 * Constantes e configurações globais da BC Consultoria
 */

export const WHATSAPP_NUMBER = "5511913535562";
export const WHATSAPP_DISPLAY = "(11) 91353-5562";
export const PHONE_DISPLAY = "(11) 4195-6733";
export const EMAIL_CONTACT = "contato@businesscenterconsult.com.br";
export const EMAIL_CEO = "silvio.silveira@businesscenterconsult.com.br";
export const SITE_URL = "https://businesscenterconsult.com.br";
export const COMPANY_NAME = "BC Consultoria";
export const CNPJ = "04.355.961/0001-70";
export const ADDRESS = "Alameda Mamoré, 503 - Conj. 64, 6º Andar - Edifício Icon, Alphaville - Barueri/SP";
export const CEP = "06454-040";

/** Mensagens pré-definidas para WhatsApp por tipo de serviço */
export const WHATSAPP_MESSAGES: Record<string, string> = {
  financeiro:
    "Olá! Gostaria de saber mais sobre os serviços de *Intermediação Financeira* da BC Consultoria. Pode me ajudar?",
  regulatorio:
    "Olá! Tenho interesse nos serviços *Regulatórios* da BC Consultoria. Pode me dar mais informações?",
  regularizacao:
    "Olá! Preciso de ajuda com *Regularização* (AVCB, licenças ambientais). A BC Consultoria pode me atender?",
  consultor:
    "Olá! Gostaria de falar com um *Consultor Especialista* da BC Consultoria. Podem me ajudar?",
  default:
    "Olá! Gostaria de saber mais sobre os serviços da BC Consultoria.",
};

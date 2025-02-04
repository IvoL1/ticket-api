import { Request, Response, NextFunction } from 'express';

export const validateTicket = (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  console.log('requisição recebida!');
  nex();
};

/*
1.Validação de Tipo de Dados:
Garantir que os dados passados no corpo da requisição (em caso de POST, PUT) estejam no formato correto (ex: texto para descrição, número para prioridade, etc.).

2.Validação de Campos Obrigatórios:
Verificar se campos obrigatórios, como título, descrição, ou data de vencimento (caso existam), estão presentes e não vazios.

3.Validação de Tamanho ou Formato de Campo:
Verificar se campos como título ou descrição não ultrapassam um tamanho específico ou se o formato está correto (ex: e-mail ou número de telefone).


mensagem de erro:
  {
    success: false,
    error: ERROR_MESSAGES.,
    code: '',
  }


*/

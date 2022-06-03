import jwt from 'jsonwebtoken';

const verificarTokenMiddleware = (req, res, next) => {
  // Verificar se o token foi enviado pelo headers da requisição
  const token = req.headers.authorization;

  // Retornar resposta caso não seja enviado
  if (token === undefined) {
    return res.status(401).send('Token não enviado');
  }

  // Verificar se o token é um token valido
  // A função recebe 3 parâmetros
  // - O token a ser verificado
  // - A chave secreta que foi usada na criação do token
  // - A função que define se ocorreu erro ou não
  jwt.verify(token, 'chave_secreta', (error, decoded) => {
    if (error) {
      return res.status(401).send('Token inválido');
    }

    next();
  });
};

export default verificarTokenMiddleware;

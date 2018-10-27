export default class BaseError extends Error {
  constructor(message) {
    super(message || `Algo deu errado`);
  }
}

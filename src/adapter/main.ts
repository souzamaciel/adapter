import { EmailValidatorAdapter } from './validator/email-validator-adapter';
import { EmailValidatorProtocol } from './validator/email-validator-protocol';

function validaEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido');
  } else {
    console.log('Email é inválido');
  }
}

validaEmail(new EmailValidatorAdapter(), 'lucas@gmail.com');

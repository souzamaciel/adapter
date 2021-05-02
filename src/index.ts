import isEmail from 'validator/lib/isEmail';

const email = 'lucas@gmail.com';

if (isEmail(email)) {
  console.log('É válido');
} else {
  console.log('É inválido');
}

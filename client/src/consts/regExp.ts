export const REG_EXP = {
  cardName: /^[A-Z]+ [A-Z]+$/,
  cardNumber: /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/,
  cardExpiration: /^[0-3][0-9]\/[0-9]{4}$/,
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  password:
    /^(?=[^А-Яа-я\s]{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=[^А-Яа-я\s]+\d|\d)((?=[^А-Яа-я\s]+[a-z]|[a-z]){1})((?=[^А-Яа-я\s]+[A-Z]|[A-Z]){1})[^А-Яа-я\s]+$/,
};

export function getErrorMessages(data: [{ value: string }]): string {
  const errorMessages = data.map(
    (validator: { value: string }) => validator.value,
  );

  return errorMessages.join('\n');
}

export function validateBorn(stringDate: string): boolean {
  /** ****** VALIDATE FORMATE DATE DD/MM/AAAA ****** */

  const regExpCharacter = /[^\d]/; // Regex to search no-numeric character .
  const regExpSpace = /^\s+|\s+$/g; // Regex to trim.

  if (stringDate.length !== 10) {
    return false;
  }

  const splitDate = stringDate.split('/');

  if (splitDate.length !== 3) {
    return false;
  }

  /* remove black spaces in begin of string. */
  splitDate[0] = splitDate[0].replace(regExpSpace, '');
  splitDate[1] = splitDate[1].replace(regExpSpace, '');
  splitDate[2] = splitDate[2].replace(regExpSpace, '');

  if (
    splitDate[0].length !== 2 ||
    splitDate[1].length !== 2 ||
    splitDate[2].length !== 4
  ) {
    return false;
  }

  /* search no-numeric character . Eg.: "x" at "28/09/2x11" */
  if (
    regExpCharacter.test(splitDate[0]) ||
    regExpCharacter.test(splitDate[1]) ||
    regExpCharacter.test(splitDate[2])
  ) {
    return false;
  }

  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1], 10) - 1;
  const year = parseInt(splitDate[2], 10);

  const newDate = new Date(year, month, day);
  const today = new Date();

  if (newDate > today) {
    return false;
  }

  return !(
    newDate.getDate() !== day ||
    newDate.getMonth() !== month ||
    newDate.getFullYear() !== year
  );
}

export function validateIsOlder(bornDate: string): boolean {
  const splitDate = bornDate.split('/');

  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1], 10) - 1;
  const year = parseInt(splitDate[2], 10);

  const dob = new Date(year, month, day);

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());

  let age = currentYear - dob.getFullYear();
  if (birthdayThisYear > currentDate) {
    age -= 1;
  }

  return age >= 18;
}

export function validateCellphone(phone: string): boolean {
  const cleanValue = phone.replace(/-| |\(|\)|_|\//g, '');

  return cleanValue.length === 11;
}

export function validatePassword(pass: string): boolean {
  const validator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  return validator.test(pass);
}

export function formatCellphone(phone: string): string {
  return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
}

export function formatZipcode(zipcode: string): string {
  return `${zipcode.slice(0, 4)}-${zipcode.slice(4, 7)}`;
}

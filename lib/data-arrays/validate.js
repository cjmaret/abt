export default function validate(
  e,
  errorText,
  setErrorText,
) {
  let inputName = e.target.name;
  let inputValue = e.target.value;

  if (inputName === 'name') {
    if (inputValue.length < 2) {
      setErrorText({
        ...errorText,
        nameError: 'Name field must be more than 2 characters long',
      });
    } else {
      setErrorText({
        ...errorText,
        nameError: '',
      });
    }
  }

  if (inputName === 'email') {
    if (inputValue.length < 1) {
      setErrorText({ ...errorText, emailError: 'Email is required' });
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(inputValue)) {
      setErrorText({
        ...errorText,
        emailError: 'Email must be in standard format',
      });
    } else {
      setErrorText({
        ...errorText,
        emailError: '',
      });
    }
  }

  if (inputName === 'message') {
    if (inputValue.length < 1) {
      setErrorText({ ...errorText, messageError: 'Message is required' });
    } else {
      setErrorText({
        ...errorText,
        messageError: '',
      });
    }
  }
}

export const validateUserLoginForm = (values) => {
    const errors = {};

    if (values.username.length < 6) {
        errors.username = 'Must be at least 6 characters';
    } else if (values.username.length > 15 ) {
        errors.username = 'Must be 15 character or less.';
    }

    if (values.password.length < 8 ) {
        errors.password = 'Must be 8 or more characters.';
    }

return errors;
}
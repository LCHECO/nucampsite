export const validateCommentForm = (values) => {
    const errors = {};

    const reg = /^[0-9]/;
    if (!reg.test(values.rating)) {
        errors.rating = 'Required';
    } 

    if (values.author.length < 2) {
        errors.author = 'Must be 2 characters.';
    } else if (values.author.length > 15 ) {
        errors.author = 'Must be 15 characters or less.';
    }
   
return errors;
}
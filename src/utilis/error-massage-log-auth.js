const errorMassageLogAuth = (error) => {
    let errorMassage = {
        username: false,
        email: false,
        password: false,
        error: false
    };
    switch (error) {
        case 'Email is already taken':
             errorMassage = {
                ...errorMassage,
                email: 'Пошта вже зайнята'
            };
            break;
            case 'Username already taken':
                errorMassage = {
                   ...errorMassage,
                   username: "користувач з таким ім'ям вже є"
               };
               break;
        case 'An error occurred during account creation':
             errorMassage = {
                ...errorMassage,
                username: "користувач з таким ім'ям вже є"
            };
            break;

        case 'password is a required field':
             errorMassage = {
                ...errorMassage,
                password: "Пароль є обов'язковим полем"
            };
            break;
            case 'email is a required field':
                errorMassage = {
                   ...errorMassage,
                   email: "Пошта э обов'язковим полем"
               };
               break;

        case 'email must be a valid email':
             errorMassage = {
                ...errorMassage,
                email: "Некоректна пошта"
            };
            break;

        case 'Please provide a valid email address':
             errorMassage = {
                ...errorMassage,
                email: "Надайте дійсну електронну пошту"
            };
            break;

        case 'Invalid identifier or password':
             errorMassage = {
                ...errorMassage,
                password: "Пароль або пошта не вірні",
                email:"Пароль або пошта не вірні"
            };
            break;
            case '2 errors occurred':
             errorMassage = {
                ...errorMassage,
                password: "Пароль є обов'язковим полем",
                email:"Пошта э обов'язковим полем"
            };
            break;

        default:
             errorMassage = {
                ...errorMassage,
                error: 'Щось пішло не так',
                
            };

    }
    return errorMassage
}
export default errorMassageLogAuth;
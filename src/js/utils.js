export function errorHandler(status, mess, mode){
    switch (status){
        case 400:
            document.getElementById(mess).innerHTML = "Неверные данные";
            break;
        case 401:
            if(mode === "reg") {
                document.getElementById(mess).innerHTML = "Этот логин уже занят, пожалуйста выберите другой";
            } else {
            document.getElementById(mess).innerHTML = "Неверный логин или пароль, попробуйте еще раз";
                }
            break;
        case 403:
            document.getElementById(mess).innerHTML = "Вы не авторизованы";
            break;
        default:
            document.getElementById(mess).innerHTML = "Проблемы с сервером :(";
    }
}
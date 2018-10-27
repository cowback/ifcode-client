import swal from 'sweetalert';

export default class AlertaService {
    static error(title, message, onClose = () => {}) {
        swal({
            title: title,
            text: message,
            icon: 'error',
            button: 'Ok'
        }).then(() => {
            onClose();
        });
    }

    static success(title, message, onClose = () => {}) {
        swal({
            title: title,
            text: message,
            icon: 'success',
            button: 'Ok'
        }).then(() => {
            onClose();
        });
    }

    static warning(
        title,
        message,
        willContinueFunction,
        willContinueMessage,
        onClose = () => {}
    ) {
        swal({
                title: title,
                text: message,
                icon: 'warning',
                buttons: true,
                dangerMode: true
            })
            .then(willContinue => {
                if (willContinue) {
                    willContinueFunction();
                }
            })
            .catch(error => {
                this.error('Algo deu errado!', error.message);
            });
    }
}
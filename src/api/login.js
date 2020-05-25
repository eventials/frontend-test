import moment from 'moment';

export const LoginService = {
    logIn: (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    email.localeCompare('teste.frontend@eventials.com.br') ===
                        0 &&
                    password.localeCompare('123456789') === 0
                ) {
                    resolve({
                        message: 'Success! Welcome to Country App',
                        token:
                            'VGVzdGUgRnJvbnRlbmQgRXZlbnRpYWxzIC0gQ291bnRyeSBBcHAgLSBNYXRoZXVzIFBhbG1laXJh',
                        success: true,
                    });
                }

                reject({
                    message: 'Failed! 404 Bad Request',
                    success: false,
                });
            }, 500);
        });
    },
    authSession: (tokenSession) => {
        const timeNow = moment().date();
        const timeAtAcessed = moment().date(tokenSession.time);

        return new Promise((resolve, reject) => {
            setTimeout(
                () => (timeNow - timeAtAcessed <= 2 ? resolve(true) : reject()),
                100
            );
        });
    },
};

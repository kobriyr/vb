'use strict';

const User = use('App/Models/User');

class AuthController {
    async login ({request, response, auth}) {
        const { email, password } = request.all();
        const user = await User.findBy('email', email);

        if (user) {
            if(user.password === password) {
                const jwt = await auth.generate(user);

                return response.status(200).send(jwt);
            } else {
                return response.status(401).send({message: 'Введено неправельний пароль!'});
            }
        } else {
            return response.status(404).send({message: 'Користувач з таким email не знайдений.'});
        }
    }
}

module.exports = AuthController;

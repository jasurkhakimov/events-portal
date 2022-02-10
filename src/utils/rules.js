export default {
    required: v => !!v || 'Это поле обязательное!',
    email: v => /.+@.+\..+/.test(v) || 'E-mail должен быть валидным'
}
export default {
    template: `
        <section id="form-section">
            <form @submit="sendForm" class="user-form">
                <h2>Nuevo Usuario</h2>
                <div class="form-control">
                    <label for="email">Email:</label>
                    <input v-model="email" type="email" name="email" id="email">
                    <small></small>
                </div>
                <div class="form-control">
                    <label for="name">Nombres:</label>
                    <input v-model="first_name" type="text" name="name" id="name">
                    <small></small>
                </div>
                <div class="form-control">
                    <label for="last-name">Apellidos:</label>
                    <input v-model="last_name" type="text" name="last-name" id="last-name">
                    <small></small>
                </div>
                <div class="form-control">
                    <label for="birth-date">Fecha de Nacimiento:</label>
                    <input v-model="birth_date" type="date" name="birth-date" id="bith-date">
                    <small></small>
                </div>
                <input class="save-button" type="submit" value="GUARDAR">
            </form>
        </section>
    `,
    emits: ['on-user-added'],
    data(){
        return {
            first_name: '',
            last_name: '',
            email: '',
            birth_date: ''
        }
    },
    methods: {
        sendForm(event){
            event.preventDefault();

            if(
                !this.first_name.trim() ||
                !this.last_name.trim() ||
                !this.email.trim() ||
                !this.birth_date.trim()
            ) return alert('¡Todos los campos son obligatorios!');
            
            let form = {
                first_name: this.first_name.trim(),
                last_name: this.last_name.trim(),
                email: this.email.trim(),
                birth_date: this.birth_date.trim()
            };

            this.first_name = '';
            this.last_name = '';
            this.email = '';
            this.birth_date = '';

            this.$emit('on-user-added',form);
        }
    }
}
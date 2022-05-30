export default {
    props: {
        users: Array
    },
    template: `
        <section id="users-viewer">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombres</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>   
                    <tr v-for="user in users">
                        <td>{{user.id}}</td>
                        <td>{{user.first_name}} {{user.last_name}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `
}
export default {
    data (){
        return {
            users: [],
            isLoading: true
        }
    },

    methods: {

        addUser(user){
            this.isLoading = true;
            user['id'] = this.users.length+1;
            setTimeout(() => {
                this.users.push(user);
                localStorage.setItem('users',JSON.stringify(this.user));
                scrollToEnd();
                this.isLoading = false;
            },2000);
        },

        loadUsersData(){
            this.isLoading = true;
            fetch('https://reqres.in/api/users?page=1')
                .then(response => response.json())
                .then(response => {
                    this.users = response.data;
                    localStorage.setItem('users',JSON.stringify(response.data));
                    this.isLoading = false;
                }).catch(error => {
                    console.log(error);
                    this.isLoading = false;
                });
        }

    },

    mounted() {
        this.loadUsersData();        
    }
}

function scrollToEnd(){
    let main = document.getElementById("main-wrapper");
    main.scrollTop = main.scrollHeight;
}

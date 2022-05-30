import AppComponent from './components/app/app.component.js';
import UserFormComponent from './components/user-form/user-form.component.js';
import UsersViewerComponent from './components/user-viewer/user-viewer.component.js';

window.onload = function(){
    let app = Vue.createApp(AppComponent);

    app.component('user-form',    UserFormComponent)
       .component('users-viewer', UsersViewerComponent);

    app.mount('#app');
}

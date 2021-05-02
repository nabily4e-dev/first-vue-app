const app = Vue.createApp({
    data() {
        return {
            firstName: 'NabiL',
            lastName: 'Ashbat',
            email: 'napil101@gmail.com',
            gender: 'male',
            picture: 'C:\\Users\\napil\\Downloads\\nabily4e.jpg'
        }
    },
    methods: {
        getUser() {
            // console.log(this.firstName);

            this.firstName = 'Sam',
            this.lastName='Smith',
            this.email='sam@gmail.com',
            this.gender='female',
            this.picture= 'https://randomuser.me/api/portraits/women/10.jpg'

        }
    },
})

app.mount('#app')
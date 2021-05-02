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
        async getUser() {
            // console.log(this.firstName);

            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.firstName = results[0].name.first
            this.lastName=results[0].name.last
            this.email=results[0].email
            this.gender=results[0].gender
            this.picture= results[0].picture.large

        }
    },
})

app.mount('#app')
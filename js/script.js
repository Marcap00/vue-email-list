const { createApp } = Vue;

createApp({
    data() {
        return {
            email: '',
            emails: [],
            maxLength: 10,
            urlAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        getRandomEmail() {
            for (let i = 0; i < this.maxLength; i++) {
                axios.get(this.urlAPI)
                    .then(response => {
                        console.log(response.data.response);
                        this.email = response.data.response;
                        this.emails.push(this.email);
                    })

            }
        },
    },
    mounted() {
        this.getRandomEmail();
    }
}).mount('#app')
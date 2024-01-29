const {createApp} = Vue;
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const app = createApp({
    data: () => ({
        emails:[]
    }),
    computed:{
        getEmails(){
            for(let i = 0; i < 10; i++){
                    axios.get(endpoint).then(res => {
                    this.emails.push(res.data.response)
                })
                }
        }
    }
})

app.mount('#root')
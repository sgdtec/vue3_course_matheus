const nameApp = {
    data() {
        return {
            name: '',
            age: 48,
            input_name: ""
        }
    },
    methods: {
        submitform(e) {
            e.preventDefault();
            
            console.log(this.input_name);
        }
    }
}

Vue.createApp(nameApp).mount("#app");
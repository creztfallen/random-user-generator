const app = Vue.createApp({
  data() {
    return {
      firstName: "Mateus",
      lastName: "Moreno",
      email: "mtssmoreno@gmail.com",
      gender: "male",
      picture: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 100
      )}.jpg`,
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();

      const random = Math.floor(Math.random() * 98);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");

const { createApp } = Vue;

createApp({
  data() {
    return {
      discList: [],
      show: false,
      bigCard: {
        poster: "",
        title: "",
        author: "",
        year: "",
      },
    };
  },

  methods: {
    onlyThis(newCard) {
      this.show = true;

      this.bigCard.poster = newCard.poster;
      this.bigCard.title = newCard.title;
      this.bigCard.author = newCard.author;
      this.bigCard.year = newCard.year;
    },

    closeButton() {
      console.log("ciao");
      this.show = false;
      console.log(this.show);
    },
  },

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/data.php")
      .then((response) => {
        this.discList = response.data;
        console.log(this.discList);
      });
  },
}).mount("#app");

const { createApp } = Vue;

createApp({
  data() {
    return {
      discList: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/data.php")
      .then((response) => {
        this.discList = response.data;
      });
  },
}).mount("#app");

<template>
  <div>Estoy super vacio</div>
    
</template>


































<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/view");
          this.student = {
            name: "",
            email: "",
            phone: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

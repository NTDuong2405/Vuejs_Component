<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="fullName"
          required
          v-model="tutorial.fullName"
          name="fullName"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="tutorial.email"
          name="email"
        />
      </div>
      
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          class="form-control"
          id="phone"
          required
          v-model="tutorial.phone"
          name="phone"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialService from '../sevice/TutorialService';
export default {
  name: "add-new",
  data() {
    return {
      tutorial: {
        id: null,
        fullName: "",
        email: "",
        phone:""
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        fullName: this.tutorial.fullName,
        email: this.tutorial.email,
        phone: this.tutorial.phone
      };

      TutorialService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
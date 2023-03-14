<template>
  <div>
    <div>
      <h1>Form Generator</h1>
    </div>
    <div>
      <b-container fluid>
        <b-row class="pb-2">
          <b-col sm="2">
            <label for="textareaForm"> {{ text }}</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="textareaForm"
              v-model="textGPT"
              placeholder="I want a form for . . ."
              rows="4"
            >
            </b-form-textarea>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              sm="4"
              class="custom-btn pb-2"
              variant="outline-success"
              @click="generateForm(textGPT)"
            >
              Genrate Form
            </b-button>
            <b-button
              sm="4"
              class="custom-btn pb-2"
              variant="outline-danger"
              @click="textGPT = ''"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import mixin from "./mixin/buttonMixin";
export default {
  name: "home-view",
  mixins: [mixin],
  data() {
    return {
      text: "Describe your form:",
      textGPT: "",
    };
  },
};
</script>
<style scoped>
.custom-btn {
  width: 150px;
  margin-left: 50px;
}
</style>

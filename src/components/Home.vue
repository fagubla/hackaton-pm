<template>
  <div>
    <h1>AI Form</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="messageForm"
              :label="label"
              variant="outlined"
              persistent-placeholder
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn color="info" variant="outlined" @click="generateForm">
              Generate Form
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <pre class="dataJson"> {{ dataJson }}</pre>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
const home = defineComponent({
  name: "home-view",
  setup() {
    const messageForm = ref("");
    let dataJson = ref("");
    const generateForm = () => {
      axios
        .post("http://localhost:3000/ask-to-chat-gpt", {
          message: messageForm.value,
        })
        .then((response) => {
          dataJson.value = JSON.parse(JSON.stringify(response.data.data));
        });
    };
    return {
      label: "Describe your form",
      messageForm,
      dataJson,
      generateForm,
    };
  },
});
export default home;
</script>

<style>
.dataJson {
  text-align: justify;
  width: auto;
  height: auto;
  background: #efefef;
}
</style>

<template>
  <div class="mt-8">
    <h4>
      Please answer the following questions to test your IQ if you are eligible for
      admission in our institution
    </h4>
    <div>
      <template>
        <v-container fluid>
          <v-radio-group v-model="ques1">
            <h3>Who is the president of nigeria?</h3>
            <v-radio label="Goodluck Jonathan" value="Goodluck Jonathan"></v-radio>
            <v-radio label="Babatunde Fashola" value="Babatunde Fashola"></v-radio>
            <v-radio label="Muhamadu Buhari" value="Muhamadu Buhari"></v-radio>
          </v-radio-group>
        </v-container>

        <v-container fluid>
          <v-radio-group v-model="ques2">
            <h3>How many colors does a rainbow have?</h3>
            <v-radio label="9 colors" value="9"></v-radio>
            <v-radio label="7 colors" value="7"></v-radio>
            <v-radio label="3 colors" value="3"></v-radio>
          </v-radio-group>
        </v-container>

        <v-container fluid>
          <v-radio-group v-model="ques3">
            <h3>How many legs does an elephant have?</h3>
            <v-radio label="4 legs" value="4"></v-radio>
            <v-radio label="8 legs" value="8"></v-radio>
            <v-radio label="1 leg" value="1"></v-radio>
          </v-radio-group>
        </v-container>
      </template>
    </div>
    <div>
      <v-spacer></v-spacer> <v-btn @click="compileScore" color="primary">Submit</v-btn>
    </div>

    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="490">
          <template> </template>
          <v-card>
            <v-card-title class="headline">
              <v-spacer></v-spacer>
              <v-icon large>mdi-checkbox-multiple-marked-outline</v-icon>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="text-center">{{ msg }}</v-card-text>
            <v-card-text class="text-center display-1"
              >You Scored {{ score }}%</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="primary darken-1" text @click="redirect">
                Continuue
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ans1: "Goodluck Jonathan",
      ans2: "7",
      ans3: "4",
      score: 0,
      ques1: null,
      ques2: null,
      ques3: null,
      dialog: false,
      msg:
        "Congrats you passed the admission test successfully and will be considered for admission",
    };
  },
  methods: {
    compileScore() {
      if (this.ques1 === this.ans1) {
        this.score = this.score + 10;
      }
      if (this.ques2 === this.ans2) {
        this.score = this.score + 10;
      }
      if (this.ques3 === this.ans3) {
        this.score = this.score + 10;
      } else {
        this.msg = "Sorry you faild the test.";
      }
      this.dialog = true;
    },
    redirect(){
              this.$router.push('/dashboard')
    }
  },
};
</script>

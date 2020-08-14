<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-if="happyStaff">The staff seems happy!</p>
    <div v-else>
      <p>The staff doesnt seem happy!</p>
      <p>{{screamingPerson}} is screaming at you!</p>
    </div>
    <p v-show="!totalTvCount">I can't buy any..</p>
    <button
      :disabled="!totalTvCount"
      @click="buyTv(1)">
      Buy TV
    </button>
    <button
      :disabled="totalTvCount < 2"
      @click="buyTv(2)">
      Buy Two TVs
    </button>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  computed: {
    totalTvCount () {
      return this.$store.state.totalTvCount;
    },
    happyStaff () {
      // Check in the getter if the staff is happy
      return this.$store.getters.happyStaff;
    },
    screamingPerson () {
      console.log(this.$store.getters.screamingPerson);
      return this.$store.getters.screamingPerson;
    }
  },
  methods:{
    buyTv(amount){
        this.$store.dispatch("removeTv", amount);
        this.triggerPerson();
    },
    triggerPerson(){
      let rndmInt = this.getRandomInt(2);
      console.log(rndmInt);
      if(rndmInt == 1){
        if(this.getRandomInt(2) == 0){
          this.$store.dispatch("alterScreamingPerson", "Jenny");
        }else{
          this.$store.dispatch("alterScreamingPerson", "Larry");
        }
      }
    },
    getRandomInt(max){
      return Math.floor(Math.random()* Math.floor(max));
    }
  }
}
</script>

<style scoped>
</style>

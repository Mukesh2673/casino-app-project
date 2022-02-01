<template>
  <div class="container-fluid bg-info">
    <div class="row">
      <i
        class="fa fa-arrow-left"
        aria-hidden="true"
        style="font-size: 30px; color: white"
      ></i>
      <span style="color: white; font-size: 25px; margin-left: 20px"
        >Recharge</span
      >
    </div>
  </div>
  <div class="container mt-2 card">
    <div class="row mt-2">
      <div class="col-1">
        <i
          class="fas fa-wallet"
          style="font-size: 20px; color: gray; margin-left: 70px"
        ></i>
      </div>
      <div class="col-11">
        <input type="text" placeholder="Enter or Select recharge amount" :value="data" />
      </div>
    </div>
    <div class="amountlist mt-4 row">
      <div class="btn mt-3" v-for="item in amountlist" v-bind:key="item.id"
       :style="{ backgroundColor: currentClass == item ? 'blue' : '', color: currentClass == item ? 'white' : '' }"
        @click="currentClass = item,data=item"
         ref="t"
      >{{item}}</div>
    
    </div>
  </div>



  <div class="mt-5 checkbox bg-primary">
  payment paytm  <input type="checkbox" id="one" value="One" v-model="picked" class="checkbox">
Bhim  <input type="checkbox" id="one" value="One" v-model="picked" class="checkbox">
 
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const currentClass = ref("");
   const amountlist=ref([
      500,1000,2000,5000,10000,499999

    ]);
    const data=ref("")
    
    return { currentClass,amountlist,data};
  },
};
</script>

<style scoped>
input {
 
 outline: none;
  border: none;
}
input:focus {
  outline: none;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

}
.amountlist .btn {
  width: 280px;
  margin-left: 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.checkbox{
  margin-left:10px;
}
</style>
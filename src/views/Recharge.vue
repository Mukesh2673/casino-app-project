<template>
<div class="test">
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
  <div class="container mt-5 card">
    <div class="row mt-2">
      <div class="col-1">
        <i
          class="fas fa-wallet"
          style="font-size: 20px; color: gray; margin-left: 70px"
        ></i>
      </div>
      <div class="col-11">
        <input
          type="text"
          placeholder="Enter or Select recharge amount"
          :value="data"
        />
      </div>
    </div>
    <div class="amountlist mt-5 row">
      <div
        class="btn mt-5"
        v-for="item in amountlist"
        v-bind:key="item.id"
        :style="{
          backgroundColor: currentClass == item ? 'blue' : '',
          color: currentClass == item ? 'white' : '',
        }"
        @click="(currentClass = item), (data = item)"
        ref="t"
      >
        {{ item }}
      </div>
    </div>
    <br /><br />
  </div>
  <div class="mt-5">
    <span style="margin-left: 80px; color: gray">payment</span>
  </div>

  <div class="mt-5 checkbox container">
    <div @click="currentid = 'wow'" class="row">
      <div class="col-2">
        <i
          class="fa fa-check"
          aria-hidden="true"
          :style="{
            display: currentid == 'wow' ? 'block' : 'none',
            float: 'right',
          }"
        ></i>
      </div>

      <div class="col-10">wowPay</div>
    </div>
    <div @click="currentid = 'paytm'" class="row mt-3">
      <div class="col-2">
        <i
          class="fa fa-check"
          aria-hidden="true"
          :style="{
            display: currentid == 'paytm' ? 'block' : 'none',
            float: 'right',
          }"
        ></i>
      </div>
      <div class="col-10">Paytm</div>
    </div>

    <div @click="currentid = 'OceanPay'" class="row mt-3">
      <div class="col-2">
        <i
          class="fa fa-check"
          aria-hidden="true"
          :style="{
            display: currentid == 'OceanPay' ? 'block' : 'none',
            float: 'right',
          }"
        ></i>
      </div>
      <div class="col-10">Ocean</div>
    </div>

    <div @click="currentid = 'WinPay'" class="row mt-3">
      <div class="col-2">
        <i
          class="fa fa-check"
          aria-hidden="true"
          :style="{
            display: currentid == 'WinPay' ? 'block' : 'none',
            float: 'right',
          }"
        ></i>
      </div>
      <div class="col-10">WinPay</div>
    </div>

    <div class="mt-5 Recharge" @click="Recharge"><p>Recharge</p></div>
  </div>
 </div> 
</template>
<script>
import { ref } from "@vue/reactivity";
import { useRouter } from 'vue-router'

export default {
   setup() {
    const router=useRouter()

    const currentClass = ref("");
    const currentid = ref("");
    const amountlist = ref([500, 1000, 2000, 5000, 10000, 499999]);
    const data = ref("");
    const Recharge = () => {
      if(currentid.value&&data.value)
      {
 fetch('http://localhost:3000/create-checkout-session',{
         method:"POST",
         body:JSON.stringify({
            PAYMENT:currentid.value,
            amount:data.value
           }),
            headers: {
        "Content-type": "application/json; charset=UTF-8"
    }

      }).then((response) =>{
      console.log(response.json());
}).catch((err)=>{
console.log(err);
});

          //router.push('/');
      }
      else{
        alert('select  Amount and Payment methods')
      }


    };
    return { currentClass, amountlist, data, currentid, Recharge };
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
.checkbox {
  margin-left: 10px;
}
input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.Recharge {
  display: flex;
  justify-content: center;
  margin-left: 30%;
  background: #009688;
  height: 50px;
  margin-bottom: 150px;
}
.Recharge p {
  color: white;
  margin-top: 10px;
}
</style>
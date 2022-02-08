<template>
<div class="test">
  <div class="container-fluid balance_display">
    <p>Available balance: ₹ 0.00</p>
    <router-link to="/Recharge">
    <div class="btn btn-primary">Recharge</div>
    </router-link>
    <div class="btn btn-light">Trend</div>
    <div class="btn btn-secondary" @click="open">Reset</div>
  </div>
  <div class="container emerd">
    <p>Emerd</p>
  </div>
  <div class="container-fluid period-count">
    <div class="row">
      <div class="col-md-6">
        <p><i class="bi bi-trophy"></i> Period</p>
        <p>20220124449</p>
      </div>
      <div class="col-md-6">
        <p><i class="bi bi-stopwatch"></i> Count Down</p>
     {{minutes}} :  {{ s }} 
        <p id="time"></p>
      </div>
    </div>
  </div>
  <section id="class-disable"  :style="{  opacity: [seconds<10 ?0.3:1]   }">
    <div class="container-fluid three-btn">
      <div
        class="btn btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
        id="green"
       @click="seconds<10 ? modal1 = 'none': modal1='block',coin='green'"
      >
        Join Green
      </div>
      <div
        class="btn btn-voilet"
        data-toggle="modal"
        data-target="#exampleModal"
        id="voilet"
        @click="seconds<10 ? modal1 = 'none': modal1='block', coin='Violet'"
      >
        Join Voilet
      </div>
      <div
        class="btn btn-red"
        data-toggle="modal"
        data-target="#exampleModal"
        id="red"
      @click="seconds<10 ? modal1 = 'none': modal1='block', coin='red'"
      >
        Join Red
      </div>
    </div>
    <div class="container number-button">
      <div class="row">
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="0"
          @click="seconds<10 ? modal1 = 'none': modal1='block',coin=0"
        >
          0
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="1"
          @click="seconds<10 ? modal1 = 'none': modal1='block', coin=1"
        >
          1
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="2"
          @click="seconds<10 ? modal1 = 'none': modal1='block' , coin=2"
        >
          2
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="3"
          @click="seconds<10 ? modal1 = 'none': modal1='block', coin=3"
        >
          3
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="4"
       @click="seconds<10 ? modal1 = 'none': modal1='block', coin=4"
        >
          4
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="5"
          @click="seconds<10 ? modal1 = 'none': modal1='block', coin=5"
        >
          5
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="6"
          @click="seconds<10 ? modal1 = 'none': modal1='block', coin=6"
        >
          6
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="7"
          @click="seconds<10 ? modal1 = 'none': modal1='block', coin=7"
        >
          7
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="8"
          @click="seconds<10 ? modal1 = 'none': modal1='block', coin=8"
        >
          8
        </div>
        <div
          class="col-md-2 mr-4 btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          id="9"
          @click="seconds<10 ? modal1 = 'none': modal1='block', coin=9"
        >
          9
        </div>
      </div>
    </div>
  </section>
  <div class="container emerd">
    <i class="bi bi-trophy"></i>
    <p>Emerd Record</p>
  </div>
  <div class="container">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Period</th>
          <th scope="col">Price</th>
          <th scope="col">Group</th>
          <th scope="col">Coin</th>

          <th scope="col">Result</th>
    
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in result" :key="data.id">
          <th scope="row">2022012445{{(data.id)}}</th>
          <td>{{data.amount}}</td>
          <td v-if="data.cgroup.slice(2).length>2">
          <button class="btn" :style="{background:[data.cgroup]}"></button>
          </td>
          <td v-else>{{data.cgroup}}</td>

              <td>{{data.coin}}</td>
              <td>Success</td>
          <td><button class="btn" :style="{background:[data.coin]}"></button></td>
                   
        </tr>
      </tbody>
    </table>
  </div>
  <div class="container">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
  <div
    class="modal"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    :style="{ display: [modal1] }"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">SELECT 0</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="modal1 = 'none'"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Contract Money</p>
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button
                type="button"
                class="btn btn-secondary"
                id="ten"
                v-on:click="Total = 10"
              >
                10
              </button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
              <button
                type="button"
                class="btn btn-secondary"
                id="hundred"
                v-on:click="Total = 100"
              >
                100
              </button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Third group">
              <button
                type="button"
                class="btn btn-secondary"
                id="thousand"
                v-on:click="Total = 1000"
              >
                1000
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="Fourth group">
              <button
                type="button"
                class="btn btn-secondary"
                id="tenThousand"
                v-on:click="Total = 10000"
              >
                10000
              </button>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-sm-2 mr-4 btn btn-outline-dark"
                id="dec"
                v-on:click="number <= 0 ? 0 : (number -= 1)"
              >
                -
              </div>
              <div class="col-sm-2 mr-4 btn btn-outline-dark" id="num">
                {{ number }}
              </div>
              <div
                class="col-sm-2 mr-4 btn btn-outline-dark"
                id="inc"
                v-on:click="number += 1"
              >
                +
              </div>
            </div>
          </div>
          <p>
            Total contract money is <span id="sum">{{ total }}</span>
          </p>
          <input type="checkbox" id="check" />
          <label for="check"
            >I agree <a href="/" class="presale">PRESALE RULE</a></label
          >
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="modal1 = 'none'"
          >
            CANCEL
          </button>
          <button type="button" class="btn btn-primary" @click="test()">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</template>
   <script>
import "vue-toast-notification/dist/theme-sugar.css";
import { ref, computed } from "vue";
import axios from 'axios'
export default {
  setup() {
     const toast = () => {
        createToast('Wow, easy')
    }
    
    
    const number = ref(1);
    const modal1 = ref("none");
    const Total = ref(10);
    let time = ref({});
    let seconds = ref(20);
    let timer = ref(0);
    let minutes=ref(0);
    let s=ref(0);
    let result=ref([]);
    let coin=ref(1);
  
  

    //let updated=ref(0)


    async function getrendomdata(){
     await axios.get('http://localhost:3000/winner')
     .then((response)=>{
       result.value=response.data
     }),(error)=>{
       console.log(error);
     }  
     }


    function secondsToTime(secs) {
     
        
      let hours = Math.floor(secs / (60 * 60 *60));
      //let divisor_for_minutes = secs % (60 * 60);
      minutes.value= Math.floor(secs / 60);
       s.value=seconds.value%60
  /*     let divisor_for_seconds = divisor_for_minutes % 60;
       seconds.value = Math.ceil(divisor_for_seconds); */
    
 
      let obj = {
        h: hours,
        m: minutes.value,
        s: s.value,
      };
      return obj;
    }
    let countDown = () => {
        time.value = secondsToTime(seconds.value);
        seconds.value = seconds.value - 1
        


      if (seconds.value==0){
        
        clearInterval(timer.value);
        s.value=0
        getrendomdata();
      }
      if(seconds.value<10)
      {
        modal1.value='none';
      }


    };
    function startTimer() {
      if (timer.value === 0 && seconds.value >= 0) {
        timer.value = setInterval(countDown, 1000);
        }
    }

    startTimer();
    


    const total = computed(() => {
      return number.value * Total.value;
    });
    return {
      number,
      modal1,
      Total,
      total,
      seconds,
      minutes,
      s,
      coin,
      result,
      toast

    };
  },
  methods:{
         open(){
  this.$toast.show(`money Locked`,{
    type:'error'
  })
  setTimeout(this.$toast.clear, 1000);
  },
    async  test(){
     this.modal1='none'
     await axios.post('http://localhost:3000/lockmoney', {
       coin:this.number,
       group:this.coin,
       amount:this.total,
       username:'alexendra',
       phoneNumber:'3040505505'
    }) 
 .then((response) => {
  this.open();
  console.log(response);
}, (error) => {
  console.log(error);
});
    }

}
}
</script>
          

<style  src="../assets/style.css">
</style>
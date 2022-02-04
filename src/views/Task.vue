<template>
  <teleport to="#end-of-body" :disabled="!showText">
    This should be at the end.
  </teleport>
  <div>
    This should be at the top.
    <input type="file" @change="test">
  </div>
  <button @click="showText = !showText">
     Toggle showText
  </button>
  <img :src="image"/>
</template>
<script>
export default {
  data() {
    return {
      showText: false,
    image:''
     }
  },
  methods:{
      test(e){
          console.log(e.target.files[0]);
            var t=e.target.files[0];
               var reader=new FileReader();
               reader.onload=(e)=>{
                  this.image=e.target.result;
                   console.log(this.image )
               }
               reader.readAsDataURL(t);
      }
  }
};
</script>
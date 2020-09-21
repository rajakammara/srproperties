<template>
  <div id="app" class="antialiased font-nunito">
    
        <NavBar/>
      
        <router-view />
      
      
    
    
  </div>
</template>

<script>
import NavBar from '@/views/NavBar.vue'
export default {
  components:{
    NavBar
  }
}
</script>


<style>


#nav a.router-link-exact-active {
  color: #FFA500;
  font-weight:700;
  border-bottom:solid 4px;
}
.mobilemenu{
  z-index:2000;
}
</style>

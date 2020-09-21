<template>
    <div>
<div id="nav" class="flex justify-between items-center py-6 md:p-2 shadow-md">
       <div>
         <span class="text-md md:text-2xl font-bold text-white p-2 mx-4 rounded-sm m-2 bg-orange-600 whitespace-no-wrap">SR Properties</span>
       </div>
      <div class="hidden md:flex justify-evenly mx-2">        
      <router-link to="/" class="m-3">Home</router-link>
      <router-link to="/plisting" class="m-3">Property Listings</router-link>
      <router-link to="/legalservices" class="m-3">Legal Services</router-link>
      <router-link to="/propenquiry" class="m-3">Property Enquiry</router-link>
      <router-link to="/conservices" class="m-3">Construction Services</router-link>
      <router-link to="/vasthuservices" class="m-3">Vasthu Services</router-link>
      <router-link to="/signin" class="m-3">Sign in</router-link>
      </div>
      <!-- Mobile start-->
      <div class="md:hidden flex justify-evenly mx-3">
         <button @click="isOpen=!isOpen">
            <i class="fa fa-bars text-2xl mr-1" aria-hidden="true"></i> 
        </button> 
      </div>
       
      <div :class="{hidden : isOpen}" class="mobilemenu md:hidden absolute top-0 w-full h-full flex flex-col justify-center items-center text-white bg-gray-600 p-4">
      <button class="absolute top-0 right-0" @click="isOpen=!isOpen">
        <i class="fa fa-times text-2xl p-3 m-3" aria-hidden="true"></i> 
      </button>
      <router-link to="/" @click.native="isOpen=!isOpen" class="m-3">Home</router-link>
      <router-link to="/plisting" @click.native="isOpen=!isOpen" class="m-3">Property Listings</router-link>
      <router-link to="/legalservices" @click.native="isOpen=!isOpen" class="m-3">Legal Services</router-link>
      <router-link to="/propenquiry" @click.native="isOpen=!isOpen" class="m-3">Property Enquiry</router-link>
      <router-link to="/conservices" @click.native="isOpen=!isOpen" class="m-3">Construction Services</router-link>
      <router-link to="/vasthuservices" @click.native="isOpen=!isOpen" class="m-3">Vasthu Services</router-link>
      <router-link to="/signin" @click.native="isOpen=!isOpen" class="m-3">Sign in</router-link>
      </div>
      <!-- Mobile end -->


    </div>
    </div>
</template>

<script>
    export default {
        name:"NavBar",
        data(){
            return{
                isOpen:false
            }
        }
    }
</script>

<style scoped>

</style>
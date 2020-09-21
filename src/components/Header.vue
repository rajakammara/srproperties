<template>
  <div class="header relative">
        <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
        <div class="mx-auto w-2/3" id="header__title">
         <br/>
          <span class="text-xl md:text-2xl">The best way to</span>
          <h1 class="text-2xl md:text-4xl font-bold">Find Your</h1>
          <h1 class="text-2xl md:text-4xl font-bold">Perfect Property</h1>
        </div>
        <div class="mx-auto w-2/3" id="header__searchbar">
           <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-orange-600 bg-white': openTab !== 1, 'text-white bg-orange-600': openTab === 1}">
            For Rent
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-orange-600 bg-white': openTab !== 2, 'text-white bg-orange-600': openTab === 2}">
            For Buy
          </a>
        </li>
        
      </ul>
      <!-- Mobile -->
           <div class="relative md:hidden flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-2 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="flex item-center justify-evenly">
                <input type="text" class="w-full text-sm" placeholder="Search Rent Property Area/Location">
              </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div class="flex item-center justify-evenly">
                <input type="text" class="w-full text-sm" placeholder="Search Buy Property Area/Location">
              </div>
            </div>
            </div>
        </div>
           </div>
      <!-- ./Mobile -->
<!-- Desktop -->
      <div class="hidden relative md:flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-2 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="flex item-center justify-evenly">
                 <input class="border rounded-lg p-2 text-sm " type="text" placeholder="House/Property Location">
                 <label class="mt-4  text-sm">
                 <select name="" id="" class="text-gray-500">
                   <option>All Properties</option>
                 </select>
                 </label>
                 <select name="" id="" class="text-gray-500 text-sm">
                   <option>Rooms</option>
                 </select>
                 <select name="" id="" class="text-gray-500 text-sm">
                   <option>Any Price</option>
                 </select>
                 <button class="p-2 bg-orange-600 text-white rounded-sm m-2">Search Now</button>

              </div>
             
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
                Buy Property/ House
              </p>
            </div>
            
          </div>
        </div>
      </div>
 <!-- ./Desktop -->
    </div>
  </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      openTab:1,
    }
  },
  methods: {
    toggleTabs:function(tabNumber){
      this.openTab = tabNumber
    }
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header > img{
  height:600px;
  width:100%;
  object-fit: 'cover';
  
   mask-image: linear-gradient(to bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)); 
   
}
#header__title{
  position:relative;
  z-index:100;
  margin-top:-600px;
  margin-bottom:30px;
  
}
#header__searchbar{
  position:relative;
  z-index:100;
  margin-top:20px;
  margin-bottom:200px;
}

select {
    background: #fff;
    color:#888;
    border:none;
    outline:none;
    display: inline-block;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    cursor:pointer;
  
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}

/* Targetting Webkit browsers only. FF will show the dropdown arrow with so much padding. */
@media screen and (-webkit-min-device-pixel-ratio:0) {
    select {padding-right:18px}
}

label {position:relative}
label:after {
    content:"\f078";   
    font-family: "FontAwesome";
    font-size: 11px;
    color:#aaa;
    right:8px; top:4px;
    padding:0 0 2px;
    position:absolute;
    pointer-events:none;
}
label:before {
    content:'';
    right:4px; top:4px;
    width:23px; height:18px;
    background:#fff;
    position:absolute;
    pointer-events:none;
    display:block;
}
</style>

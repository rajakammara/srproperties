<template>
    <div class="card">
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 hover:shadow-outline">
        <img class="relative w-full h-48 object-fit z-10" v-bind:src="item.image" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
            <div class="font-bold text-md mb-2 whitespace-no-wrap">{{item.name}}</div>
            <p class="text-grey-darker text-base text-sm">
                {{item.description}}
            </p>
        </div>
        <div class="px-6 py-4">
            <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Bedrooms:{{item.bedrooms}}</span>
            <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Bathrooms:{{item.bathroom}}</span>
            <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">Bike Parking: 
                <span v-if="item.bike_parking"> 
                <i class="fa fa-check" aria-hidden="true"></i>
                </span>
                <span v-else>
                  <i class="fa fa-ban" aria-hidden="true"></i>  
                </span>
                


            </span>
            <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">Car Parking: 
                <span v-if="item.car_parking"> 
                <i class="fa fa-check" aria-hidden="true"></i>
                </span>
                <span v-else>
                  <i class="fa fa-ban" aria-hidden="true"></i>  
                </span>
                </span>
            <span class="inline-flex justify-end bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">Rent: Rs.{{item.rent}} /-</span>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Card",
        props:{
            item:Object
        }
    }
</script>

<style scoped>

</style>
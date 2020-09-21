<template>
  <div class="">
    <Header/>
     <div class="grid grid-cols-1 md:grid-cols-4 m-2 -mt-48 ">
    <div v-for="item in housedata" :key="item.id" class="place-self-center">  
      <Card :item="item" />
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Card
  },
  data(){
    
    return{
     housedata:[
 
    {
      "id" : 1,
      "name": "Independent House",
      "property_type": "Rent",
      "bedrooms": 2,
      "sqft": 2400,
      "street": "Sai Nagar",
      "city": "Anantapur",
      "furnishing_status": "semi",
      "bathroom": 2,
      "floor": 1,
      "age_of_building": 10,
      "bike_parking": true,
      "car_parking": false,
      "rent": 9000,
      "advance": 27000,
      "image": "https://source.unsplash.com/featured/?home",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
      "id": 2,
      "name": "Double Bedroom House, Naik Nagar",
      "property_type": "Rent",
      "bedrooms": 2,
      "sqft": 2400,
      "street": "Naik Nagar",
      "city": "Anantapur",
      "furnishing_status": "semi",
      "bathroom": 2,
      "floor": 1,
      "age_of_building": 10,
      "bike_parking": true,
      "car_parking": false,
      "rent": 8000,
      "advance": 25000,
      "image": "https://source.unsplash.com/featured/?house",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
      "id": 3,
      "name": "Single Bedroom House, Lakshmi Nagar",
      "property_type": "Rent",
      "bedrooms": 1,
      "sqft": 2400,
      "street": "Lakshmi Nagar",
      "city": "Anantapur",
      "furnishing_status": "semi",
      "bathroom": 1,
      "floor": 1,
      "age_of_building": 10,
      "bike_parking": true,
      "car_parking": false,
      "rent": 6000,
      "advance": 12000,
      "image": "https://source.unsplash.com/featured/?building",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
      "id": 4,
      "name": "Triple Bedroom House, Lakshmi Nagar",
      "property_type": "Rent",
      "bedrooms": 3,
      "sqft": 2400,
      "street": "Lakshmi Nagar",
      "city": "Anantapur",
      "furnishing_status": "semi",
      "bathroom": 1,
      "floor": 1,
      "age_of_building": 10,
      "bike_parking": true,
      "car_parking": true,
      "rent": 6000,
      "advance": 12000,
      "image": "https://source.unsplash.com/featured/?room",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    }
  
  

]
    }
   
  
 }
}
</script>

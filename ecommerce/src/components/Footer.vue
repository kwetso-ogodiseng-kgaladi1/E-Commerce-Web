<template>
  <v-footer color="#1F1F1F" class="d-flex flex-column">
    <div class="px-4 py-2 bgTop  w-100">
      <v-toolbar color="transparent" height="40">
       <span class="mr-2">Refund Policy</span>
       <span>Privacy Policy</span>
       <v-spacer></v-spacer>
       <v-icon>mdi mdi-cash-multiple</v-icon>
       <v-icon>mdi mdi-currency-usd</v-icon>
       <v-icon>mdi mdi-cash-100</v-icon>
      </v-toolbar>
    </div>
    <div class=" d-flex w-100 bgMidum px-4 pb-10">
<v-row>
  <v-col col="12" sm="3">
    <h4 class="mt-2">Connect With us</h4>
    <span class="text-caption">Facebook</span><br>
     <span class="text-caption">Youtube</span><br>
    <span class="text-caption">Twitter</span><br>
    <span class="text-caption">Whatsapp</span><br>
    <span class="text-caption">Instagram</span><br>
  </v-col>
  <v-col col="12" sm="3">
    <h4 class="mt-2">More About Store</h4>
    <span class="text-caption">Multiple Branches</span><br>
    <span class="text-caption">Take Franchise</span><br>
    <span class="text-caption">Scheduled Offers</span><br>
    <span class="text-caption">Visit Kitchen</span><br>
    <span class="text-caption">Meet Our Team</span><br>
  </v-col>
  <v-col col="12" sm="3">
    <h4 class="mt-2">Offline Store</h4>
    <span class="text-caption">North West, Rustenburg</span><br>
    <span class="text-caption">0393</span><br>
    <span class="text-caption">Contact: +27 72 461 6904 </span><br>
    <span class="text-caption">Email: kgaladikwetso@gmail.com</span>
  </v-col>
  <v-col col="12" sm="3">
    <h4 class="mt-2">Location</h4>
    <v-img src="/map.webp" height="150" class="ml-n16"></v-img>
  </v-col>
</v-row>
    </div>

    <div class="px-4 py-2 bgTop text-center w-100">
      <v-icon class="mr-2">mdi mdi-copyright</v-icon>{{ new Date().getFullYear() }} — <strong>Kwetso's Inn</strong>
    </div>

    </v-footer>
  </template>

  <script>
  export default {};
  </script>

  <style>

.v-footer {
  padding: 0 0 !important;
}
.bgTop{
  background-color:#111111;
}
.bgMidum{
  background-color:#1F1F1F;
}
</style>

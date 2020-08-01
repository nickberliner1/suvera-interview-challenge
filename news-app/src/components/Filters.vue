<template>

  <v-navigation-drawer v-model="drawer" fixed app clipped class="drawer-style"   id="style-1">

    <v-list dense class="pt-3  white--text" >
      <v-list-tile
        v-for="source in sources"
        :key="source.id"
        @click="selectSource(source.id)"
      >
        

        <v-list-tile-content>
          <v-list-tile-title>{{ source.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    
  </v-navigation-drawer>

</template>


<script>
import axios from 'axios'

export default {

    props: ['source'],

    data: () => ({
        sources: [],
    }),

    methods: {
        selectSource(source){
            this.$emit('selectsource',source)
        }
    }
}

</script>

<style scoped>
    
    #style-1::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
    }

    #style-1::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    .drawer-style {
        background-color: #2196F3 !important;
        border-color: #2196F3 !important;
    }
</style>



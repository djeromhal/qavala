<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <!-- <ul>
          <li v-for="candle in candles" :key="candle.minute" >{{ candle.high }}</li>
        </ul> -->
        <Chart />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart'

export default {
  components: {
    Chart
  },
  async fetch({store}) {
    if(store.getters['candles'].length === 0) {
      await store.dispatch('fetch')
    }
  },
  data: () => ({
    pageTitle: 'Page'
  }),
  computed: {
    candles(){
      return this.$store.getters['candles']
    }
  }
}
</script>

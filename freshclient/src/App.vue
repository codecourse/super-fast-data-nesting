<template>
  <div class="app container">
    <AppComments
      :comments="comments"
    />
  </div>
</template>

<script>
  import AppComments from '@/components/comments/AppComments'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: {
      AppComments
    },
    
    computed: {
      ...mapGetters({
        comments: 'comments'
      })
    },

    methods: {
      ...mapActions({
        getComments: 'getComments'
      })
    },

    mounted () {
      this.getComments()
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 40px 0;
  }
</style>

<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ comment.user.name }}</strong>
          <br>
          <strong>{{ comment.id }}</strong> {{ comment.body }}
        </p>
      </div>

      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            Reply
          </a>
          <a class="level-item">
            Edit
          </a>
          <a class="level-item" @click.prevent="deleteComment(comment)">
            Delete
          </a>
        </div>
      </nav>

      <AppComment
        v-for="child in children(comment.id)"
        :key="child.id"
        :comment="child"
      />
    </div>
  </article>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AppComment',

    props: {
      comment: {
        required: true,
        type: Object
      }
    },

    computed: {
      ...mapGetters({
        children: 'children'
      })
    },

    methods: {
      ...mapActions({
        deleteComment: 'deleteComment'
      })
    }
  }
</script>
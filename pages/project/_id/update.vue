<template>
  <is-main-template
    title="project_edit"
    :title-params="{ entity: item && item.name }"
  >
    <project-form :handle-submit="onSendForm" :item="item" />
  </is-main-template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProjectForm from '../Form'

export default {
  components: {
    ProjectForm,
  },
  layout: 'dashboard',
  middleware: 'authenticated',
  head() {
    return {
      title: 'Homepage title',
    }
  },
  computed: {
    ...mapGetters({
      item: 'project/item',
    }),
  },
  created() {
    this.getItem(this.$route.params.id)
  },
  beforeDestroy() {
    this.reset()
  },
  methods: {
    ...mapActions({
      getItem: 'project/getItem',
      update: 'project/update',
      reset: 'project/reset',
    }),
    onSendForm() {
      this.update()
        .then((item) => {
          this.$router.push({
            name: 'project-id-show___en',
            params: { id: item.id },
          })
        })
        .catch()
    },
  },
}
</script>

<template>
  <q-item :to="link" exact v-ripple>

    <q-item-section avatar v-if="icon">
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>

  </q-item>
</template>

<script>
export default {
  name: "MainMenu",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    },

    link: {
      type: String,
      default: "/"
    },

    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

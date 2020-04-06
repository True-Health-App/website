<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          elevated
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          color="secondary"
        />

        <q-toolbar-title>
          True Health App
        </q-toolbar-title>

        <div>
          <img src="statics/icons/favicon-32x32.png"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      behavior="mobile"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          
        </q-item-label>
        <MainMenu
          v-for="link in menuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-primary">
      <router-view class="bg-white full-height" style="margin: 2px; bottom: 4px" />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'
import MainMenu from 'components/MainMenu'

export default {
  name: 'MainLayout',

  components: {
    // EssentialLink,
    MainMenu
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        /*
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        }
      */ 
      ],
      menuLinks: [
        {
          title: "Home",
          caption: "https://TrueHealth.app",
          icon: "explore",
          link: "/"
        },
        {
          title: "About Us",
          caption: "https://TrueHealth.app/AboutUs",
          icon: "people_outline",
          link: "/about"
        },
        {
          title: "Contact Us",
          caption: "https://TrueHealth.app/ContactUs",
          icon: "contact_mail",
          link: "/contact"
        },
        {
          title: "GitHub",
          caption: "https://TrueHealth.app/GitHub",
          icon: "forum",
          link: "/gitHub"
        },
        
        /*
        monetization_on
        {
          title: "Login",
          caption: "https://TrueHealth.app/Login",
          icon: "lock_open",
          link: "/login"
        },
        {
          title: "Photos",
          caption: "https://TrueHealth.app/Photos",
          icon: "insert_photo",
          link: "/photos"
        },
        {
          title: "Settings",
          caption: "https://TrueHealth.app/Settings",
          icon: "settings",
          link: "/settings"
        },
        */ 
        {
          title: "Video",
          caption: "https://TrueHealth.app/Video",
          icon: "video_library",
          link: "/videos"
        }
      ],
    }
  }
}
</script>

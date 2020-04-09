<template>
  <!-- <q-page class="fit flex flex-center column" padding style="flex-wrap: nowrap"> -->
  <q-page class="fit" padding>
    <q-resize-observer @resize="onResize" />
    <q-splitter :horizontal="!isLandscape" class="fit" v-model="splitterModel">
      <template class="fit" v-slot:before>
        <div class="flex flex-center column q-pa-lg">
          <h4 class="q-ma-xs">Dr. Gary & Belinda Fettke Podcast #16</h4>
          <h5 class="q-ma-sm">
            Interview by:
            <a href="https://www.youtube.com/channel/UCPn4FsiQP15nudug9FDhluA" target="_blank">Ivor Cummins</a>
          </h5>
          <div class="iframe-container">
            <youtube @ended="ended" @paused="paused" @playing="playing" @ready="ready" video-id="p0VwjsZJmYo"></youtube>
            <!-- https://youtu.be/p0VwjsZJmYo -->
            <!-- <iframe
              allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
              allowfullscreen
              frameborder="0"
              src="https://www.youtube.com/embed/p0VwjsZJmYo"
            width="100%"></iframe>-->
          </div>
        </div>
      </template>
      <template v-slot:separator>
        <div :class="isLandscape ? 'landscape' : 'portrait'" class="flex flex-center" id="pageSeparator">
          <q-avatar color="primary" icon="drag_indicator" size="40px" text-color="white" />
        </div>
      </template>
      <template v-slot:after>
        <q-scroll-area class="fit" ref="transcript">
          <!-- @mousedown="pause"
            @mouseup="onTextChange" 
          contenteditable="false"-->
          <q-toolbar>
              
          </q-toolbar>
          <p class="q-pa-lg" ref="transcriptText">{{transcriptHTML}}</p>
        </q-scroll-area>
      </template>
    </q-splitter>
    <!-- <q-page-sticky :offset="fabPos" class="z-top" position="top-right">
      <q-fab
        :disable="draggingFab"
        @click="editClicked"
        color="accent"
        direction="right"
        icon="create"
        ref="editFab"
        v-touch-pan.prevent.mouse="moveFab">
        <q-btn-group ref="editBtnGroup" rounded v-touch-pan.prevent.mouse="moveFab">
          <q-btn
            :text-color="(activeEditBtn == 'linkBtn') ? 'black': 'white'"
            @click="linkClicked('linkBtn')"
            color="amber"
            glossy
            icon="link"
            ref="linkBtn"
            rounded>
            <q-tooltip
              :delay="1000"
              content-class="bg-accent shadow-4"
              content-style="font-size: 16px">Create a LINK to more information.</q-tooltip>
          </q-btn>
          <q-btn
            text-color="red"
            @click="linkOffClicked('linkOffBtn')"
            color="amber"
            glossy
            icon="link_off"
            ref="linkOffBtn"
            rounded>
            <q-tooltip
              :delay="1000"
              content-class="bg-accent shadow-4"
              content-style="font-size: 16px">Remove a LINK.</q-tooltip>
          </q-btn>
          <q-btn
            :text-color="(activeEditBtn == 'boldBtn') ? 'black': 'white'"
            @click="boldClicked('boldBtn')"
            color="amber"
            glossy
            icon="format_bold"
            ref="boldBtn"
            rounded>
            <q-tooltip
              :delay="1000"
              content-class="bg-accent shadow-4"
              content-style="font-size: 16px">BOLD the selection</q-tooltip>
          </q-btn>
          <q-btn
            :text-color="(activeEditBtn == 'redBtn') ? 'black': 'white'"
            @click="redClicked('redBtn')"
            color="red"
            glossy
            icon="format_paint"
            ref="redBtn"
            rounded>
            <q-tooltip
              :delay="1000"
              content-class="bg-accent shadow-4"
              content-style="font-size: 16px">Color the text RED</q-tooltip>
          </q-btn>
          <q-btn
            :text-color="(activeEditBtn == 'blueBtn') ? 'black': 'white'"
            @click="blueClicked('blueBtn')"
            color="blue"
            glossy
            icon="format_paint"
            ref="blueBtn"
            rounded>
            <q-tooltip
              :delay="1000"
              content-class="bg-accent shadow-4"
              content-style="font-size: 16px">Color the text BLUE</q-tooltip>
          </q-btn>
          <q-btn
            :text-color="(activeEditBtn == 'greenBtn') ? 'black': 'white'"
            @click="greenClicked('greenBtn')"
            color="green"
            glossy
            icon="format_paint"
            ref="greenBtn"
            rounded>
            <q-tooltip
              :delay="1000"
              content-class="bg-accent shadow-4"
              content-style="font-size: 16px">Color the text GREEN</q-tooltip>
          </q-btn>
          <q-btn
            :text-color="(activeEditBtn == 'saveBtn') ? 'black': 'white'"
            @click="saveClicked('saveBtn')"
            color="amber"
            glossy
            icon-right="save"
            ref="saveBtn"
            rounded>
            <q-tooltip
              :delay="1000"
              content-class="bg-accent shadow-4"
              content-style="font-size: 16px">SAVE your changes</q-tooltip>
          </q-btn>
        </q-btn-group>
      </q-fab>
    </q-page-sticky>-->
  </q-page>
</template>

<script>
import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);

export default {
  name: "DrFettke_116",
  data() {
    return {
      activeEditBtn: null,
      //   dirName: null,
    //   fabPos: [398, -29], // TODO set the math on this
    //   draggingFab: false,
      isLandscape: true,
      player: null,
      currentTime: 0, //seconds
      duration: 0,
      percentComplete: 0,
      scrollPosition: 1000,
      scrollTimer: null,
      splitterModel: 50, // start at 50%
      transcriptHTML: null
    };
  },
  mounted() {
    let key = this.$route.path + ".transcript";
    if (this.$q.localStorage.getItem(key)) {
      this.transcriptHTML = this.$q.localStorage.getItem(key);
    //   $vm.transcriptHTML = $vm.$q.localStorage.getItem(key);
    } else {
      this.$axios
        .get("statics/transcripts/Fettke_16.html")
        .then(response => {
          this.transcriptHTML = response.data;
          this.$q.localStorage.set(
            this.$route.path + ".transcript",
            this.transcriptHTML
          );
        })
        .catch(() => {
          this.$q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem"
          });
        });
    }
  },
  computed: {},
  methods: {
    editClicked() {
      // change transcript to edit mode
      if (this.$refs.editFab.showing) {
        this.$refs.transcriptText.setAttribute("contenteditable", true);
        console.log("editClicked true");
      } else {
        this.$refs.transcriptText.removeAttribute("contenteditable");
        console.log("editClicked false");
      }
    },
    toggleActiveEditBtn(btn) {
      if (this.activeEditBtn == null) {
        this.activeEditBtn = btn;
      } else if (this.activeEditBtn == btn) {
        this.activeEditBtn = null;
      } else {
        this.activeEditBtn = btn;
      }
    },
    linkClicked(btn) {
      console.log("linkClicked btn: ", btn);
      this.toggleActiveEditBtn(btn);
      this.addLink();
    },
    linkOffClicked(btn) {
      console.log("linkOffClicked btn: ", btn);
      this.toggleActiveEditBtn(btn);
      document.execCommand("unlink");
    },
    boldClicked(btn) {
      console.log("boldClicked");
      this.toggleActiveEditBtn(btn);
    },
    redClicked(btn) {
      console.log("redClicked");
      this.toggleActiveEditBtn(btn);
    },
    blueClicked(btn) {
      console.log("blueClicked");
      this.toggleActiveEditBtn(btn);
    },
    greenClicked(btn) {
      console.log("greenClicked");
      this.toggleActiveEditBtn(btn);
    },
    saveClicked(btn) {
      console.log("saveClicked");
      this.toggleActiveEditBtn(btn);
    },

    moveFab(ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;

      this.fabPos = [this.fabPos[0] - ev.delta.x, this.fabPos[1] + ev.delta.y];
    },
    animateScroll() {
      this.$refs.transcript.setScrollPosition(this.scrollPosition, 1000);
      //   this.position = Math.floor(Math.random() * 1001) * 20;
    },
    getPercentComplete() {
      this.currentTime = this.player.getCurrentTime();
      this.percentComplete = this.currentTime / this.duration;
      if (this.percentComplete < 0.01) {
        this.percentComplete = 0;
      } else if (this.percentComplete > 0.095) {
        this.percentComplete = 1;
      }
      console.log("percentComplete: ", this.percentComplete);
      this.scrollPosition =
        this.percentComplete * this.$refs.transcript.scrollSize * 0.9;
      this.animateScroll();
    },
    startScrollTimer() {
      this.scrollTimer = setInterval(() => {
        this.getPercentComplete();
      }, 1000);
    },
    stopScrollTimer() {
      clearInterval(this.scrollTimer);
    },
    ready(event) {
      this.player = event.target;
      this.duration = Math.round(this.player.getDuration());
    },
    playing(event) {
      this.startScrollTimer();
      console.log("playing");
    },
    paused() {
      console.log("paused 2");
      this.stopScrollTimer();
    },
    ended() {
      this.stopScrollTimer();
    },
    stop() {
      console.log("Stopped");
      this.player.stopVideo();
      this.stopScrollTimer();
    },
    pause() {
      console.log("paused");
      this.player.pauseVideo();
      this.stopScrollTimer();
    },
    onResize() {
      console.log(
        "resized window.screen.orientation.type: ",
        window.screen.orientation.type
      );
      if (window.screen.orientation.type == "landscape-primary") {
        this.isLandscape = true;
      } else {
        this.isLandscape = false;
      }
    },
    onTextChange(e) {
      //   console.log("text Selected e: ", e);
      //   console.log("node = this.$refs.transcript: ", this.$refs.transcript);
      const selectionNode = window.getSelection();
      const selection = selectionNode.toString();
      if (selection.length > 1) {
        console.log("selection.length: ", selection.length);
        this.addLink();
        selectionNode.removeAllRanges();
      }

      //   const range = document.createRange();
      //   range.selectNodeContents(this.$refs.transcript);
      //   selection.removeAllRanges();
      //   selection.addRange(range);
      /*
      Works!
      document.execCommand("styleWithCSS", false, true);
      document.execCommand("foreColor", false, "hotpink");
      */
      //  document.execCommand('bold');
      // document.execCommand('createLink', false, 'http://google.ca');
    },
    addLink() {
      var linkURL = prompt("Enter a URL:", "https://");
      if (linkURL == null) {
        return;
      }
      var newLink = document.execCommand("createLink", false, linkURL);
      this.addTarget();
    },
    addTarget() {
      let links = this.$refs.transcriptText.getElementsByTagName("a");
      for (var link of links) {
        link.target = "_blank";
      }
      // HACK better to find the right link?
    }
  }
};
</script>

<style lang="scss">
.q-fab__actions .q-btn {
  margin: 0;
  height: 42px;
}
.q-splitter--vertical > .q-splitter__separator {
  width: 0.5em;
}
.q-splitter--horizontal > .q-splitter__separator {
  height: 0.5em;
}
.q-splitter__separator {
  background-color: white;
}
#pageSeparator {
  background-color: $primary;
  //   margin: .5em;
}
#pageSeparator.landscape {
  width: 0.5em;
  height: 100%;
}
#pageSeparator.portrait {
  height: 0.5em;
  width: 100%;
  flex-wrap: nowrap;
}
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
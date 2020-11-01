<template>
  <div id="app" class="container container-fluid">
    <MainHeader/>
    <main class="main">
      <div class="row at-row">
        <div class="col-24">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";

export default {
  name: "App",
  components: {
    MainHeader
  }
}
</script>

<style>
:root {
  --s1: 1rem;
  --s2: 2rem;
  --s4: 4rem;
  --primary-color: #6190E8;
}

.is-pointer {
  cursor: pointer;
}

.at-card__head {
  line-height: normal !important;
  height: auto !important;
  padding: var(--s1) 12px !important;
}

.main {
  margin-top: var(--s4);
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .3s ease;
}

.fade-leave {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity .3s ease;
  opacity: 0;
}
</style>
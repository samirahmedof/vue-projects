<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" style="overflow: hidden">
          <transition
            enter-active-class="animate__animated animate__fadeInLeft animate__faster"
            leave-active-class="animate__animated animate__fadeOutRight animate__faster"
            mode="out-in"
          >
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>


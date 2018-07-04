<template>
  <div class="" style="text-align: left;">
    <div class="app-navbar blue">
      <a class="app-navbar-label" style="margin-right: 20px;" href="javascript:void(0);" @click="fwdToHelp()">
        <i class="fa fa-star-o" aria-hidden="true"></i> client-side
      </a>

      <button class="app-navbar-btn" href="javascript:void(0);" @click="fwdToClientConnectivity()">
        Connectivity
      </button>

      <!-- queries -->
      <button class="app-navbar-btn" href="javascript:void(0);">
        Queries
        <div class="app-navbar-item">
          <div class="app-navbar-item-block">
            <a href="javascript:void(0);" @click="fwdToClientMatchAllQuery()" >match all</a>
          </div>
          <div class="app-navbar-item-block">
            <a href="javascript:void(0);" >match</a>
          </div>
        </div>
      </button>

      <!-- aggregations -->
      <a class="app-navbar-btn" href="javascript:void(0);">
        Aggregations
      </a>

      <a class="app-navbar-label app-navbar-label-right" href="javascript:void(0);" @click="fwdToHome()">
        <i class="fa fa-home" aria-hidden="true"></i>
      </a>
    </div>

    <!-- sub view -->
    <router-view></router-view>
  </div>
</template>

<style>
.main-container {
  margin-top: 20px;
  margin-left: 12px;
  margin-right: 12px;
}
.app-navbar {
  overflow: hidden;
  padding: 6px;
  box-shadow: 1px 2px 5px #999;
}
.app-navbar-label {
  float: left;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 6px 8px;
  text-decoration: none;
}
.app-navbar-label:hover {
  color: lawngreen;
}
.app-navbar-label-right {
  float: right;
}

.app-navbar-btn {
  float: left;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 6px 8px;
  text-decoration: none;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  overflow: hidden;
}
.app-navbar-btn:hover {
  cursor: pointer;
  color: lawngreen;
}

.app-navbar-item {
  border-radius: 4px;
  display: none;
  position: absolute;
  margin-top: 4px;
  padding: 4px;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.app-navbar-btn:hover .app-navbar-item {
  display: block;
}
.app-navbar-item-block {
  padding: 4px 4px;
  text-align: left;
}
</style>

<script>
function ModelClientSidePlaygroundMain () {
  return {}
}

export default {
  name: 'client-side-playground-main',
  data: function () {
    return new ModelClientSidePlaygroundMain()
  },
  methods: {
    fwdToHelp: function () {
      this.$router.push({ name: 'ClientSideHelp' })
    },
    fwdToHome: function () {
      this.$router.push({ name: 'AppSelect' })
    },
    fwdToClientConnectivity: function () {
      this.$router.push({ name: 'ClientSideConnect' })
    },
    fwdToClientMatchAllQuery: function () {
      this.$router.push({ name: 'ClientSideMatchAllQ' })
    }
  }
}
</script>


<template>
  <div class="select-app-container">
    <h3><i class="fa fa-star-o" aria-hidden="true"></i> Select an app <i class="fa fa-star" aria-hidden="true"></i></h3>
    <div class="container container-fluid selecttion-container">
      <div class="row">
        <div class="col-6 col-sm-6 col-md-6" @click="fwdToView('ClientSideMain')">
          <span class="blue-text option-caption">client-side</span> playground app
        </div>
        <div class="col-6 col-sm-6 col-md-6" @click="fwdToView('ServerSideMain')">
          <span class="danger-ic option-caption">server-side</span> playground app
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.select-app-container {
  margin-top: 60px;
  text-align: center;
}
.selecttion-container {
  margin-top: 80px;
}
.option-caption {
  font-size: 1.2em;
  font-weight: bolder;
}
</style>

<script>
function ModelAppSelect () {
  return {}
}

export default {
  name: 'app-select',
  data: function () {
    return ModelAppSelect()
  },
  methods: {
    test: function () {
      return 'this is a test!'
    },
    fwdToView: function (viewName) {
      this.$router.push({ name: viewName })
    }
  }
}
</script>

<template>
  <div class="main-container">
    <div class="container-fluid area-container">
      <!-- title -->
      <div class="title-label">connectivity</div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="md-form">
            <input @keyup="formCode()" type="text" class="form-control" v-model="hosts" placeholder="elasticsearch host(s) address" />
          </div>
          <div class="md-form">
            <select @change="formCode()" class="form-control" v-model="apiVersion">
              <option value="">pick api version</option>
              <option value="6.3">6.3</option>
              <option value="6.2">6.2</option>
              <option value="6.1">6.1</option>
              <option value="6.0">6.0</option>
            </select>
          </div>
          <div class="md-form">
            <input @keyup="formCode()" type="text" class="form-control" v-model="maxRetries" placeholder="max connectivity retries before returning error (default is 3)" />
          </div>
          <select @change="formCode()" class="form-control" v-model="selector">
            <option value="">way to pick a connection from pool</option>
            <option value="roundRobin">round robin</option>
            <option value="random">random</option>
          </select>
        </div>
        <div class="col-md-6 col-sm-12">
          <!-- text box like grid -->
          <div class="result-container-btn">
            <button class="btn btn-sm btn-grey" title="copy code" @click="copyToClipboard()">
              <i class="fa fa-copy" aria-hidden="true"></i>
            </button>
          </div>
          <div class="result-container">
            <!-- actual content lies here -->
            <div class="result-inner-container" v-html="code">
            </div>
          </div>
          <!-- added this hidden element for "copy" -->
          <input type="text" id="hiddenCode" style="display: none;">
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.main-container {
  margin: 12px 12px 30px 12px;
}
.title-label {
  font-size: 22px;
  font-weight: bolder;
  margin-bottom: 12px;
}

.area-container {
  max-width: 800px;
}

.result-container {
  border-radius: 8px;
  border: 1px solid #ccc;
  height: 300px;
  overflow: scroll;
}
.result-inner-container {
  padding: 4px;
  overflow: hidden;
}
.result-container-btn {
  text-align: right;
  margin-bottom: 4px;
}
</style>

<script>
function ModelClientSideConnect () {
  return {
    apiVersion: '',
    hosts: [ ],
    maxRetries: null,
    selector: '',

    // actual code to display
    code: ''
  }
}
export default {
  name: 'client-side-connect',
  data: function () {
    return ModelClientSideConnect()
  },
  methods: {
    // return the elasticsearch instance / object
    getES: function () {
      return window.jQuery.es
    },
    formCode: function () {
      // let code = 'var client = $.es.Client({' + '<br/>&nbsp;&nbsp;&nbsp;host: "' + this.hosts + '" ' + '})'
      let tab = '&nbsp;&nbsp;&nbsp;&nbsp;'
      let code = 'var client = $.es.Client({'
      let hasContentBuilt = false

      if (this.hosts && this.hosts !== '') {
        code += '<br/>' + tab + 'hosts: "' + this.hosts + '",'
        hasContentBuilt = true
      }
      if (this.apiVersion !== '') {
        code += '<br/>' + tab + 'apiVersion: "' + this.apiVersion + '",'
        hasContentBuilt = true
      }
      if (this.maxRetries) {
        if (!isNaN(this.maxRetries)) {
          code += '<br/>' + tab + 'maxRetries: ' + this.maxRetries + ','
          hasContentBuilt = true
        }
      }
      if (this.selector !== '') {
        code += '<br/>' + tab + 'selector: "' + this.selector + '",'
        hasContentBuilt = true
      }

      if (hasContentBuilt) {
        // remove the last character
        code = code.substring(0, code.length - 1)
      }
      code += '<br/>})'

      this.code = code
    },
    copyToClipboard: function () {
      // hiddenCode
      let code = 'var client = $.es.Client({'
      let hasContentBuilt = false

      if (this.hosts && this.hosts.length > 0) {
        code += '"hosts": "' + this.hosts + '",'
      }
      if (this.apiVersion !== '') {
        code += '"apiVersion": "' + this.apiVersion + '",'
      }
      if (this.maxRetries) {
        if (!isNaN(this.maxRetries)) {
          code += '"maxRetries": ' + this.maxRetries + ','
          hasContentBuilt = true
        }
      }
      if (this.selector !== '') {
        code += '"selector": "' + this.selector + '",'
        hasContentBuilt = true
      }

      if (hasContentBuilt) {
        // remove the last character
        code = code.substring(0, code.length - 1)
      }
      code += '})'

      // set value to the hidden html element
      let jCode = window.jQuery('#hiddenCode')

      jCode.val(code)
      jCode.css({ display: 'block' })
      jCode[0].select()
      document.execCommand('copy')
      jCode.css({ display: 'none' })
    }
  }
}
</script>

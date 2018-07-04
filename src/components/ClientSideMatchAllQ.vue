<template>
  <div class="main-container">
    <div class="container-fluid area-container">
      <!-- title -->
      <div class="title-label">match-all query</div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div style="text-align: justify; margin-top: 16px;">
            for match-all query, there is no specific options available.
            It is equivalent to "select * from some_table" in the sql world.
          </div>
          <div class="md-form">
            <input @keyup="formCode()" type="text" class="form-control" v-model="index" placeholder="elasticsearch index to run query" />
          </div>
          <div class="md-form">
            <input @keyup="formCode()" type="text" class="form-control" v-model="type" placeholder="document type (depreacted and removed by es7.0)" />
          </div>
          <!-- action button -->
          <button class="btn btn-green" style="margin-top: 8px;" @click="runQuery()">run query</button>
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
            <div class="result-inner-container" v-html="codeForDisplay">
            </div>
          </div>
          <!-- added this hidden element for "copy" -->
          <input type="text" id="hiddenCode" style="display: none;">
        </div>
        <!-- result row -->
        <div class="col-md-12 col-sm-12">
          results
          <div class="query-result-container">
            <div class="query-result-inner-container">
              <tree-view :data="queryResult" :options="{maxDepth: 3}"></tree-view>
            </div>
          </div>
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
    height: 180px;
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
  .query-result-container {
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: scroll;
  }
  .query-result-inner-container {
    overflow: hidden;
  }
</style>

<script>
function ModelClientSideMatchAllQ () {
  return {
    index: '',
    type: '',

    // code to display
    codeForDisplay: '',
    codeForHidden: '',
    codeForRun: {},

    queryResult: null
  }
}
export default {
  name: 'client-side-match-all-q',
  data: function () {
    return new ModelClientSideMatchAllQ()
  },
  methods: {
    getIndexValue: function () {
      if (this.index !== '') {
        return this.index
      } else {
        return '/'
      }
    },
    getDocTypeValue: function () {
      if (this.type !== '') {
        return this.type
      } else {
        return ''
      }
    },
    formCode: function () {
      let tab = '&nbsp;&nbsp;&nbsp;&nbsp;'
      this.codeForDisplay = this.formCodeDisplay(tab)
      this.codeForHidden = this.formCodeHidden(tab)
      this.codeForRun = this.formCodeRun(tab)
    },
    formCodeDisplay: function (t) {
      let c = '{'
      let index = this.getIndexValue()
      let docType = this.getDocTypeValue()

      if (index !== '/') {
        c += '<br/>' + t + '"index": "' + index + '",'
      }
      if (docType !== '') {
        c += '<br/>' + t + '"type": "' + docType + '",'
      }
      // body (hard code will do)
      c += '<br/>' + t + '"body": {'
      c += '<br/>' + t + t + '"query": {'
      c += '<br/>' + t + t + t + '"match_all": {'
      c += '<br/>' + t + t + t + '}'
      c += '<br/>' + t + t + '}'
      c += '<br/>' + t + '}'
      c += '<br/>' + '}'

      return c
    },
    formCodeHidden: function (t) {
      let c = '{'
      let index = this.getIndexValue()
      let docType = this.getDocTypeValue()

      if (index !== '/') {
        c += '"index": "' + index + '",'
      }
      if (docType !== '') {
        c += '"type": "' + docType + '",'
      }
      // body (hard code will do)
      c += '"body": {'
      c += '"query": {'
      c += '"match_all": {'
      c += '}'
      c += '}'
      c += '}'
      c += '}'

      return c
    },
    formCodeRun: function (t) {
      let c = {}
      let index = this.getIndexValue()
      let docType = this.getDocTypeValue()

      if (index !== '/') {
        c['index'] = index
      }
      if (docType !== '') {
        c['type'] = docType
      }
      // body (hard code will do)
      c['body'] = {
        'query': {
          'match_all': {}
        }
      }
      return c
    },
    copyToClipboard: function () {
      let isOk = window.UIUtil.copyContentToClipboard(window.jQuery, 'hiddenCode', this.codeForHidden)
      if (!isOk) {
        console.log('something is wrong during copying code to clipboard')
      }
    },
    runQuery: function () {
      // get the client from store (might be null... though should not)
      let client = this.$store.state.client.clientSideESClient

      if (client !== null) {
        client.search(this.codeForRun, this.queryHandler)
      } else {
        alert('client is NOT valid, init it on "connectivity" page first~')
      } // end -- if (client is valid)
    },
    queryHandler: function (err, res) {
      if (err) {
        console.log(err)
        alert('error occurred~')
      } else {
        this.queryResult = res
      }
    }
  }
}
</script>

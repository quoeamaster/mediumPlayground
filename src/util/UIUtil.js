// common methods (but not reachable outside of this scope

export default {
  // method to copy the given html element's content (under the elementId) to the clipboard
  copyContentToClipboard: function (jQueryObj, elementId, optionalContent) {
    let jElement = jQueryObj('#' + elementId)

    if (jElement.length > 0) {
      // set content if given
      if (optionalContent) {
        jElement.val(optionalContent)
      }
      // copy to clipboard
      jElement.css({ display: 'block' })
      jElement[0].select()
      let isOk = document.execCommand('copy')
      jElement.css({ display: 'none' })

      return isOk
    } // end -- if (jElement is valid and has at least 1 element)
    return false
  }
}

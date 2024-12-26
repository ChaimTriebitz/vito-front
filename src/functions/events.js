export const events = {
   listen,
   showMsg:{
      success: (txt) => _showMsg(txt, 'success'),
      error: (txt) => _showMsg(txt, 'error'),
      warning: (txt) => _showMsg(txt, 'warning')
   }
}



function listen(eventName, listener) {

   const callListener = ({ detail }) => {
      listener(detail)
   }

   window.addEventListener(eventName, callListener)

   return () => {
      window.removeEventListener(eventName, callListener)
   }
}

function _emit(eventName, data) {
   window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}

function _showMsg(txt, type = '') {
   _emit('show-msg', { txt, type })
}
// const showMsg = {

// }


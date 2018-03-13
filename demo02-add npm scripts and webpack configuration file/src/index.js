import _ from 'lodash' //import is es6, require is es5

function component() {
  var element = document.createElement('div')

  // lodash works by import node module
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())

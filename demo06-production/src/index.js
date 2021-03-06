import _ from 'lodash'
import printMe from './print.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component() {
  var element = document.createElement('div')

  var btn = document.createElement('button')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'click me and check the '
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

document.body.appendChild(component())

/* eslint-disable */
import netrol from './callsever/index'

// netrol('error', { a: 233 })
// .then(res => {
//   console.log(res)
// })

// netrol('timeout', { a: 233 })
// .then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.log(err.toJSON())
// })
netrol('post1', { a: 233 })
.then(res => {
  console.log(res)
})

document.body.style.height = '100vh'
document.body.addEventListener('click', async function () {
  try {
    let res = await netrol('timeout', { a: 233 })
    console.log(res)
  } catch (err) {
    console.log(err.toJSON())
  }
  // .then(res => {
  //   console.log(res)
  // })
})
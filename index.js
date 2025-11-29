/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/

const activity = document.getElementById('activity')
const activityBtn = document.getElementById('activity-btn')

activityBtn.addEventListener('click', function() {
  document.getElementById('bot-name').textContent = '🥳FunBot🥳'
  document.querySelector('body').classList.add('fun-bot')
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
    })
})

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("activity-name").textContent = data.activity
//     })
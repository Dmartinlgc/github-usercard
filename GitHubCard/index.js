/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/  
    import axios from 'axios'
    axios.get('https://api.github.com/users/Dmartinlgc')
    .then(response =>{
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
    .finally(()=>{
      console.log('done')
    })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards')

function gitHub(gitUser){
  axios.get(`https://api.github.com/users/${gitUser}`)
  .then(response =>{
    const card = myCardMaker(response.data)
    cards.appendChild(card)
  })
  .catch(error =>{
    console.log(error.message)
  })
}
gitHub('Dmartinlgc')
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach(item =>{
  gitHub(item)
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function myCardMaker(userObj){
  //declarations and class names
  const card = document.createElement('div')
  card.className = 'card'
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  cardInfo.className = 'card-info'
  const name =document.createElement('h3')
  name.className = 'name'
  const userName =document.createElement('p')
  userName.className = 'username'
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
 //passing values 
  image.src = userObj.avatar_url
  name.textContent = userObj.name
  userName.textContent = userObj.login
  location.textContent = userObj.location
  profile.textContent = userObj.profile
  link.setAttribute('href', userObj.url)
  link.textContent = `${userObj.url}`
  followers.textContent = `followers: ${userObj.followers}`
  following.textContent = `following: ${userObj.following }`
  // appending to DOM
  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(link)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  return card
  
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

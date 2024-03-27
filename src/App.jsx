import './App.css'
import Nav from './Component/Navbar'
// import  New2 from './Component/CompileNew.jsx'
// import Pop from './Component/CompilePopular.jsx'
import New from './Component/Newly_added'
import Beauty from './assets/Images/beautiful_day.jpg'
import Poor from './assets/Images/poor_things.png'
import vincent from './assets/Images/saint-vincent.jpg'
import Wish from './assets/Images/Those-Who-Wish-Me-Dead.jpg'
import Thirteen from './assets/Images/thirteen.jpg'
import VincentImage from './assets/Images/vicent-image.png'
import PoorImage from './assets/Images/poor-image.png'
import BeautifulImage from './assets/Images/A_Beautiful-image.png'
import ThirteenImage from './assets/Images/thirteen-image.png'
import WishImage from './assets/Images/wish-image.png'
import Popular from './Component/Popular'
import Dune from './assets/Images/dune.jpg'
import ATeam from './assets/Images/A-team.webp'
import LostCity from './assets/Images/Lost-city.jpg'
import Black from './assets/Images/black-phone.jpg'
import Kill from './assets/Images/kill-room.jpg'



function App () {
  
  return(
    <div>
      <Nav></Nav>
      <h1>Movies</h1>
      <h3>NEWLY ADDED MOVIES</h3>

      <div id="img_div">
          
        <New 
          img={Poor}
          image = {PoorImage}
          genre='R.Comedy,Drama.Movie(2023)' 
          color = 'rgba(49, 66, 29, 0)'
>
          
        </New>
  
          <New 
            img={Thirteen}
            image ={ThirteenImage}
            genre ='R.Comedy.Movie(2003)'>
          </New>
  
          <New
            img={Beauty}
            image ={BeautifulImage}
            genre ='PG.Drama, Biography.Movie...'>
          </New>
  
          <New 
            img={Wish}
            image = {WishImage}
            genre ='R. Thriller,Action.Movie(2021)'>
          </New>
  
          <New 
            img={vincent}
            image = {VincentImage}
            genre ='PG-13.Comedy,Drama.Movie....'>
          </New>

        </div> 

        <div>
          <h3>POPULAR</h3>

          <div id="box_div">
              <Popular img={Dune} ></Popular>
              <Popular img = {ATeam}></Popular>
              <Popular img= {LostCity}></Popular>
              <Popular img= {Black}></Popular>
              <Popular img= {Kill}></Popular>

          </div>
        </div>

      </div>
  )
}

// function App (){

//   return(
//     <div>
//       <New2></New2>
//     </div>
//   )
// }

export default App

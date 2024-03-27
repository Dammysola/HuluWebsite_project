

const New = (Props)=>{
    return(

        <div>
            <div id="img" style ={{
                backgroundImage: `url(${Props.img})`,
                background: `${Props.color}`
                }}>
                    
               <div id="title">
                    <img id="image" src={Props.image} alt="" />
                    {/* <h3>{Props.title}</h3>  */}
                    <h4 id="genre">{Props.genre}</h4>
                </div>
            </div>
            
            {/* <div id="btn-div">
                <button id="btn">h</button>
            </div> */}
        </div>
     )

}
  export default New
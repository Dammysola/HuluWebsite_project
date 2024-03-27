const Popular = (Props)=>{
    return(
        <div >
    
            <div>
                <img id="box" src={Props.img} alt="" />
               <h3>{Props.genre}</h3>       
            </div>
            
            <h6>{Props.children}</h6>
                   
        </div>
     )

}
export default Popular
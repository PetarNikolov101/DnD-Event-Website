
export default function OneshotDetails({img, text, inverted}){
    if(inverted){
        return(
        <div className="desc" id="oneshot-details">
        <br></br>
        <img src={img} className="desc-img"></img>
        <p className="desc-text">{text}</p>
        </div>
        )
    }else{
        return(
            <div className="desc" id="oneshot-details">
            <br></br>
            <p className="desc-text">{text}</p>
            <img src={img} className="desc-img"></img>
        </div>
        )
    }

}

export default function OneshotDetails({img, text, inverted, title}){
    if(inverted){
        return(
        <div className="desc" id="oneshot-details">
        <br></br>
        <img src={img} className="desc-img"></img>
        <p className="desc-text">{text}</p>
        <h4 className="title">{title}</h4>
        </div>
        )
    }else{
        return(
            <div className="desc" id="oneshot-details">
            <br></br>
            <h4 className="title">{title}</h4>
            <p className="desc-text">{text}</p>
            <img src={img} className="desc-img"></img>
        </div>
        )
    }

}
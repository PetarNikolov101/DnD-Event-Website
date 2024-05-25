export default function Footer(){
    return(
        <>
        <footer className="text-center">
            <div className="container pt-4">
            <section className="mb-4">
                <a data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><img src="instagram.png" style={{maxWidth: '30px'}}></img></a>

                <a
                 data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><img style={{maxWidth: '30px'}} src="facebook.png"></img></a>
            </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgb(23, 22, 22)', color: "white"}}>
                © 2024 Copyright: Dungeon Dive
            </div>
        </footer>
        </>
    )
}
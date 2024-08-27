

function PortfolioCard({id, image,alt }){
    // const style={
    //     backgorund
    // }
    return<>
        <div key={id} className="portfolio-item" >
                <div className="portfolioDescription">
                    <h3>Culture Library</h3>
                    <h5>Hospitality / Library</h5>
                </div>
                        <img src={image} alt={alt} />
                    </div>
    </>
}
export default PortfolioCard;
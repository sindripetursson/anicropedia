export default
function SearchResultsView(props) {

    function renderResults(singleResult) {
        return (
          <div className="page">
            <div className="page-left"></div>
            <div className="grid-container">
              <div className="grid-item grid-item-1">
                <img className="image" alt="" src={singleResult.icon_uri} />
              </div>
              <div className="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div>
              <div className="grid-item grid-item-3">
                Location {singleResult.availability.location}
              </div>
              <div className="grid-item grid-item-4">
                Price {singleResult.price}
              </div>
              <div className="grid-item grid-item-5">
                Rarity {singleResult.availability.rarity}
              </div>
              <div className="grid-item grid-item-6">
                Month {singleResult.availability["month-northern"]}
              </div>
              <div className="grid-item grid-item-7">
                Time of day {singleResult.availability["time-array"]}
              </div>
              <div className="grid-item grid-item-8">
                <button>Link to </button>
              </div>
              <div className="grid-item grid-item-9">
                <button>Add to my collection</button>
              </div>
            </div>
            <div className="page-right"></div>
          </div>
        );
    }


    return ( 
    <div>

        Encyclopedia

        {renderResults(props.searchResults)}

    </div>
    )
}
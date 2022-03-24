export default
function SearchResultsView(props) {

    function renderResults(singleResult) {
        return (
          <div class="page">
            <div class="page-left"></div>
            <div class="grid-container">
              <div class="grid-item grid-item-1">
                <img class="image" src={singleResult.icon_uri} />
              </div>
              {/* <div class="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div> */}
              <div class="grid-item grid-item-3">
                Location {singleResult.availability.location}
              </div>
              <div class="grid-item grid-item-4">
                Price {singleResult.price}
              </div>
              <div class="grid-item grid-item-5">
                Rarity {singleResult.availability.rarity}
              </div>
              <div class="grid-item grid-item-6">
                Month {singleResult.availability["month-northern"]}
              </div>
              <div class="grid-item grid-item-7">
                Time of day {singleResult.availability["time-array"]}
              </div>
              <div class="grid-item grid-item-8">
                <button>Link to </button>
              </div>
              <div class="grid-item grid-item-9">
                <button>Add to my collection</button>
              </div>
            </div>
            <div class="page-right"></div>
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
export default
function DetailsView(props) {

    function renderResults(singleResult) {
      if(singleResult.id === undefined)  return (
        <div className="details__container">
        <div className="page-left"></div>
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
          <div className="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div>
          <div className="grid-item grid-item-4">
              Price {singleResult.price}
          </div>
          <div className="grid-item grid-item-6">
              Museum Phrase {singleResult["museum-phrase"]}
          </div>
        </div>
        <div className="grid-item grid-item-8">
          <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
            <button>Link to </button>
          </a>
        </div>
        <div className="grid-item grid-item-10">
        <button onClick={() => props.onCloseClicked()}>Close</button>
      </div>
        <div className="page-right"></div>
      </div>
    );
    else if(singleResult['buy-price'])  return (
      <div className="details__container">
      <div className="page-left"></div>
      <div className="grid-container">
        <div className="grid-item grid-item-1">
          <img className="image" alt="" src={singleResult.image_uri} />
        </div>
        <div className="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div>
        <div className="grid-item grid-item-4">
            Buy Price {singleResult["buy-price"]}
        </div>
        <div className="grid-item grid-item-5">
            Sell Price {singleResult["sell-price"]}
        </div>
        <div className="grid-item grid-item-4">
            Has fake? {singleResult["hasFake"]}
        </div>
        <div className="grid-item grid-item-7">
            Museum Phrase {singleResult["museum-desc"]}
        </div>
      </div>
      <div className="grid-item grid-item-8">
          <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
            <button>Link to </button>
          </a>
        </div>
      <div className="grid-item grid-item-10">
        <button onClick={() => props.onCloseClicked()}>Close</button>
      </div>
      <div className="page-right"></div>
    </div>
  );
  else if(singleResult.personality)  return (
    <div className="details__container">
    <div className="page-left"></div>
    <div className="grid-container">
      <div className="grid-item grid-item-1">
        <img className="image" alt="" src={singleResult.image_uri} />
      </div>
      <div className="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div>
      <div className="grid-item grid-item-4">
          Personality {singleResult.personality}
      </div>
      <div className="grid-item grid-item-3">
          Birthday {singleResult["birthday-string"]}
      </div>
      <div className="grid-item grid-item-4">
          Species {singleResult.species}
      </div>
      <div className="grid-item grid-item-5">
          Gender {singleResult.gender}
      </div>
      <div className="grid-item grid-item-6">
          Hobby {singleResult.hobby}
      </div>
      <div className="grid-item grid-item-7">
          Catch Phrase {singleResult['catch-phrase']}
      </div>
      <div className="grid-item grid-item-8">
          <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult.name["name-EUen"]}>
            <button>Link to </button>
          </a>
        </div>
      <div className="grid-item grid-item-10">
        <button onClick={() => props.onCloseClicked()}>Close</button>
      </div>
    </div>
    <div className="page-right"></div>
  </div>
  );
  else if(singleResult.speed) return (
    <div className="details__container">
      <div className="page-left"></div>
      <div className="grid-container">
        <div className="grid-item grid-item-1">
          <img className="image" alt="" src={singleResult.image_uri} />
        </div>
        <div className="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div>
        <div className={"grid-item grid-item-3"}>
          Location {singleResult.availability.location}
        </div>
        <div className="grid-item grid-item-4">
          Price {singleResult.price}
        </div>
        <div className="grid-item grid-item-5">
          Rarity {singleResult.availability.rarity}
        </div>
        <div className="grid-item grid-item-5">
          Shadow {singleResult.shadow}
        </div>
        <div className="grid-item grid-item-5">
          Speed {singleResult.speed}
        </div>
        <div className="grid-item grid-item-6">
          Month {singleResult.availability["month-northern"]}
        </div>
        <div className="grid-item grid-item-7">
          Time of day {singleResult.availability["time-array"]}
        </div>
        <div className="grid-item grid-item-8">
          <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
            <button>Link to </button>
          </a>
        </div>
        <div className="grid-item grid-item-9">
          <button>Add to my collection</button>
        </div>
        <div className="grid-item grid-item-10">
          <button onClick={() => props.onCloseClicked()}>Close</button>
        </div>
      </div>
      <div className="page-right"></div>
    </div>
  );
  else if(singleResult.shadow) return (
      <div className="details__container">
        <div className="page-left"></div>
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
          <div className="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div>
          <div className={"grid-item grid-item-3"}>
            Location {singleResult.availability.location}
          </div>
          <div className="grid-item grid-item-4">
            Price {singleResult.price}
          </div>
          <div className="grid-item grid-item-5">
            Rarity {singleResult.availability.rarity}
          </div>
          <div className="grid-item grid-item-5">
            Shadow {singleResult.shadow}
          </div>
          <div className="grid-item grid-item-6">
            Month {singleResult.availability["month-northern"]}
          </div>
          <div className="grid-item grid-item-7">
            Time of day {singleResult.availability["time-array"]}
          </div>
          <div className="grid-item grid-item-8">
            <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
              <button>Link to </button>
            </a>
          </div>
          <div className="grid-item grid-item-9">
            <button>Add to my collection</button>
          </div>
          <div className="grid-item grid-item-10">
            <button onClick={() => props.onCloseClicked()}>Close</button>
          </div>
        </div>
        <div className="page-right"></div>
      </div>
    );
    else return (
      <div className="details__container">
        <div className="page-left"></div>
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
          <div className="grid-item grid-item-2">{singleResult.name["name-EUen"]}</div>
          <div className={"grid-item grid-item-3"}>
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
            <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
              <button>Link to </button>
            </a>
          </div>
          <div className="grid-item grid-item-9">
            <button>Add to my collection</button>
          </div>
          <div className="grid-item grid-item-10">
            <button onClick={() => props.onCloseClicked()}>Close</button>
          </div>
        </div>
        <div className="page-right"></div>
      </div>
    );
    }


    return ( 
    <div>

        Encyclopedia

        {renderResults(props.data)}

    </div>
    )
}
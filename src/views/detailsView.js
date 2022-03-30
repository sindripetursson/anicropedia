import Months from '../components/months'
import CloseButton from '../components/close_button';

export default
function DetailsView(props) {

    function renderResults(singleResult) {
      // console.log(singleResult.availability["month-northern"]);

      if(singleResult.id === undefined)  return (
        <div className="details__container">
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
        <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
      </div>
    );
    else if(singleResult['buy-price'])  return (
      <div className="details__container">
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
        <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
    </div>
  );
  else if(singleResult.personality)  return (
    <div className="details__container">
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
        <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
    </div>
  </div>
  );
  else if(singleResult.speed) return (
    <div className="details__container">
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
        <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
      </div>
    </div>
  );
  else if(singleResult.shadow) return (
      <div className="details__container">
        <div className="details__row">
          <div className="details__col">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
        <div className="details__col">
          <div className="details__row">
            <div className="details__title">{singleResult.name["name-EUen"]}</div>
          </div>
          <div className={"details__row"}>
            <div className="details__col__three">
              <div className="details__heading">
                Location
              </div>
              <div className="details__content">
                {singleResult.availability.location}
              </div>
            </div>
            <div className="details__col__three">
              <div className="details__heading">
                Price
              </div>
              <div className="details__content">
                {singleResult.price}
              </div>
            </div>
          <div className="details__col__three">
            <div className="details__heading">
              Rarity
            </div>
            <div className="details__content">
              {singleResult.availability.rarity}
            </div> 
          </div>
          </div>
          <div className="details__row">
              <div className="details__col__one">
                <div className="details__heading">
                  Months active
                </div>
                <div className="details__content">
                  <Months monthArray={singleResult.availability["month-array-northern"]}/>
                </div>
              </div>
            </div>
            <div className="details__row">
              <div className="details__col">
                <div className="details__heading">
                  Time of day
                </div>
                <div className="details__content">
                  {singleResult.availability["time-array"][0] === 0 && singleResult.availability["time-array"][singleResult.availability["time-array"].length-1] === 23 ? "All day" : singleResult.availability["time-array"][0] + ":00 - " + singleResult.availability["time-array"][singleResult.availability["time-array"].length-1]+":00"}
                </div>
              </div>
              <div className="details__col">
              <div className="details__heading">
                Shadow
              </div>
              <div className="details__content">
                {singleResult.shadow}
              </div>
          </div>
            </div>
            <div className="details__row">
              <div className="details__col">
                <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
                  <button>Link to </button>
                </a>
              </div>
              <div className="details__col">
                <button>Add to my collection</button>
              </div>
            </div>
          </div>
          <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
        </div>
      </div>
    );
    else return (
      <div className="details__container">
        <div className="details__row">
          <div className="details__col">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
          <div className="details__col">
            <div className="details__row">
              <div className="details__title">
                {singleResult.name["name-EUen"]}
              </div>
            </div>
            <div className="details__row">
              <div className="details__col__three">
                <div className="details__heading">
                  Location
                </div>
                <div className="details__content">
                  {singleResult.availability.location}
                </div>
              </div>
              <div className="details__col__three">
                <div className="details__heading">
                  Price
                </div>
                <div className="details__content">
                  {singleResult.price}
                </div>
              </div>
              <div className="details__col__three">
              <div className="details__heading">
                Rarity  
              </div>
              <div className="details__content">
                {singleResult.availability.rarity}
              </div>
              </div>
            </div>
            <div className="details__row">
              <div className="details__col__one">
                <div className="details__heading">
                  Months active
                </div>
                <div className="details__content">
                  <Months monthArray={singleResult.availability["month-array-northern"]}/>
                </div>
              </div>
            </div>
            <div className="details__row">
              <div className="details__col">
                <div className="details__heading">
                  Time of day
                </div>
                <div className="details__content">
                  {singleResult.availability["time-array"][0] === 0 && singleResult.availability["time-array"][singleResult.availability["time-array"].length-1] === 23 ? "All day" : singleResult.availability["time-array"][0] + ":00 - " + singleResult.availability["time-array"][singleResult.availability["time-array"].length-1]+":00"}
                </div>
              </div>
            </div>
            <div className="details__row">
              <div className="details__col">
                <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
                  <button>Link to </button>
                </a>
              </div>
              <div className="details__col">
                <button>Add to my collection</button>
              </div>
            </div>
            
            <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
          </div>
        </div>
        
          
        
      </div>
    );
    }


    return ( 
    <div>
        {renderResults(props.data)}
    </div>
    )
}
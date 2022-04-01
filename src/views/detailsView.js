import Months from '../components/months'
import CloseButton from '../components/close_button';

export default
function DetailsView(props) {

  function capitalizeFirstLetter(string){
    let arr = string.split(" ");
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  }

    function renderResults(singleResult) {
      // console.log(singleResult.availability["month-northern"]);

      if(singleResult.id === undefined)  return (
        <div className="details__container">
        <div className="details__row">
          <div className="details__col">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
        <div className="details__col__splitter">
          <div className="details__row">
            <div className="details__title">
              {capitalizeFirstLetter(singleResult.name["name-EUen"])}
            </div>
          </div>
          <div className={"details__row"}>
            <div className="details__col__one">
              <div className="details__heading">
                Price
              </div>
              <div className="details__content">
                <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
                {singleResult.price}
              </div>
            </div>
          </div>
          <div className="details__row__one">
            <div className="details__heading">
              Museum Phrase 
            </div>
            <div style={{fontStyle: "italic"}} className="details__content">
              {'"'+singleResult["museum-phrase"]+'"'}
            </div>
          </div>
          <div className="details__row">
            <div className="details__col">
              <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
                <button>More information</button>
              </a>
            </div>
            <div className="details__col">
              <button onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
            </div>
          </div>
          </div>
        </div>
        <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
      </div>
    );
    else if(singleResult['buy-price'])  return (
      <div className="details__container">
      <div className="details__row">
          <div className="details__col">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
        <div className="details__col__splitter">
          <div className="details__row">
            <div className="details__title">
              {capitalizeFirstLetter(singleResult.name["name-EUen"])}
            </div>
          </div>

          <div className="details__row">
            <div className="details__col__three">
              <div className="details__heading">
                Buy Price
              </div>
              <div className="details__content">
                <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
                {singleResult["buy-price"]}
              </div>
            </div>
            <div className="details__col__three">
              <div className="details__heading">
                Sell Price
              </div>
              <div className="details__content">
                <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
                {singleResult["sell-price"]}
              </div>
            </div>
            <div className="details__col__three">
              <div className="details__heading">
                Has Fake?
              </div>
              <div className="details__content">
                {singleResult["hasFake"] ? "Yes" : "No"}
              </div>
            </div>
          </div>

          <div className="details__row__one">
            <div className="details__heading">
              Museum Phrase 
            </div>
            <div style={{fontStyle: "italic"}} className="details__content">
              {'"'+singleResult["museum-desc"]+'"'}
            </div>
          </div>
          <div className="details__row">
            <div className="details__col">
              <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult["file-name"]}>
                <button>More information</button>
              </a>
            </div>
            <div className="details__col">
              <button onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
            </div>
          </div>
        </div>
      </div>
        <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
    </div>
  );
  else if(singleResult.personality)  return (
    <div className="details__container">
      <div className="details__row">
          <div className="details__col">
            <img className="frame" alt="frame" src='../../images/Frame.svg' />
            <img className="image__villagers" alt="" src={singleResult.image_uri} />
          </div>
        <div className="details__col__splitter">
          <div className="details__row">
            <div className="details__title">
              {capitalizeFirstLetter(singleResult.name["name-EUen"])}
            </div>
          </div>
        
          <div className="details__row">
            <div className="details__col__three">
              <div className="details__heading">
                Personality
              </div>
              <div className="details__content">
                {singleResult.personality}
              </div>
            </div>
            <div className="details__col__three">
              <div className="details__heading">
                Birthday
              </div>
              <div className="details__content">
                {singleResult["birthday-string"]}
              </div>
            </div>
            <div className="details__col__three">
              <div className="details__heading">
                Species
              </div>
              <div className="details__content">
                {singleResult.species}
              </div>
            </div>
          </div>

          <div className="details__row">
            <div className="details__col__three">
              <div className="details__heading">
                Gender
              </div>
              <div className="details__content">
                {singleResult.gender}
              </div>
            </div>
            <div className="details__col__three">
              <div className="details__heading">
                Hobby
              </div>
              <div className="details__content">
                {singleResult.hobby}
              </div>
            </div>
            <div className="details__col__three">
              <div className="details__heading">
                Phrase
              </div>
              <div style={{fontStyle: "italic"}} className="details__content">
                {'"' + singleResult['catch-phrase'] + '"'}
              </div>
            </div>
          </div>
          <div className="details__row">
            <div className="details__col">
              <a href={"https://animalcrossing.fandom.com/wiki/"+singleResult.name["name-EUen"]}>
                <button>More information</button>
              </a>
            </div>
            <div className="details__col">
              <button onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my village':'Add to my village'}</button>
            </div>
          </div>
        </div>
      </div>
        <div  onClick={() => props.onCloseClicked()} className="close">
          <CloseButton />
        </div>
    </div>
  );
  else if(singleResult.speed) return (
    <div className="details__container">
      <div className="details__row">
          <div className="details__col">
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
        <div className="details__col__splitter">
          <div className="details__row">
            <div className="details__title">
              {capitalizeFirstLetter(singleResult.name["name-EUen"])}
            </div>
          </div>
          <div className={"details__row"}>
            <div className="details__col__two">
              <div className="details__heading">
                Speed
              </div>
              <div className="details__content">
                {singleResult.speed}
              </div>
            </div>
            <div className="details__col__two">
              <div className="details__heading">
                Price
              </div>
              <div className="details__content">
                <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
                {singleResult.price}
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
                  <button>More information</button>
                </a>
              </div>
              <div className="details__col">
                <button onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
              </div>
            </div>
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
        <div className="details__col__splitter">
          <div className="details__row">
            <div className="details__title">
              {capitalizeFirstLetter(singleResult.name["name-EUen"])}
            </div>
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
              <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
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
                  <button>More information</button>
                </a>
              </div>
              <div className="details__col">
                <button onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
              </div>
            </div>
          </div>
          <div></div>
          <div  onClick={() => props.onCloseClicked()} className="close">
              <CloseButton />
            </div>
        </div>
      </div>
    );
    else return (
      <div className="details__container">
        <div className="details__row">
          <div className="details__col" >
            <img className="image" alt="" src={singleResult.image_uri} />
          </div>
          <div className="details__col__splitter">
            <div className="details__row">
              <div className="details__title">
                {capitalizeFirstLetter(singleResult.name["name-EUen"])}
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
                  <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
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
                  <button>More information</button>
                </a>
              </div>
              <div className="details__col">
                <button onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
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
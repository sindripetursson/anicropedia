import Fossils from '../components/fossils';
import Art from '../components/art';
import Villagers from '../components/villagers';
import Sea from '../components/sea';
import Fish from '../components/fish';
import Bugs from '../components/bugs';

export default
function DetailsView(props) {
    function renderResults(singleResult) {
        if(singleResult.id === undefined)  return (
            <Fossils 
            singleResult={singleResult} 
            onCloseClicked={props.onCloseClicked}
            onCollectionChange={props.onCollectionChange}
            isInCollection={props.isInCollection}/>
        );
        else if(singleResult['buy-price'])  return (
            <Art 
                singleResult={singleResult} 
                onCloseClicked={props.onCloseClicked}
                onCollectionChange={props.onCollectionChange}
                isInCollection={props.isInCollection}
            />
        );
        else if(singleResult.personality)  return (
            <Villagers 
            singleResult={singleResult} 
            onCloseClicked={props.onCloseClicked}
            onCollectionChange={props.onCollectionChange}
            isInCollection={props.isInCollection}
            />
        );
        else if(singleResult.speed) return (
            <Sea 
            singleResult={singleResult} 
            onCloseClicked={props.onCloseClicked}
            onCollectionChange={props.onCollectionChange}
            isInCollection={props.isInCollection}
            userModel={props.userModel}
            />
        );
        else if(singleResult.shadow) return (
            <Fish 
            singleResult={singleResult} 
            onCloseClicked={props.onCloseClicked}
            onCollectionChange={props.onCollectionChange}
            isInCollection={props.isInCollection}
            userModel={props.userModel}
            />
        );
        else return (
            <Bugs 
                singleResult={singleResult} 
                onCloseClicked={props.onCloseClicked}
                onCollectionChange={props.onCollectionChange}
                isInCollection={props.isInCollection}
                userModel={props.userModel}
            />
        );
    }

    return ( 
        <div>
            {renderResults(props.data)}
        </div>
    );
}
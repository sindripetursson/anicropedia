import resolvePromise from "./resolvePromise";
import { getFishDetails } from "./fishSource";


class FishModel{
    constructor(currentFish){
        this.observers = [];
        this.searchResultsPromiseState = {}; 
        this.currentFishPromiseState = {};
        this.searchParams = {};
    }
    //test
    //test2
    
    setSearchQuery(q){
        this.searchParams.query = q;
    }

    setCurrentFish(id){
        const model = this;
        function notifyACB(){
            model.notifyObservers();
        }

        if(id !== undefined && id !== this.currentFish) {
            this.currentFish = id
            resolvePromise(getFishDetails(id), this.currentFishPromiseState, notifyACB);
            this.notifyObservers({setFishId: id});
            console.log(this.currentFishPromiseState.data);
        }
    }

    addObserver(newObserverACB){
        this.observers = [...this.observers, newObserverACB];
    }

    removeObserver(observerToRemoveACB){
        function compareObservers(observer){
            if(observer !== observerToRemoveACB) return true;
            else return false;
        }
        this.observers = this.observers.filter(compareObservers);
    }

    notifyObservers(payload){
        this.observers.forEach(function invokeObserverCB(obs){
            try{
                obs(payload);
            }
            catch(err){console.error(err);}
        })
    }
}

export default FishModel;

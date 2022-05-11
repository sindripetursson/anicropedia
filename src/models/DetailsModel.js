import resolvePromise from "../resolvePromise";
import { getDetails } from "../source/detailsSource";

class DetailsModel{
    constructor(){
        this.observers = [];
        this.currentDetailsPromiseState = {};
    }

    setCurrentItem(category,id){
        const model = this;
        function notifyACB(){
            model.notifyObservers();
        }

        if((id !== undefined && id !== this.currentId) || category !== this.currentCategory) {
            this.currentId = id;
            this.currentCategory = category;
            resolvePromise(getDetails(category,id), this.currentDetailsPromiseState, notifyACB);
            this.notifyObservers({setDetailsId: id, setDetailsCategory: category});
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

export default DetailsModel;
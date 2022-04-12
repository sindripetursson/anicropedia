import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "./firebaseConfig.js";
import { getFishDetails } from "./source/fishSource.js";
import UserModel from "./UserModel.js";
firebase.initializeApp(firebaseConfig);  

//  REF is the “root” Firebase path.
const REF="encyclopedia";


function updateFirebaseFromModel(model, uid) {
    function firebaseObserverACB(payload) {
        if(payload && payload.addFish) {
            firebase.database().ref(REF + "/" + uid + "/fishes/"+payload.addFish.id).set(payload.addFish.id);
        }
        if(payload && payload.removeFish) {
            firebase.database().ref(REF+ "/" + uid + "/fishes/"+payload.removeFish.id).set(null);
        }
    }
    model.addObserver(firebaseObserverACB);
}

function updateModelFromFirebase(model, uid) {
    firebase.database().ref(REF + "/" + uid + "/fishes").on("child_added", 
        function fishAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(fish){
                return +firebaseData.key === fish.id;
            }
            const newFishArray = model.fishes.filter(hasSameIdCB); 
    
            if (newFishArray.length === 0) {
                getFishDetails(+firebaseData.key).then(function addFishCB(fish) {model.addItem(fish, 'fish')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/fishes").on("child_removed", 
        function fishRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({id: +firebaseData.key}, 'fish');
        }
    );
}

function makeFishPromiseCB(fishId) {
    return getFishDetails(fishId);
}

function makeBigPromiseACB(firebaseData){
    function createModelACB(fishes) {
        return new UserModel(fishes);
    }

    const fishPromiseArray= Object.keys(firebaseData.val().fishes).map(makeFishPromiseCB);
    return Promise.all(fishPromiseArray).then(createModelACB);
}

function firebaseModelPromise() {
    return firebase.database().ref(REF /* <-- note! Whole object! */).once("value").then(makeBigPromiseACB);
}

export { updateFirebaseFromModel, updateModelFromFirebase, firebaseModelPromise };
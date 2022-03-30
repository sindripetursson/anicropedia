import firebase from "firebase/app";
import firebaseConfig from "/src/firebaseConfig.js";
import getFishDetails from "fishSource.js";
import UserModel from "./UserModel.js";
firebase.initializeApp(firebaseConfig);  

//  REF is the “root” Firebase path.
const REF="userModel";

function updateFirebaseFromModel(model) {
    function firebaseObserverACB(payload) {
        if(payload && payload.addFish) {
            firebase.database().ref(REF+"/fishes/"+payload.addDish.id).set(payload.addFish["file-name"]);
        }
        if(payload && payload.removeFish) {
            firebase.database().ref(REF+"/fishes/"+payload.removeFish.id).set(null);
        }
    }
    model.addObserver(firebaseObserverACB);
}

function updateModelFromFirebase(model) {
    firebase.database().ref(REF+"/fishes").on("child_added", 
        function fishAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(fish){
                return +firebaseData.key === fish.id;
            }
            const newFishArray = model.fishes.filter(hasSameIdCB); 
    
            if (newFishArray.length === 0) {
                getFishDetails(+firebaseData.key).then(function addFishCB(fish) {model.addFish(fish)});
            }
        }
    );
    firebase.database().ref(REF+"/fishes").on("child_removed", 
        function fishRemovedInFirebaseACB(firebaseData){ 
            model.removeFish({id: +firebaseData.key});
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
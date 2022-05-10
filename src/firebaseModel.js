import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "./firebaseConfig.js";
import { getDetails } from "./source/detailsSource.js";
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
        // Insects
        if(payload && payload.addInsect) {
            firebase.database().ref(REF + "/" + uid + "/insects/"+payload.addInsect.id).set(payload.addInsect.id);
        }
        if(payload && payload.removeInsect) {
            firebase.database().ref(REF+ "/" + uid + "/insects/"+payload.removeInsect.id).set(null);
        }
        // Sea creatures
        if(payload && payload.addSeaCreature) {
            firebase.database().ref(REF + "/" + uid + "/sea_creatures/"+payload.addSeaCreature.id).set(payload.addSeaCreature.id);
        }
        if(payload && payload.removeSeaCreature) {
            firebase.database().ref(REF+ "/" + uid + "/sea_creatures/"+payload.removeSeaCreature.id).set(null);
        }
        // Villagers
        if(payload && payload.addVillager) {
            firebase.database().ref(REF + "/" + uid + "/villagers/"+payload.addVillager.id).set(payload.addVillager.id);
        }
        if(payload && payload.removeVillager) {
            firebase.database().ref(REF+ "/" + uid + "/villagers/"+payload.removeVillager.id).set(null);
        }
        // Music
        if(payload && payload.addMusic) {
            firebase.database().ref(REF + "/" + uid + "/music/"+payload.addMusic.id).set(payload.addMusic.id);
        }
        if(payload && payload.removeMusic) {
            firebase.database().ref(REF+ "/" + uid + "/music/"+payload.removeMusic.id).set(null);
        }
        // Fossils
        if(payload && payload.addFossil) {
            firebase.database().ref(REF + "/" + uid + "/fossils/"+payload.addFossil['file-name']).set(payload.addFossil['file-name']);
        }
        if(payload && payload.removeFossils) {
            firebase.database().ref(REF+ "/" + uid + "/fossils/"+payload.removeFossils['file-name']).set(null);
        }
        // Art
        if(payload && payload.addArt) {
            firebase.database().ref(REF + "/" + uid + "/art/"+payload.addArt.id).set(payload.addArt.id);
        }
        if(payload && payload.removeArt) {
            firebase.database().ref(REF+ "/" + uid + "/art/"+payload.removeArt.id).set(null);
        }
        if(payload && payload.updateCityAddress) {
            firebase.database().ref(REF + "/" + uid + "/address").set(payload.updateCityAddress);
        }
        if(payload && payload.updateCityLat) {
            firebase.database().ref(REF + "/" + uid + "/latitude").set(payload.updateCityLat);
        }
        if(payload && payload.updateCityLng) {
            firebase.database().ref(REF + "/" + uid + "/longitude").set(payload.updateCityLng);
        }
        if(payload && payload.updateUserName) {
            firebase.database().ref(REF + "/" + uid + "/name").set(payload.updateUserName);
        }
    }
    model.addObserver(firebaseObserverACB);
}

function updateModelFromFirebase(model, uid) {
    // Fishes
    firebase.database().ref(REF + "/" + uid + "/fishes").on("child_added", 
        function fishAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(fish){
                return +firebaseData.key === fish.id;
            }
            const newFishArray = model.fishes.filter(hasSameIdCB); 
    
            if (newFishArray.length === 0) {
                getDetails('fish', +firebaseData.key).then(function addFishCB(fish) {model.addItem(fish, 'fish')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/fishes").on("child_removed", 
        function fishRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({id: +firebaseData.key}, 'fish');
        }
    );

    // Insects
    firebase.database().ref(REF + "/" + uid + "/insects").on("child_added", 
        function insectAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(insect){
                return +firebaseData.key === insect.id;
            }
            const newInsectArray = model.insects.filter(hasSameIdCB); 
    
            if (newInsectArray.length === 0) {
                getDetails('bugs', +firebaseData.key).then(function addInsectCB(insect) {model.addItem(insect, 'bugs')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/insects").on("child_removed", 
        function insectRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({id: +firebaseData.key}, 'bugs');
        }
    );

    // Sea creatures
    firebase.database().ref(REF + "/" + uid + "/sea_creatures").on("child_added", 
        function seaCreatureAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(seaCreature){
                return +firebaseData.key === seaCreature.id;
            }
            const newSeaCreatureArray = model.seaCreatures.filter(hasSameIdCB); 
    
            if (newSeaCreatureArray.length === 0) {
                getDetails('sea', +firebaseData.key).then(function addSeaCreatureCB(seaCreature) {model.addItem(seaCreature, 'sea')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/sea_creatures").on("child_removed", 
        function seaCreatureRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({id: +firebaseData.key}, 'sea');
        }
    );

    // Villagers
    firebase.database().ref(REF + "/" + uid + "/villagers").on("child_added", 
        function villagerAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(villager){
                return +firebaseData.key === villager.id;
            }
            const newVillagerArray = model.villagers.filter(hasSameIdCB); 
    
            if (newVillagerArray.length === 0) {
                getDetails('villagers', +firebaseData.key).then(function addVillagerCB(villager) {model.addItem(villager, 'villagers')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/villagers").on("child_removed", 
        function villagerRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({id: +firebaseData.key}, 'villagers');
        }
    );

    // Fossils
    firebase.database().ref(REF + "/" + uid + "/fossils").on("child_added", 
        function fossilAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(fossil){
                return firebaseData.key === fossil['file-name'];
            }
            const newFossilArray = model.fossils.filter(hasSameIdCB); 
    
            if (newFossilArray.length === 0) {
                getDetails('fossils', firebaseData.key).then(function addFossilCB(fossil) {model.addItem(fossil, 'fossils')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/fossils").on("child_removed", 
        function fossilRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({'file-name': firebaseData.key}, 'fossils');
        }
    );

    // Art
    firebase.database().ref(REF + "/" + uid + "/art").on("child_added", 
        function artAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(art){
                return +firebaseData.key === art.id;
            }
            const newArtArray = model.art.filter(hasSameIdCB); 
    
            if (newArtArray.length === 0) {
                getDetails('art', +firebaseData.key).then(function addArtCB(art) {model.addItem(art, 'art')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/art").on("child_removed", 
        function artRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({id: +firebaseData.key}, 'art');
        }
    );

    // Music
    firebase.database().ref(REF + "/" + uid + "/music").on("child_added", 
        function musicAddedInFirebaseACB(firebaseData){ 
            function hasSameIdCB(music){
                return +firebaseData.key === music.id;
            }
            const newMusicArray = model.music.filter(hasSameIdCB); 
    
            if (newMusicArray.length === 0) {
                getDetails('songs', +firebaseData.key).then(function addMusicCB(music) {model.addItem(music, 'music')});
            }
        }
    );
    firebase.database().ref(REF + "/" + uid + "/music").on("child_removed", 
        function musicRemovedInFirebaseACB(firebaseData){ 
            model.removeItem({id: +firebaseData.key}, 'music');
        }
    );

    // User name update
    firebase.database().ref(REF + "/" + uid + "/name").on("value", 
        function nameUpdatedInFirebaseACB(firebaseData){ 
            model.setUserName(firebaseData.val());
        }
    );

    // Address update
    firebase.database().ref(REF + "/" + uid + "/address").on("value", 
        function addressUpdatedInFirebaseACB(firebaseData){ 
            model.setCityAddress(firebaseData.val());
        }
    );

    // Latitude update
    firebase.database().ref(REF + "/" + uid + "/latitude").on("value", 
    function latitudeUpdatedInFirebaseACB(firebaseData){ 
        model.setCityLatitude(firebaseData.val());
    }
    );
    
    // Longitude update
    firebase.database().ref(REF + "/" + uid + "/longitude").on("value", 
        function longitudeUpdatedInFirebaseACB(firebaseData){ 
            model.setCityLongitude(firebaseData.val());
        }
    );
}

function makeFishPromiseCB(fishId) {
    return getDetails('fish', fishId);
}

function makeInsectPromiseCB(insectId) {
    return getDetails('bugs', insectId);
}

function makeSeaCreaturePromiseCB(seaCreatureId) {
    return getDetails('sea', seaCreatureId);
}

function makeVillagerPromiseCB(villagerId) {
    return getDetails('villagers', villagerId);
}

function makeFossilPromiseCB(fossilId) {
    return getDetails('fossils', fossilId);
}

function makeArtPromiseCB(artId) {
    return getDetails('art', artId);
}

function makeMusicPromiseCB(musicId) {
    return getDetails('songs', musicId);
}

function makeBigPromiseACB(firebaseData){
    if(!firebaseData.exists()) {
        return new UserModel();
    }

    function createModelACB(items) {
        return new UserModel(items[0], items[1], items[2], items[3], items[4], items[5], items[6], 
                             firebaseData.val().address, {'lat': firebaseData.val().latitude, 'lng': firebaseData.val().longitude}, firebaseData.val().name);
    }

    const userItemArray = [
        Object.keys(firebaseData.val().fishes?firebaseData.val().fishes:[]).map(makeFishPromiseCB),
        Object.keys(firebaseData.val().insects?firebaseData.val().insects:[]).map(makeInsectPromiseCB),
        Object.keys(firebaseData.val().sea_creatures?firebaseData.val().sea_creatures:[]).map(makeSeaCreaturePromiseCB),
        Object.keys(firebaseData.val().villagers?firebaseData.val().villagers:[]).map(makeVillagerPromiseCB),
        Object.keys(firebaseData.val().music?firebaseData.val().music:[]).map(makeMusicPromiseCB),
        Object.keys(firebaseData.val().fossils?firebaseData.val().fossils:[]).map(makeFossilPromiseCB),
        Object.keys(firebaseData.val().art?firebaseData.val().art:[]).map(makeArtPromiseCB)
    ];

    return Promise.all(userItemArray.map(
        function(promiseArray) {
            return Promise.all(promiseArray);
        })).then(createModelACB);
}

function firebaseModelPromise(uid) {
    return firebase.database().ref(REF + '/' + uid /* <-- note! Whole object! */).once("value").then(makeBigPromiseACB);
}

export { updateFirebaseFromModel, updateModelFromFirebase, firebaseModelPromise };
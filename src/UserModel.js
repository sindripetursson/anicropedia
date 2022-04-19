class UserModel {
    constructor(fishArray = [], insectArray = [], 
                seaCreatureArray = [], villagerArray = [], 
                musicArray = [], fossilArray = [], artArray = [], userCityArray = []) {
        this.observers = [];
        this.fishes = fishArray;
        this.insects = insectArray;
        this.seaCreatures = seaCreatureArray;
        this.villagers = villagerArray;
        this.music = musicArray;
        this.fossils = fossilArray;
        this.art = artArray;
        this.userCity = userCityArray;
    }


    setUserCity(chosenCity) {

        const cityArray = chosenCity.split(",");

        this.userCity[0] = cityArray[0];
        this.userCity[1] = cityArray[1];
        this.userCity[2] = cityArray[2];

    }

    getUserCity() {
        if(this.userCity[2] != null) {
            return this.userCity[2];
        }
        return "No City selected";

    }

    addItem(itemToAdd, category) {
        function hasSameIdCB(item){
            if (category === 'fossils') {
                return itemToAdd['file-name'] === item['file-name'];
            } else {
                return itemToAdd.id === item.id;
            }
        }
        let currentArray = this.getCategoryArray(category);
        const newItemArray = currentArray.filter(hasSameIdCB); 

        if (newItemArray.length === 0) {
            switch(category) {
                case 'fish':
                    this.fishes= [...this.fishes, itemToAdd];
                    this.notifyObservers({addFish: itemToAdd});
                    break;
                case 'bugs':
                    this.insects= [...this.insects, itemToAdd];
                    this.notifyObservers({addInsect: itemToAdd});
                    break;
                case 'sea':
                    this.seaCreatures= [...this.seaCreatures, itemToAdd];
                    this.notifyObservers({addSeaCreature: itemToAdd});
                    break;
                case 'villagers':
                    this.villagers= [...this.villagers, itemToAdd];
                    this.notifyObservers({addVillager: itemToAdd});
                    break;
                case 'fossils':
                    this.fossils= [...this.fossils, itemToAdd];
                    this.notifyObservers({addFossil: itemToAdd});
                    break;
                case 'art':
                    this.art= [...this.art, itemToAdd];
                    this.notifyObservers({addArt: itemToAdd});
                    break;
                case 'music':
                    this.music= [...this.music, itemToAdd];
                    this.notifyObservers({addMusic: itemToAdd});
                    break;
                default:
                    break;
            }
        }
    }

    getCategoryArray(category) {
        switch(category) {
            case 'fish':
                return this.fishes;
            case 'bugs':
                return this.insects;
            case 'sea':
                return this.seaCreatures;
            case 'villagers':
                return this.villagers;
            case 'fossils':
                return this.fossils;
            case 'art':
                return this.art;
            case 'music':
                return this.music;
            default:
                console.error(category, ' is not a category');
        }
    }

    // Next step: split back into addItem and removeItem. Have some way in the presenter
    // to distinguish between if an item is being added or removed. Has to be this way
    // because firebase calls this method at the moment and adds it back into the model
    // when it should be being removed.
    removeItem(itemToRemove, category){
        function hasSameIdCB(item){
            if (category === 'fossils') {
                return itemToRemove['file-name'] !== item['file-name'];
            } else {
                return itemToRemove.id !== item.id;
            }
        }
        let currentArray = this.getCategoryArray(category);
        const newArray = currentArray.filter(hasSameIdCB); 
        if(newArray.length !== currentArray.length) {
            switch(category) {
                case 'fish':
                    this.fishes = newArray;
                    this.notifyObservers({removeFish: itemToRemove});
                    break;
                case 'bugs':
                    this.insects = newArray;
                    this.notifyObservers({removeInsect: itemToRemove});
                    break;
                case 'sea':
                    this.seaCreatures = newArray;
                    this.notifyObservers({removeSeaCreature: itemToRemove});
                    break;
                case 'villagers':
                    this.villagers = newArray;
                    this.notifyObservers({removeVillager: itemToRemove});
                    break;
                case 'music':
                    this.music = newArray;
                    this.notifyObservers({removeMusic: itemToRemove});
                    break;
                case 'fossils':
                    this.fossils = newArray;
                    this.notifyObservers({removeFossils: itemToRemove});
                    break;
                case 'art':
                    this.art = newArray;
                    this.notifyObservers({removeArt: itemToRemove});
                    break;
                default:
                    break;
            }
        }
    }

    addObserver(callback) {
        this.observers.push(callback);
    }

    removeObserver(callback) {
        function isSameObserverCB(cb) {
            return callback !== cb;
        }
        this.observers = this.observers.filter(isSameObserverCB);
    }

    notifyObservers(payload) {
        function invokeObserverCB(obs) {
            if(payload) {
                obs(payload);
            }
            else {
                obs();
            }
        }
        try {
            this.observers.forEach(invokeObserverCB);
        } catch(err) {
            console.error(err);
        }
    }
}

export default UserModel;
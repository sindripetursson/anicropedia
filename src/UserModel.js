class UserModel {
    constructor(fishArray = [], insectArray = [], 
                seaCreatureArray = [], villagerArray = [], 
                musicArray = [], fossilArray = [], artArray = []) {
        this.observers = [];
        this.fishes = fishArray;
        this.insects = insectArray;
        this.seaCreatures = seaCreatureArray;
        this.villagers = villagerArray;
        this.music = musicArray;
        this.fossils = fossilArray;
        this.art = artArray;
    }

    addItem(itemToAdd, category) {
        function hasSameIdCB(item){
            return itemToAdd.id === item.id;
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
            default:
                console.error(category, ' is not a category');
        }
    }

    // Next step: split back into addItem and removeItem. Have some way in the presenter
    // to distinguish between if an item is being added or removed. Has to be this way
    // because firebase calls this method at the moment and adds it back into the model
    // when it should be being removed.
    removeItem(itemToRemove, category){
        function hasSameIdCB(fish){
            return itemToRemove.id !== fish.id;
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
                    this.notifyObservers({removeVillager: itemToRemove});
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

    addInsect(insectToAdd) {
        function hasSameIdCB(insect){
            return insectToAdd.id === insect.id;
        }
        const newInsectsArray = this.insects.filter(hasSameIdCB); 
    
        if (newInsectsArray.length === 0) {
            this.insects= [...this.insects, insectToAdd];
            this.notifyObservers({addInsect: insectToAdd});
        }
    }
    
    removeInsect(insectToRemove){
        function hasSameIdCB(insect){
            return insectToRemove.id !== insect.id;
        }
        const newInsectsArray = this.insects.filter(hasSameIdCB); 
        if(newInsectsArray.length !== this.insects.length) {
            this.insects = newInsectsArray;
            this.notifyObservers({removeInsect: insectToRemove});
        }
    }

    addSeaCreature(seaCreatureToAdd) {
        function hasSameIdCB(seaCreature){
            return seaCreatureToAdd.id === seaCreature.id;
        }
        const newSeaCreaturesArray = this.seaCreatures.filter(hasSameIdCB); 
    
        if (newSeaCreaturesArray.length === 0) {
            this.seaCreatures= [...this.seaCreatures, seaCreatureToAdd];
            this.notifyObservers({addSeaCreature: seaCreatureToAdd});
        }
    }
    
    removeSeaCreature(seaCreatureToRemove){
        function hasSameIdCB(seaCreature){
            return seaCreatureToRemove.id !== seaCreature.id;
        }
        const newSeaCreaturesArray = this.seaCreatures.filter(hasSameIdCB); 
        if(newSeaCreaturesArray.length !== this.seaCreatures.length) {
            this.seaCreatures = newSeaCreaturesArray;
            this.notifyObservers({removeSeaCreature: seaCreatureToRemove});
        }
    }

    addVillager(villagerToAdd) {
        function hasSameIdCB(villager){
            return villagerToAdd.id === villager.id;
        }
        const newVillagersArray = this.villagers.filter(hasSameIdCB); 
    
        if (newVillagersArray.length === 0) {
            this.villagers= [...this.villagers, villagerToAdd];
            this.notifyObservers({addVillager: villagerToAdd});
        }
    }
    
    removeVillager(villagerToRemove){
        function hasSameIdCB(villager){
            return villagerToRemove.id !== villager.id;
        }
        const newVillagersArray = this.villagers.filter(hasSameIdCB); 
        if(newVillagersArray.length !== this.villagers.length) {
            this.villagers = newVillagersArray;
            this.notifyObservers({removeVillager: villagerToRemove});
        }
    }

    addMusic(musicToAdd) {
        function hasSameIdCB(music){
            return musicToAdd.id === music.id;
        }
        const newMusicsArray = this.music.filter(hasSameIdCB); 
    
        if (newMusicsArray.length === 0) {
            this.music= [...this.music, musicToAdd];
            this.notifyObservers({addMusic: musicToAdd});
        }
    }
    
    removeMusic(musicToRemove){
        function hasSameIdCB(music){
            return musicToRemove.id !== music.id;
        }
        const newMusicsArray = this.music.filter(hasSameIdCB); 
        if(newMusicsArray.length !== this.music.length) {
            this.music = newMusicsArray;
            this.notifyObservers({removeMusic: musicToRemove});
        }
    }

    addFossil(fossilToAdd) {
        function hasSameIdCB(fossil){
            return fossilToAdd.id === fossil.id;
        }
        const newFossilsArray = this.fossils.filter(hasSameIdCB); 
    
        if (newFossilsArray.length === 0) {
            this.fossils= [...this.fossils, fossilToAdd];
            this.notifyObservers({addFossil: fossilToAdd});
        }
    }
    
    removeFossil(fossilToRemove){
        function hasSameIdCB(fossil){
            return fossilToRemove.id !== fossil.id;
        }
        const newFossilsArray = this.fossils.filter(hasSameIdCB); 
        if(newFossilsArray.length !== this.fossils.length) {
            this.fossils = newFossilsArray;
            this.notifyObservers({removeFossil: fossilToRemove});
        }
    }

    addArt(artToAdd) {
        function hasSameIdCB(art){
            return artToAdd.id === art.id;
        }
        const newArtsArray = this.art.filter(hasSameIdCB); 
    
        if (newArtsArray.length === 0) {
            this.art= [...this.art, artToAdd];
            this.notifyObservers({addArt: artToAdd});
        }
    }
    
    removeArt(artToRemove){
        function hasSameIdCB(art){
            return artToRemove.id !== art.id;
        }
        const newArtsArray = this.art.filter(hasSameIdCB); 
        if(newArtsArray.length !== this.art.length) {
            this.art = newArtsArray;
            this.notifyObservers({removeArt: artToRemove});
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
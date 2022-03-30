class UserModel {
    constructor(fishArray = [], insectArray = [], 
                seaCreatureArray = [], villagerArray = [], 
                musicArray = [], fossilArray = [], artArray = []) {
        this.fish = fishArray;
        this.insects = insectArray;
        this.seaCreatures = seaCreatureArray;
        this.villagers = villagerArray;
        this.music = musicArray;
        this.fossils = fossilArray;
        this.art = artArray;
    }

    addFish(fishToAdd) {
        function hasSameIdCB(fish){
            return fishToAdd.id === fish.id;
        }
        const newFishArray = this.fish.filter(hasSameIdCB); 

        if (newFishArray.length === 0) {
            this.fish= [...this.fish, fishToAdd];
            this.notifyObservers({addFish: fishToAdd});
        }
    }

    removeFish(fishToRemove){
        function hasSameIdCB(fish){
            return fishToRemove.id !== fish.id;
        }
        const newFishArray = this.fish.filter(hasSameIdCB); 
        if(newFishArray.length !== this.fish.length) {
            this.fish = newFishArray;
            this.notifyObservers({removeFish: fishToRemove});
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
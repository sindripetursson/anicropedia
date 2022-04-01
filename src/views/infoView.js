function InfoView(props){
    return(
        <div className="info">
            <div className="grids grids__about">
                <div className="info__heading">
                    About Anicropedia
                </div> 
                <div className="info__text">   
                    Anicropedia is an application that helps you  identify all collectible items in Animal Crossing: New Horizons and select which items you have already. 
                    Below you will find information about all of the different aspects of the website.
                </div>
            </div>
            <div className="grids grids__island">
                <div className="info__heading">
                    My Island
                </div> 
                <div className="info__text">  
                    Here you will find information about all items that you have collected already. You will also see the villagers on your island and information about upcoming birthdays.
                </div>
            </div>
            <div className="grids grids__collectable">
                <div className="info__heading">
                    Collectible Encyclopedia
                </div> 
                <div className="info__text">  
                    Here all information can be found about the different collectibles in the game. These collectibles are split into Fish, Sea Creatures and Insects.
                    By clicking on a specific creature you can see information about when and where they can be found, their selling price and rarity.
                    Each creatures can be added to your collection by clicking the creature and pressing the “Add to my collection” button at the bottom.
                    Filters can be applied to display only creatures available at a certain time of day or year.
                </div>
            </div>
            <div className="grids grids__villagers">
                <div className="info__heading">
                    Villagers
                </div>
                <div className="info__text">
                    Here you can view all of the villagers that can be found in the game. By clicking a specific villagers you can see additional information such as their birthday, species, personality and catch-phrase.
                </div>
            </div>
            <div className="grids grids__music-info">
                <div className="info__heading">
                    Music
                </div>
                <div className="info__text">
                    Here you can view all of the music tracks created by K.K. Slider.
                    By hovering over a song you can add it to your collection or play it.
                </div>
            </div>
            <div className="grids grids__art">
                <div className="info__heading">
                    Art Collection
                </div>
                <div className="info__text">
                    Here you can see all of the art that can be bought from Redd. You can add it to your collection by clicking on it and pressing the “Add to my collection button”.
                </div>
            </div>
            <div className="grids grids__api-devs">
                <div className="info__heading">
                    API information
                </div>
                <div className="info__text">
                    Anicropedia utilizes APIs from ...
                    ADD LINKS
                </div>
                <br/>
                <div className="info__heading">
                    Developers
                </div>
                <div className="info__text">
                    Anicropedia was created by a group of students at KTH Royal Institute of Technology for the course Interaction Programming and the Dynamic Web during the spring semester of 2022. 
                </div>
            </div>
            <div className="grids grids__img">
                <div className="grids grids__img__contact-a">
                    <img className="image" src="../../images/benjamin-esdor.png" alt="" />
                </div>
                <div className="grids grids__img__contact-at">
                    <div className="image-name">
                        Adam Červeň
                    </div>
                    <div className="image-mail">
                        cerven@kth.se
                    </div>
                </div>
                <div className="grids grids__img__contact-b">
                    <img className="image" src="../../images/benjamin-esdor.png" alt="" />
                </div>
                <div className="grids grids__img__contact-bt">
                    <div className="image-name">
                        Benjamin Esdor
                    </div>
                    <div className="image-mail">
                        esdor@kth.se
                    </div>
                </div>
                <div className="grids grids__img__contact-c">
                    <img className="image" src="../../images/benjamin-esdor.png" alt="" />
                </div>
                <div className="grids grids__img__contact-ct">
                    <div className="image-name">
                    Káris Steinn Aðalsteinson
                    </div>
                    <div className="image-mail">
                    ksad@kth.se
                    </div>
                </div>
                <div className="grids grids__img__contact-d">
                    <img className="image" src="../../images/benjamin-esdor.png" alt="" />
                </div>
                <div className="grids grids__img__contact-dt">
                    <div className="image-name">
                    Sindri Peturson
                    </div>
                    <div className="image-mail">
                    sindrip@kth.se
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoView;
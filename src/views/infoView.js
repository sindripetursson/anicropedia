function InfoView(props){
    return(
        <div className="info">
            <div className="info__container">
            <div className="info__row">
                <div className="info__col">
                    <div className="info__heading">
                        About Anicropedia
                    </div> 
                    <div className="info__text">   
                        Anicropedia is an application that is the perfect companion for your Animal Crossing: New Horizons game! It lets you identify all critters and collectibles, track which items you have already collected through My Island, view all of the different villagers of Animal Crossing, listen to K.K. Slider's songs and more! <br /> <br />
                        Here is specific information about all of the different parts of the website.
                    </div>
                </div>
                <div className="info__col">
                    <div className="info__heading">
                        Encyclopedia
                    </div> 
                    <div className="info__text">  
                        Here all information can be found about the different collectibles in the game. These collectibles are split into Fish, Sea Creatures and Insects.
                        By clicking on a specific creature you can see information about when and where they can be found, their selling price and rarity. <br /><br />
                        Each creature can be added to your collection by clicking the creature and pressing the “Add to my collection” button at the bottom.
                        Filters can be applied to display only creatures available at a certain time of day or year.
                    </div>
                </div>
                <div className="info__col">
                    <div className="info__heading">
                        Villagers
                    </div>
                    <div className="info__text">
                        Here you can view all of the villagers that can be found in the game. By clicking a specific villagers you can see additional information such as their birthday, species, personality and catch-phrase. <br /> <br />
                        You can add your villagers to My Island, so that you can always access all important information relevant to your Animal Crosssing game!
                    </div>
                </div>
                <div className="info__col">
                    <div className="info__heading">
                        Background Music
                    </div> 
                    <div className="info__text">  
                        Anicropedia provides you with in-game hourly music, matched exactly to what is currently playing in your Animal Crossing game. You can listen to the hourly music by unmuting the speaker in the top right corner (next to the menu).
                        This music is based on your location you have specified when signing up (or in the settings), and depends on the current time and weather. <br /><br />
                        Now you can enjoy the amazing Animal Crossing tunes just like in the game even when browsing through Anicropedia.
                    </div>
                </div>
            </div>
            <div className="info__row">
            <div className="info__col">
                    <div className="info__heading">
                        My Island
                    </div> 
                    <div className="info__text">  
                        Here you will find information about all items that you have collected already. You will also see the villagers on your island.
                    </div>
                </div>
 
                <div className="info__col">
                    <div className="info__heading">
                        Music
                    </div>
                    <div className="info__text">
                        Here you can view and play all of the music tracks created by K.K. Slider.
                        By pressing the play button, you can listen to the song, and decide if you want to add it to your collection.
                    </div>
                </div>
                <div className="info__col">
                    <div className="info__heading">
                        Collectibles
                    </div>
                    <div className="info__text">
                        Here you can see all of the art and fossils that can be found in the game. You can add them to your collection by clicking on them and pressing the “Add to my collection button”.
                    </div>
                </div>
                <div className="info__col">
                    <div className="info__heading">
                        API information
                    </div>
                    <div className="info__text">
                        Anicropedia utilizes APIs from <a href="http://acnhapi.com"> ACNH API</a>, <a href="https://openweathermap.org/api"> OpenWeather API</a> and <a href="https://developers.google.com/maps/documentation/places/web-service/overview">Google Places API</a>. Some resources were acquired from third parties:
                        <ul>
                            <li style={{marginTop: "10px"}}>The Animal Crossing Loader<a href="https://dribbble.com/shots/13905159-Animal-Crossing-New-Horizons-loader"> by Akhil Dakinedi</a></li>
                            <li style={{marginTop: "10px"}}>The background wallpaper <a href="https://ko-fi.com/post/Animal-Crossing-Leaf-Wallpapers-N4N51I7CL"> by Ashaife</a></li>
                        </ul>
                        
                        
                    </div>
                </div>
                

            </div>
            <div className="info__row--developers">
                <div className="info__col--developers">
                        <div className="info__heading">
                            Developers
                        </div>
                        <div className="info__text">
                            Anicropedia was created by a group of students at KTH Royal Institute of Technology for the course Interaction Programming and the Dynamic Web during the spring semester of 2022. 
                        </div>
                </div>
            </div>
            <div className="info__row">
            <div className="info__col">
                <div className="infoItem">
                    <img className="info_image" src="../../images/adam-cerven.png" alt="" />
                    <div className="image-name">
                        Adam Červeň
                    </div>
                    <div className="image-mail">
                        cerven@kth.se
                    </div>
                </div>
            </div>
            <div className="info__col">
                <div className="infoItem">
                    <img className="info_image" src="../../images/benjamin-esdor.png" alt="" />
                    <div className="image-name">
                        Benjamin Esdor
                    </div>
                    <div className="image-mail">
                        esdor@kth.se
                    </div>
                </div>
            </div>
            <div className="info__col">
                <div className="infoItem">
                    <img className="info_image" src="../../images/kari-steinn.png" alt="" />
                
                    <div className="image-name">
                        Kári Steinn Aðalsteinsson
                    </div>
                    <div className="image-mail">
                        ksad@kth.se
                    </div>
                </div>
            </div>
            <div className="info__col">
                <div className="infoItem">
                    <img className="info_image" src="../../images/sindri-petursson.png" alt="" />
                    <div className="image-name">
                        Sindri Peturson
                    </div>
                    <div className="image-mail">
                        sindrip@kth.se
                    </div>
                </div>
            </div>
                
                
                
                
            {/* </div> */}
            </div>
            </div>
            
            
        </div>
    );
}

export default InfoView;
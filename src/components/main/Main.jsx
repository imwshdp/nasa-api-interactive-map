import React from 'react';
import InfoSection from '../UI/info section/InfoSection';
import MapWrapper from '../UI/map wrapper/MapWrapper';

const Main = ({infoList, refProp, selected, asteroidInfo, sourceRef}) => {

    return (
        <main>
            <h1>NEAR - EARTH ASTEROIDS</h1>
            <div className="astro-section">
                <MapWrapper
                    refProp={refProp}
                    infoList={infoList}
                    selected={selected}
                    asteroidInfo={asteroidInfo}
                />
                <InfoSection
                    asteroidInfo={asteroidInfo}
                    sourceRef={sourceRef}
                />
            </div>
        </main>
    );
 }
 
 export default Main;
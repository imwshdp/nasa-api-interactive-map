import React from 'react';
import InfoSection from 'components/UI/infoSection/InfoSection';
import MapWrapper from 'components/UI/mapWrapper/MapWrapper';

const Main = ({ infoList, refProp, selected, asteroidInfo, sourceRef }) => {
    return (
        <main>
            <div className='title'>
                <h1>NEAR - EARTH ASTEROIDS</h1>
            </div>
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
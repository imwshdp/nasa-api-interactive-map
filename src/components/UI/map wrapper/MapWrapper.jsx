import React from 'react';
import MiniInfoBlock from '../../min info block/MinInfoBlock';

const MapWrapper = ({infoList, refProp, selected, asteroidInfo}) => {

    function round(number) {
        return Number(number).toFixed(2);
    }

    return (
        <section className="map-wrapper">
            <div ref={refProp} className="margin-wrapper">

                    {infoList.map( (arc, id) =>
                        <div key={id} className="arc">
                            {arc.map( (asteroid) =>
                                <button
                                    key={asteroid.id}
                                    onClick={() => {
                                        selected(asteroid)
                                    }}
                                    className="asteroid">
                                </button>
                            )}
                        </div>
                    )}

                <div className="earth"></div>

            </div>

            { asteroidInfo
                ?
                    <div className="modal">
                        <MiniInfoBlock id="name" textTitle="NAME:">
                            <p>{asteroidInfo.name}</p>
                        </MiniInfoBlock>

                        <MiniInfoBlock id="diameter" textTitle="DIAMETER SIZES:">
                            <p>{round(asteroidInfo.estimated_diameter.kilometers.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.kilometers.estimated_diameter_max)} KILOMETERS</p>
                        </MiniInfoBlock>

                        <MiniInfoBlock  id="close-a-date" textTitle="CLOSE APPROACH DATE:">
                            <p>{asteroidInfo.close_approach_data[0].close_approach_date_full}</p>
                        </MiniInfoBlock>

                        <MiniInfoBlock textTitle="MISS DISTANCE:">
                            <p>{round(asteroidInfo.close_approach_data[0].miss_distance.kilometers)} KILOMETERS</p>
                        </MiniInfoBlock>

                        <MiniInfoBlock id="velocity" textTitle="RELATIVE VELOCITY:">
                            <p>{round(asteroidInfo.close_approach_data[0].relative_velocity.kilometers_per_hour)} KM / HOUR</p>
                        </MiniInfoBlock>

                        <MiniInfoBlock id="hazardous" textTitle="POTENTIALLY HAZARDOUS:">
                            <p>{asteroidInfo.is_potentially_hazardous_asteroid
                                ? 'TRUE'
                                : 'FALSE'
                            }</p>
                        </MiniInfoBlock>
                    </div>
                :
                    <div></div>
                }

        </section>
    );
}

export default MapWrapper;
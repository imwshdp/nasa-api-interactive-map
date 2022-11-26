import Button from '../button/Button';
import InfoBlock from '../../info block/InfoBlock';

const InfoSection = ({asteroidInfo, sourceRef}) => {

    function round(number) {
        return Number(number).toFixed(2);
    }

    return (
        <aside className="info-section">

                { asteroidInfo
                ?
                    <section className="asteroid-info">

                        <InfoBlock id="name" textTitle="NAME">
                            <p>{asteroidInfo.name}</p>
                        </InfoBlock>

                        <InfoBlock id="diameter" textTitle="DIAMETER SIZES">
                            <p>{round(asteroidInfo.estimated_diameter.meters.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.meters.estimated_diameter_max)} METERS</p>
                            <p>{round(asteroidInfo.estimated_diameter.kilometers.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.kilometers.estimated_diameter_max)} KILOMETERS</p>
                            <p>{round(asteroidInfo.estimated_diameter.miles.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.miles.estimated_diameter_max)} MILES</p>
                            <p>{round(asteroidInfo.estimated_diameter.feet.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.feet.estimated_diameter_max)} FEET</p>
                        </InfoBlock>

                        <InfoBlock  id="close-a-date" textTitle="CLOSE APPROACH DATE">
                            <p>{asteroidInfo.close_approach_data[0].close_approach_date_full}</p>
                            <p>MISS DISTANCE: {round(asteroidInfo.close_approach_data[0].miss_distance.kilometers)} KILOMETERS</p>
                        </InfoBlock>

                        <InfoBlock id="velocity" textTitle="RELATIVE VELOCITY">
                            <p>{round(asteroidInfo.close_approach_data[0].relative_velocity.kilometers_per_hour)} KM / HOUR</p>
                            <p>{round(asteroidInfo.close_approach_data[0].relative_velocity.kilometers_per_second)} KM / SEC</p>
                            <p>{round(asteroidInfo.close_approach_data[0].relative_velocity.miles_per_hour)} MILES / HOUR</p>
                        </InfoBlock>

                        <InfoBlock id="hazardous" textTitle="POTENTIALLY HAZARDOUS">
                            <p>{asteroidInfo.is_potentially_hazardous_asteroid
                                ? 'TRUE'
                                : 'FALSE'
                            }</p>
                        </InfoBlock>

                    </section>

                :

                    <section className="asteroid-info">
                        <p style={{textAlign: 'center'}}>Click on asteroid to get information from NASA API</p>
                    </section>
                }

                <Button>
                    <a href={sourceRef}>
                        <span>View Source Info On NASA Site</span>
                    </a>
                </Button>

	    </aside>
    );
}

export default InfoSection;
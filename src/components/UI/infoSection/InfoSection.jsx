import Button from 'components/UI/button/Button';
import InfoBlock from 'components/infoBlocks/infoBlock/InfoBlock';
import round from 'utils/round'
import stringifyDate from "utils/stringifyDate";

const InfoSection = ({ asteroidInfo, sourceRef }) => {
    return (
        <aside className="info-section">

            {asteroidInfo
                ?
                <section className="asteroid-info">

                    <InfoBlock id="name" textTitle="NAME">
                        <p>{asteroidInfo.name}</p>
                    </InfoBlock>

                    <InfoBlock id="diameter" textTitle="DIAMETER SIZES">
                        <p>{round(asteroidInfo.estimated_diameter.meters.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.meters.estimated_diameter_max)} Meters</p>
                        <p>{round(asteroidInfo.estimated_diameter.kilometers.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.kilometers.estimated_diameter_max)} Kilometers</p>
                        <p>{round(asteroidInfo.estimated_diameter.miles.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.miles.estimated_diameter_max)} Miles</p>
                        <p>{round(asteroidInfo.estimated_diameter.feet.estimated_diameter_min)} - {round(asteroidInfo.estimated_diameter.feet.estimated_diameter_max)} Feet</p>
                    </InfoBlock>

                    <InfoBlock id="close-a-date" textTitle="CLOSE APPROACH DATE">
                        <p>{stringifyDate(asteroidInfo)}</p>
                        <p>MISS DISTANCE: {round(asteroidInfo.close_approach_data[0].miss_distance.kilometers)} Kilometers</p>
                    </InfoBlock>

                    <InfoBlock id="velocity" textTitle="RELATIVE VELOCITY">
                        <p>{round(asteroidInfo.close_approach_data[0].relative_velocity.kilometers_per_hour)} km / hour</p>
                        <p>{round(asteroidInfo.close_approach_data[0].relative_velocity.kilometers_per_second)} km / sec</p>
                        <p>{round(asteroidInfo.close_approach_data[0].relative_velocity.miles_per_hour)} miles / hour</p>
                    </InfoBlock>

                    <InfoBlock id="hazardous" textTitle="POTENTIALLY HAZARDOUS">
                        <p>{asteroidInfo.is_potentially_hazardous_asteroid
                            ? 'True'
                            : 'False'
                        }</p>
                    </InfoBlock>

                </section>
                :
                <section className="asteroid-info">
                    <p style={{ textAlign: 'center' }}>Click on asteroid to get information from NASA API</p>
                </section>
            }

            <Button>
                <a href={sourceRef}>
                    <span>NASA API Data Source</span>
                </a>
            </Button>

        </aside>
    );
}

export default InfoSection;
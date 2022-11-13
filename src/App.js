import React, { useEffect, useRef, useState } from 'react';
import { useFetching } from './hooks/useFetching';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './styles/App.css';
import GetService from './API/GetService';
import { positioning } from './utils/positioning';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

export default function App() {

    // состояние списка информации об астероидах
    const [infoList, setInfoList] = useState([])

    // ограничение на максимальное количество показываемых астероидов
    const [MaxAsteroidsNumber, setMaxAsteroidsNumber] = useState(8)

    // получение данных 
    const [fetchInfo, fetchError] = useFetching( async () => {
        
        let response = await GetService.getInfo(setSourceRef, setUpdateDate);

        // слайс необходимого количества элементов
        let slicedArray = [], finalArray = []
        if(response.length > MaxAsteroidsNumber) {
            slicedArray = response.slice(0, MaxAsteroidsNumber)
        } else {
            slicedArray = (response.length % 2 === 0)
                ? [...response]
                : response.slice(0, response.length-1)
        }

        // формирование двумерного массива
        for(let i = 0; i < slicedArray.length; i+=2) {
            finalArray = [...finalArray, slicedArray.slice(i, i+2)]
        }
        setInfoList([...finalArray])
    })

    useEffect( () => {
        fetchInfo()
    }, [])

    // ссылка на контейнер с системой астероидов
    const marginWrapper = useRef(null)

    // ссылка на объект NASA
    const [sourceRef, setSourceRef] = useState(null)

    // наблюдатель за изменением состояния ссылки на контейнер
    useEffect( () => {
        //console.log(marginWrapper.current.children)
        positioning(marginWrapper)
    }, [marginWrapper, infoList])

    // состояние выбранного астероида для вывода информации о нём
    const [selectedAsteroid, setSelectedAsteroid] = useState(null)

    // дата обновления информации
    const [updateDate, setUpdateDate] = useState(null)

    return (
        <React.Fragment>
            <Header />
            <Navbar />
            <Main
                refProp={marginWrapper}
                infoList={infoList}
                selected = {setSelectedAsteroid}
                asteroidInfo={selectedAsteroid}
                sourceRef={sourceRef}
            />
            <Footer date={updateDate} />
        </React.Fragment>
    );
}
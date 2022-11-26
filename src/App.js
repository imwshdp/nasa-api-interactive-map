import React, { useEffect, useRef, useState } from 'react';
import { useFetching } from './hooks/useFetching';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './styles/App.css';
import GetService from './API/GetService';
import { positioning } from './utils/positioning';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';

export default function App() {

    // состояние списка информации об астероидах
    const [infoList, setInfoList] = useState([])

    // ограничение на максимальное количество показываемых астероидов
    const MaxAsteroidsNumber = 10

    // получение данных
    const [fetchInfo, fetchError] = useFetching( async () => {
    
        let response = await GetService.getInfo(setSourceRef, setUpdateDate);
        let slicedArray = [], finalArray = []
        
        // слайс необходимого количества элементов
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
    const marginWrapper = useRef()

    // ссылка на объект NASA
    const [sourceRef, setSourceRef] = useState(null)

    // наблюдатель за изменением состояния полученных данных
    useEffect( () => {
        if(infoList.length) {
            positioning(marginWrapper, MaxAsteroidsNumber)
        }
    }, [infoList])

    // состояние выбранного астероида для вывода информации о нём
    const [selectedAsteroid, setSelectedAsteroid] = useState(null)

    // дата обновления информации
    const [updateDate, setUpdateDate] = useState(null)

    return (
        <>
            <Header />
            <Navbar sourceRef={sourceRef} />
            { sourceRef && updateDate
            ?
                <>
                    <Main
                        refProp={marginWrapper}
                        infoList={infoList}
                        selected = {setSelectedAsteroid}
                        asteroidInfo={selectedAsteroid}
                        sourceRef={sourceRef}
                    />
                </>
            :
                <Loader />
            }
            <Footer date={updateDate} />
        </>
    );
}
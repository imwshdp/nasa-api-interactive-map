export const positioning = (marginWrapper, circlesNumber) => {

    let circleIncreasing = 100, positionsArray = [0, 0.75, 0.83, 0.916];

	let counter = 0, asteroid;
	var newSize, newMargin, corX, corY, coordsArray, curAngle, shift;

    const regex = new RegExp('arc')
    let collection = marginWrapper.current

    for(let arc of collection.children) {
            
        if(regex.test(arc.className) && counter < circlesNumber) {
            
            if(counter === 0) shift = arc.offsetLeft;

            newSize = arc.offsetHeight + counter * circleIncreasing;
            newMargin = arc.offsetLeft - counter * Math.abs(shift);
            arc.setAttribute("style",`height: ${newSize}px; width: ${newSize}px; left: ${newMargin}px; top: ${newMargin}px;`);

            if(counter % 2 === 0) { // 0,2,4 etc
                coordsArray = positionsArray.slice(0, positionsArray.length/2);
            } else { // 1,3,5 etc
                coordsArray = positionsArray.slice(positionsArray.length/2, positionsArray.length);
            }

            for(asteroid of arc.children) {
	    		curAngle = coordsArray.shift();
				corX = arc.offsetWidth/2 + arc.offsetWidth/2 * Math.cos(curAngle * 2 * Math.PI);
				corY = arc.offsetHeight/2 - arc.offsetHeight/2 * Math.sin(curAngle * 2 * Math.PI);
				asteroid.setAttribute("style",`margin-left: ${corX+shift/2}px; margin-top: ${corY+shift/2}px;`);
			}
            counter++;
        }
    }
}
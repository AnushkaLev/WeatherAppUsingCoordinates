export const iconMap = new Map()

addMapping([0, 1], "clear") 
addMapping([2], "clouds") 
addMapping([3], "clouds") 
addMapping([45, 48], "humidity") 
addMapping( [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "rain" ) 
addMapping([71, 73, 75, 77, 85, 86], "snow") 
addMapping([95, 96, 99], "storm")

function addMapping(values, icon) { values.forEach(value => 
    { iconMap.set(value, icon) }) }
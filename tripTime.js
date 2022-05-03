const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }

    for(let i = 0; i < arr.length; i++){
        let totDistance = arr[i].speedLimits.reduce((tot, ele) => tot + ele.distance, 0);
        let segResult = arr[i].speedLimits.reduce((res, ele) => {
            return {
                avg: res.avg + (ele.distance/totDistance) * ele.speedLimit,
                segTime: res.segTime + (ele.distance/ele.speedLimit)
            }
        }, {avg:0,segTime:0});
        result.avgSpeedLimits.push(Math.round(segResult.avg));
        result.segmentTimes.push(Math.round(segResult.segTime));
    }
    
    result.totalTime = result.segmentTimes.reduce((tot,ele) => tot + ele, 0)
    return result
}

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


console.log(tripTime(stops));
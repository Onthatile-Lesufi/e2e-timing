import axios from "axios";
import dummyData from "../assets/test-assets/PerformancesResults.csv";

export const GetMeetAthletes = async (data) => {
    const _performances = await ParsePerformanceFile(data? data : dummyData);
    
    let _seenAthleteKeys = new Set();
    let _athletes = [];

    _performances.forEach(performance => {
        const _athleteKey = `${performance.firstName}-${performance.lastName}-${performance.birthDate}`;

        if (!_seenAthleteKeys.has(_athleteKey)) {
            _seenAthleteKeys.add(_athleteKey); 
            
            _athletes.push({
                firstName: performance.firstName,
                lastName: performance.lastName,
                birthDate: performance.birthDate,
                gender: performance.gender,
                club: performance.club,
                division: performance.eventAge
            });
        }
    });

    // console.log("Individual athletes:", _athletes);
    return _athletes;
}

export const GetEventResults = async (data) => {
    const _performances = await ParsePerformanceFile(data? data : dummyData);

    let _results = [];
    _performances.forEach(performance => {
        let _event = `${performance.eventName} ${performance.gender} U${performance.eventAge}`;

        let _i = _results.findIndex(result => result.name === _event);
        if (_i >= 0) {
            _results[_i].results.push({
                firstName: performance.firstName,
                lastName: performance.lastName,
                birthDate: performance.birthDate,
                club: performance.club,
                performance: performance.performance
            });
        } else {
            _results.push({
                name: _event,
                results: [{
                    firstName: performance.firstName,
                    lastName: performance.lastName,
                    birthDate: performance.birthDate,
                    club: performance.club,
                    performance: performance.performance
                }]
            });
        }
    });

    return _results;
}

export const GetEventDetails = async () => {
    
}

export const ParsePerformanceFile = async (url) => {
    let _performances = [];
    try {
        // 1. Fetch the raw CSV text
        const _response = (await axios.get(url, { timeout: 10000 })).data;
        let _lines = _response.split('\n').filter(line => line.trim() !== '');
        _lines.forEach(line => {
            let _performance = line.split(',');
            _performance[7] = _performance[7].replace(/'/g, '');
            _performance[3] = _performance[3].replace(/'/g, '');
            let _performanceValue = Number.parseFloat(_performance[3]);
            let _birthDate = new Date(_performance[7]);
            let _result = {
                gender: _performance[0],
                eventAge: _performance[1],
                eventName: _performance[2],
                performance: _performanceValue,
                firstName: _performance[5],
                lastName: _performance[6],
                birthDate: _birthDate,
                club: _performance[8],
                eventVenue: _performance[10]
            }
            _performances.push(_result);
        });

        // console.log("Parsed performances:", _performances);
        return _performances;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.error("Request timed out fetching the CSV file.");
        } else {
            console.error("Error fetching or parsing CSV:", error.message);
        }
        return _performances;
    }
}
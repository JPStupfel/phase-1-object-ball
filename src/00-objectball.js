
function gameObject() {const objectBall = {"home":{"teamName":"Brooklyn Nets","colors":"Black, White","players":{"Alan Anderson":{"Number":"0","Shoe":"16","Points":"22","Rebounds":"12","Assists":"12","Steals":"3","Blocks":"1","Slam Dunks":"1"},"Reggie Evans":{"Number":"30","Shoe":"14","Points":"12","Rebounds":"12","Assists":"12","Steals":"12","Blocks":"12","Slam Dunks":"7"},"Brook Lopez":{"Number":"11","Shoe":"17","Points":"17","Rebounds":"19","Assists":"10","Steals":"3","Blocks":"1","Slam Dunks":"15"},"Mason Plumlee":{"Number":"1","Shoe":"19","Points":"26","Rebounds":"12","Assists":"6","Steals":"3","Blocks":"8","Slam Dunks":"5"},"Jason Terry":{"Number":"31","Shoe":"15","Points":"19","Rebounds":"2","Assists":"2","Steals":"4","Blocks":"11","Slam Dunks":"1"}}},"away":{"teamName":"Charlotte Hornets","colors":"Turquoise, Purple","players":{"Jeff Adrien":{"Number":"4","Shoe":"18","Points":"10","Rebounds":"1","Assists":"1","Steals":"2","Blocks":"7","Slam Dunks":"2"},"Bismak Biyombo":{"Number":"0","Shoe":"16","Points":"12","Rebounds":"4","Assists":"7","Steals":"7","Blocks":"15","Slam Dunks":"10"},"DeSagna Diop":{"Number":"2","Shoe":"14","Points":"24","Rebounds":"12","Assists":"12","Steals":"4","Blocks":"5","Slam Dunks":"5"},"Ben Gordon":{"Number":"8","Shoe":"15","Points":"33","Rebounds":"3","Assists":"2","Steals":"1","Blocks":"1","Slam Dunks":"0"},"Brendan Haywood":{"Number":"33","Shoe":"15","Points":"6","Rebounds":"12","Assists":"12","Steals":"22","Blocks":"5","Slam Dunks":"12"}}}}
return objectBall
}

function numPointsScored(playerName){
//that takes in an argument of a player's name and returns the number of points scored for that player.
let data = gameObject();
for (let team in data){
    if (data[team]['players'][playerName]){
        return data[team]['players'][playerName]['Points']
    }
else {return null}
}

}

function shoeSize(playerName){
    let data = gameObject()
    for (let team in data){
        if (data[team]['players'][playerName]){
            return data[team]['players'][playerName]['Shoe']
        }
        else {return null}
    }
}

function teamColors(nameOfTeam){
    let data = gameObject()
    let colorsArray = []
    for (let team in data){
        //console.log(data[team]['teamName'])
        // console.log(typeof(data[team]['teamName']))
         if ( data[team]['teamName'] ===  nameOfTeam) {colorsArray.push(data[team]['colors']);
         return colorsArray}

}
}

function teamNames(){
    let data = gameObject()
    let namesofTeams = []
    for (let team in data){namesofTeams.push(data[team]['teamName'])}
    return namesofTeams
}

function playerNumbers(nameOfTeam){
    let data = gameObject();
    let numbersArray = [];
    for (let team in data) {
        if (data[team]['teamName']===nameOfTeam){
        //console.log(team)
        for (player in data[team]['players']) {
            numbersArray.push(data[team]['players'][player]['Number'])}
    
    }}
    return numbersArray
    }

function playerStats(nameOfPlayer){
        let data = gameObject()
        for (let team in data){if (data[team]['players'][nameOfPlayer]){
            return data[team]['players'][nameOfPlayer]
         }}
    }

function makAllPlayersObj(){

        let data = gameObject()
        let allPlayerObj = {}
        for (team in data){
            for (player in data[team]['players']){
                allPlayerObj[player] = data[team]['players'][player]
            }
        }
        return allPlayerObj

    }

    //return player stats of player with largetst shoe size
function getLargestShoe(){
        let allPlayerObj = makAllPlayersObj()
        let arrayOfShoeSize = (()=>{let arrayOfShoeSize = [];
                            for (player in allPlayerObj){arrayOfShoeSize.push(allPlayerObj[player]['Shoe'])}; return arrayOfShoeSize})()
        let largestSizeInObj = arrayOfShoeSize.sort().reverse()[0];

        let largestShoePlayersObj = (()=>{let largestShoePlayersObj = {};
        for (player in allPlayerObj){
            if (allPlayerObj[player]['Shoe']===largestSizeInObj){
                largestShoePlayersObj[player] = allPlayerObj[player]
            }
        }
        return largestShoePlayersObj
    })()
        return largestShoePlayersObj
    }

function getReboundsOfLargestShoe(){
    let playerStats = getLargestShoe()
    let reboundsPlayerObj = {}
    for (player in playerStats){
        reboundsPlayerObj[player] = playerStats[player]['Rebounds']
    }
    return reboundsPlayerObj
}


function getPointsfromTeam(team){
    let data = gameObject()[team]
    let points = []
    debugger;
    for (let player in data['players']){points.push(
        parseInt((data['players'][player]['Points']),10)
        );
    }
    return points.reduce((prev,cur)=>(prev + cur))
}

//returns an object with values of highest number
function returnLargestValue(obj={a:1, b:2}){

//let largest = Object.values(obj).sort().reverse()[0]
let array = []
for (key in obj){array.push( parseInt(obj[key],10) )}
let largest = array.sort((a,b)=>a-b).reverse()[0]
let returnObj = {}
for (let key in obj) {
    if ( parseInt(obj[key],10)  === largest) {
        returnObj[key] = obj[key]
    }
}
return returnObj

}



function winningTeam(){
    
    
    let data = gameObject()
   
    
    let objOfTeamsbyScore = {}

    for (let team in data) {objOfTeamsbyScore[team] = getPointsfromTeam(team)}

    return returnLargestValue(objOfTeamsbyScore)
    
}


function playerWithLongestName(){
    let data = gameObject()
    let playerObj = makAllPlayersObj()
    let lengthObj = {}
    for (player in playerObj) { 
        lengthObj[player] = player.length
    }
    let longestName = returnLargestValue(lengthObj)
    return longestName
}


function getHighestStat(stat){
    let allPlayerObj = makAllPlayersObj()
    let statObj = {}
    for (let player in allPlayerObj){statObj[player] = allPlayerObj[player][stat]}
    return returnLargestValue(statObj)
    }





function doesLongNameStealATon(){
    let player = Object.keys(playerWithLongestName())[0]
    let stealer = Object.keys(getHighestStat('Steals'))[0]
    return player ===stealer
}
getFighter = (arrayFighters, position) => {
    const array1 = arrayFighters[0]
    const array2 = arrayFighters[1]
    if(position[0] === 0){
        return array1[position[1]]
    }
    else
        return array2[position[1]]
}

street_fighters = (arrayFighters, arrayMoves) => {
    let position = [0, 0];
    let players = []
    for(let k=0; k< arrayMoves.length;k++){
        let move = arrayMoves[k];
        let temp;
        switch(move){
            case "right": position[1] = (position[1]+1)%6; break;
            case "left": 
                temp = (6 + position[1]-1)%6;
                position[1] = temp < 0 ? -temp : temp;
                break;
            case "up": position[0] === 1 ? position[0] = 0 : position; break;
            case "down": position[0] === 0 ? position[0] =1 : position; break;
            default: break;
        }
        players = [...players, getFighter(arrayFighters, position)]
    }
    return players
}


const fighters =  [["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]]
const moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
const result = street_fighters(fighters, moves)
console.log(result)

    
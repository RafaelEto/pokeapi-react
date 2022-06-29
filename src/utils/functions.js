export default function pokemonTypeColor(color) {
    switch (color){
        case 'normal':
            return '#BEBEB3'
        case 'fighting':
            return '#AB5843'
        case 'flying':
            return '#76A3FE'
        case 'poison':
            return '#A85BA1'
        case 'ground':
            return '#E6C758'
        case 'rock':
            return '#D0BD72'
        case 'bug':
            return '#C3D21F'
        case 'ghost':
            return '#7B75D7'
        case 'steel':
            return '#C3C2D8'
        case 'fire':
            return '#FA5542'
        case 'water':
            return '#56ADFF'
        case 'grass':
            return '#8BD750'
        case 'electric':
            return '#FEE441'
        case 'psychic':
            return '#F464B1'
        case 'ice':
            return '#95F1FE'
        case 'dragon':
            return '#8975F7'
        case 'dark':
            return '#8E6A54'
        case 'fairy':
            return '#FBADFF'
        case 'unknown':
            return '#1C9C88'
        case 'shadow':
            return '#9783B8'
        default:
            return '#fff'
    }
}
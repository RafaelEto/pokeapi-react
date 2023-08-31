import Loading from "../Loading";
import { PokemonBox, PokemonName, PokemonCardSearch, PokemonStatsList, PokemonStats, PokemonTypesList, PokemonTypesBox, PokemonTypes, PokemonContent, PokemonImages } from "./styles" 

export default function PokemonInfo({ data }) {
    console.log(data);
    if (!data) {
        return <Loading/>
    }
    return <>
        <PokemonCardSearch>
            <PokemonBox>
                <PokemonImages>
                    <img src={data.sprites?.other["official-artwork"].front_default} alt={data.name} width="400" height="400" />
                </PokemonImages>
                <PokemonContent>
                    <PokemonTypesList>
                        {data.types?.map(item => (
                            <PokemonTypes>
                                <PokemonTypesBox typeName={item.type.name}>
                                    <p>{item.type.name}</p>
                                </PokemonTypesBox>
                            </PokemonTypes>
                        ))}
                    </PokemonTypesList>
                    <PokemonName>
                        {data.name}
                    </PokemonName>
                    <PokemonStatsList>
                        {data.stats?.map(item => (
                            <PokemonStats key={item.stat.name}>
                                <p>{item.stat.name}</p>
                                <div></div>
                                <span>{item.base_stat}</span>
                            </PokemonStats>
                        ))}
                    </PokemonStatsList>
                </PokemonContent>
            </PokemonBox>
        </PokemonCardSearch>
    </>
}
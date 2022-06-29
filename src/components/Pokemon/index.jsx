import { PokemonCard, PokemonCardSearch, PokemonBox, PokemonName, PokemonInfo, PokemonStatsList, PokemonStats, PokemonTypesList, PokemonTypesBox, PokemonTypes } from "./styles"

export default function Pokemon({ name, image, data }) {
    return (
        <>
            {!data && (
                <PokemonCard>
                    <PokemonBox>
                        <img src={image} alt={name} width="200" height="200" />
                        <PokemonInfo>
                            <PokemonName>
                                {name}
                            </PokemonName>
                        </PokemonInfo>
                    </PokemonBox>
                </PokemonCard>
            )}
            {data && (
                <PokemonCardSearch>
                    <PokemonBox>
                        <img src={data.sprites?.other.dream_world.front_default} alt={data.name} width="150" height="150" />
                        <PokemonInfo>
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
                        </PokemonInfo>
                    </PokemonBox>
                </PokemonCardSearch>
            )}
        </>
    )
}
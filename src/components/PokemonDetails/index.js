
import "./index.css"

const PokemonDetails = props =>{
    const {data} = props  
    console.log(data)  

    return(
        
<div className="pokemon-details-list">
    <h1 className="pokemon-name">{data.name.toUpperCase()}</h1>
    <div className="abilities-container">
        <p className="abilities">Abilities</p>
        {data.abilities.map(item =>(
            <ul className="unordered-abilities-list-container">
                <li className="abilities-list-item">
                    <p className="ability-name">Ability Name: <span className="ab-name">{item.ability.name}</span></p>
                    <p className="ability-name">Ability Url: <span className="ab-name">{item.ability.url}</span> </p>
                    <p className="ability-name">Is Hidden: <span className="ab-name">{item.is_hidden}</span></p>
                    <p className="ability-name">Slot: <span className="ab-name">{item.slot}</span></p>
                </li>
                </ul>
                ))}
                </div>
                <div className="abilities-container">
                <p className="abilities">Forms</p>
                {data.forms.map(item=>(
                <ul className="unordered-abilities-list-containe">
                <li className="abilities-list-item">
                <p className="ability-name">Ability Name: <span className="ab-name">{item.name}</span></p>
                    <p className="ability-name">Ability Url: <span className="ab-name">{item.url}</span> </p>
                    
                </li>
                </ul>
                ))}
                </div>
                <div className="abilities-container">
                    <p className="abilities">Base Experience</p>
                    
                        <p className="ability-name">Base Experience: <span className="ab-name">{data.base_experience}</span> </p>
                </div>
                <div className="abilities-container">
        <p className="abilities">Game Indices</p>
        {data.game_indices.map(item =>(
            <ul className="unordered-abilities-list-container">
                <li className="abilities-list-item">
                <p className="ability-name">Game Index: <span className="ab-name">{item.game_index}</span></p>
                    <p className="ability-name">Game Indices Name: <span className="ab-name">{item.version.name}</span></p>
                    <p className="ability-name">Game Indices Url: <span className="ab-name">{item.version.url}</span> </p>
                </li>
                </ul>
                ))}
                </div>
                <div className="abilities-container">
                    <p className="abilities">Height</p>
                    
                        <p className="ability-name">Height: <span className="ab-name">{data.height}</span> </p>
                </div>
                <div className="abilities-container">
        <p className="abilities">Held Items</p>
        {data.held_items.map(value =>(
            <ul className="unordered-abilities-list-container">
                <li className="abilities-list-item">
                    <p className="abilities">Item Details</p>
                <p className="ability-name">Item Name: <span className="ab-name">{value.item.name}</span></p>
                    <p className="ability-name">Item Url: <span className="ab-name">{value.item.url}</span></p>
                    </li>
                    <li className="abilities-list-item">
                    <p className="abilities">Version Details</p>
                    {value.version_details.map(item =>(
                        <>                       
                        <p className="ability-name">Version Rarity: <span className="ab-name">{item.rarity}</span></p>
                        <p className="ability-name">Version Name: <span className="ab-name">{item.version.name}</span></p>
                        <p className="ability-name">Version Url: <span className="ab-name">{item.version.url}</span></p>
                        </> 

                    ))}
                    
                    </li>
                    
                
                </ul>
                ))}
                </div>
                <div className="abilities-container">
                    <p className="abilities">Id</p>
                    
                        <p className="ability-name">Id: <span className="ab-name">{data.id}</span> </p>
                </div>
                <div className="abilities-container">
                    <p className="abilities">Location</p>
                    
                        <p className="ability-name">Location Areas: <span className="ab-name">{data.location_area_encounters
}</span> </p>
                </div>
                <div className="abilities-container">
        <p className="abilities">Species</p>
        
            <ul className="unordered-abilities-list-container">
                <li className="abilities-list-item">
                
                    <p className="ability-name">Species Name: <span className="ab-name">{data.species.name}</span></p>
                    <p className="ability-name">Species Url: <span className="ab-name">{data.species.url}</span> </p>
                </li>
                </ul>

                </div>
                <div className="abilities-container">
        <p className="abilities">Stat</p>
        {data.stats.map(item =>(
            <ul className="unordered-abilities-list-container">
                <li className="abilities-list-item">
                <p className="ability-name">Base Stat: <span className="ab-name">{item.base_stat}</span></p>
                    <p className="ability-name">Effort: <span className="ab-name">{item.effort}</span></p>
                    <p className="ability-name">Stat Name: <span className="ab-name">{item.stat.name}</span></p>
                    <p className="ability-name">Stat Url: <span className="ab-name">{item.stat.url}</span> </p>
                    
                </li>
                </ul>
                ))}
                </div>

                <div className="abilities-container">
        <p className="abilities">Types</p>
        {data.types.map(item =>(
            <ul className="unordered-abilities-list-container">
                <li className="abilities-list-item">
                <p className="ability-name">Base Stat: <span className="ab-name">{item.slot}</span></p>
                    <p className="ability-name">Stat Name: <span className="ab-name">{item.type.name}</span></p>
                    <p className="ability-name">Stat Url: <span className="ab-name">{item.type.url}</span> </p>
                    
                </li>
                </ul>
                ))}
                </div>

                <div className="abilities-container">
                    <p className="abilities">Weight</p>
                    
                        <p className="ability-name">Id: <span className="ab-name">{data.weight}</span> </p>
                </div>
    

</div>
        
    )
}

export default PokemonDetails
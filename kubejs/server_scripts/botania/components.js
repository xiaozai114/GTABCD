ServerEvents.recipes((event) => {
  // mystic_dust
    event.shapeless("#forge:dusts/mystic", ["#botania:petals","#forge:dusts/stone","#forge:dusts/sugar"]);
    event.remove({output:"botania:mana_powder"})

    const addManaInfusion = (event, result, input, mana, catalyst) => {
    let recipe = {
        'type': 'botania:mana_infusion',
        'input': input,
        'output': result,
        'mana': mana
    }

    //set catalyst if one is provided
    catalyst = catalyst || false
    //check if JSON definition
    if(catalyst.type){
        recipe.catalyst = catalyst
    //otherwise use the given string to make one
    } else if(catalyst){
        recipe.catalyst = {
            type: 'block',
            block: catalyst
        }
    }

    return event.custom(recipe)
    }
    addManaInfusion(event, "botania:mana_powder","gtceu:mystic_dust",500)
})

ServerEvents.recipes(event => {
    // 删除所有 "类型" 为沉浸工程焦炉的配方
    event.remove({ id: 'immersiveengineering:cokeoven/charcoal' });
    event.remove({ id: 'immersiveengineering:cokeoven/coke_block' });
    event.remove({ id: 'immersiveengineering:cokeoven/coke' });
    event.remove({output:'immersiveengineering:cokebrick'});

});


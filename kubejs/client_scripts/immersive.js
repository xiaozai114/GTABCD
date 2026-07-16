ItemEvents.tooltip(event=>{
    event.addAdvanced('immersiveengineering:cokebrick', (item, advanced, text) => {
            text.add(Text.of('§c§o沉浸工程的焦炉被禁用,使用格雷科技的版本!'));
    });
})
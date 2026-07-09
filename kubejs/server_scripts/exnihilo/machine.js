

ServerEvents.recipes(event => {
    // 1. 收集所有普通筛子的物品 ID
    const sieves = [
        'exdeorum:oak_sieve',
        'exdeorum:spruce_sieve',
        'exdeorum:birch_sieve',
        'exdeorum:jungle_sieve',
        'exdeorum:acacia_sieve',
        'exdeorum:dark_oak_sieve',
        'exdeorum:mangrove_sieve',
        'exdeorum:cherry_sieve',
        'exdeorum:warped_sieve',
        'exdeorum:crimson_sieve',
        'exdeorum:bamboo_sieve'
    ];

    // 2. 收集所有压缩筛子的物品 ID
    const compressedSievers = [
        'exdeorum:oak_compressed_sieve',
        'exdeorum:spruce_compressed_sieve',
        'exdeorum:birch_compressed_sieve',
        'exdeorum:jungle_compressed_sieve',
        'exdeorum:acacia_compressed_sieve',
        'exdeorum:dark_oak_compressed_sieve',
        'exdeorum:mangrove_compressed_sieve',
        'exdeorum:cherry_compressed_sieve',
        'exdeorum:warped_compressed_sieve',
        'exdeorum:crimson_compressed_sieve',
        'exdeorum:bamboo_compressed_sieve'
    ];
    const arsSieves = [
    'exdeorum:archwood_sieve',
    'exdeorum:blue_archwood_compressed_sieve',
    'exdeorum:red_archwood_compressed_sieve_2',
    'exdeorum:purple_archwood_compressed_sieve_3',
    'exdeorum:green_archwood_compressed_sieve_4'];
    // 3. 合并两个数组，一次性处理所有筛子
    const allSieves = sieves.concat(compressedSievers,arsSieves);

    // 4. 遍历删除每个物品的合成配方
    allSieves.forEach(itemId => {
        event.remove({ output: itemId });
    });
    //5.重新加回自定义配方
    const woodTypes = [
        { id: 'oak', plank: 'minecraft:oak_planks', sieve: 'exdeorum:oak_sieve', fence: 'minecraft:oak_fence', gate: 'minecraft:oak_fence_gate' },
        { id: 'spruce', plank: 'minecraft:spruce_planks', sieve: 'exdeorum:spruce_sieve', fence: 'minecraft:spruce_fence', gate: 'minecraft:spruce_fence_gate' },
        { id: 'birch', plank: 'minecraft:birch_planks', sieve: 'exdeorum:birch_sieve', fence: 'minecraft:birch_fence', gate: 'minecraft:birch_fence_gate' },
        { id: 'jungle', plank: 'minecraft:jungle_planks', sieve: 'exdeorum:jungle_sieve', fence: 'minecraft:jungle_fence', gate: 'minecraft:jungle_fence_gate' },
        { id: 'acacia', plank: 'minecraft:acacia_planks', sieve: 'exdeorum:acacia_sieve', fence: 'minecraft:acacia_fence', gate: 'minecraft:acacia_fence_gate' },
        { id: 'dark_oak', plank: 'minecraft:dark_oak_planks', sieve: 'exdeorum:dark_oak_sieve', fence: 'minecraft:dark_oak_fence', gate: 'minecraft:dark_oak_fence_gate' },
        { id: 'mangrove', plank: 'minecraft:mangrove_planks', sieve: 'exdeorum:mangrove_sieve', fence: 'minecraft:mangrove_fence', gate: 'minecraft:mangrove_fence_gate' },
        { id: 'cherry', plank: 'minecraft:cherry_planks', sieve: 'exdeorum:cherry_sieve', fence: 'minecraft:cherry_fence', gate: 'minecraft:cherry_fence_gate' },
        { id: 'warped', plank: 'minecraft:warped_planks', sieve: 'exdeorum:warped_sieve', fence: 'minecraft:warped_fence', gate: 'minecraft:warped_fence_gate' },
        { id: 'crimson', plank: 'minecraft:crimson_planks', sieve: 'exdeorum:crimson_sieve', fence: 'minecraft:crimson_fence', gate: 'minecraft:crimson_fence_gate' },
        { id: 'bamboo', plank: 'minecraft:bamboo_planks', sieve: 'exdeorum:bamboo_sieve', fence: 'minecraft:bamboo_fence', gate: 'minecraft:bamboo_fence_gate' },
        { id: 'ars_nouveau', plank: 'ars_nouveau:archwood_planks', sieve: 'exdeorum:archwood_sieve', fence: 'ars_nouveau:archwood_fence', gate: 'ars_nouveau:archwood_fence_gate' }
    ];

    woodTypes.forEach(({ sieve, fence, gate }) => {
        event.shaped(sieve, [
            'GGG',   // 第一行：3个栅栏门
            'FFF',   // 第二行：3个栅栏
            'FFF'    // 第三行：3个栅栏
        ], {
            G: gate,   // 对应门的物品
            F: fence   // 对应栅栏的物品
        });
    });
});
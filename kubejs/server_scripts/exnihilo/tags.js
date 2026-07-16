// 文件: kubejs/server_scripts/sieve_tags.js

ServerEvents.tags('item', event => {
    // ---------- 普通筛子列表 ----------
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
        'exdeorum:bamboo_sieve',
        'exdeorum:archwood_sieve'   // 至高木普通筛子
    ];

    // ---------- 压缩筛子列表 ----------
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
        'exdeorum:bamboo_compressed_sieve',
        // 至高木四种颜色的压缩筛子
        'exdeorum:blue_archwood_compressed_sieve',
        'exdeorum:red_archwood_compressed_sieve',
        'exdeorum:purple_archwood_compressed_sieve',
        'exdeorum:green_archwood_compressed_sieve'
    ];

    // ---------- 添加到标签 ----------
    event.add('exdeorum:sieves', sieves);                // 普通筛子标签
    event.add('exdeorum:compressed_sieves', compressedSievers); // 压缩筛子标签
});
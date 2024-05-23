document.getElementById('randomButton').addEventListener('click', () => {
    const topsDir = './clothes/tops/';
    const pantsDir = './clothes/pants/';
    
    tops = [];
    
    pants = [];
    // window.webkitRequestFileSystem(
    //     TEMPORARY,  // 一時的（テンポラリ）
    //     0,    // 確保するサイズ
    //     function(fs){ // 成功時のコールバック関数
    //         fs.root.getDirectory(dirname, {},
    //             function(dirEntry){
    //                 var dirReader = dirEntry.createReader();
    //                 dirReader.readEntries(
    //                     function(list){
    //                         // ファイル／ディレクトリの数だけ繰り返し
    //                         for(var i=0; i<list.length; i++){
    //                             if (list[i].isFile){  // ファイルの場合
    //                                 list[i].name
    //                             }
    //                         }
    //                     },
    //                     function(err){}
    //                 );
    //             },
    //             function(err){}
    //         );
    //     },
    //     function(err){}
    // )

    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    
    const randomTop = getRandomItem(tops);
    const randomPants = getRandomItem(pants);
    
    document.getElementById('topImage').src = topsDir + randomTop;
    document.getElementById('pantsImage').src = pantsDir + randomPants;
});

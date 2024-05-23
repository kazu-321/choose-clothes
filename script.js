document.getElementById('randomButton').addEventListener('click', () => {
    const topsDir = './clothes/tops/';
    const pantsDir = './clothes/pants/';
    
    const dh = window.showDirectoryPicker();
 
    // 開いたディレクトリ内のファイルとディレクトリをコンソールに出力
    for(const handle of root.values()) {
        if (handle.kind === 'file') {
           console.log(handle.name);
        } else if (handle.kind === 'directory') {
            console.log(handle.name + '/');
        }
    }
    tops = [
        "tops1.jpeg",
        "tops2.jpeg",
        "tops3.jpeg",
    ];
    
    pants = [
        "pants1.jpeg",
        "pants2.jpeg",
        "pants3.jpeg",
    ];


    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    
    const randomTop = getRandomItem(tops);
    const randomPants = getRandomItem(pants);
    
    document.getElementById('topImage').src = topsDir + randomTop;
    document.getElementById('pantsImage').src = pantsDir + randomPants;
});

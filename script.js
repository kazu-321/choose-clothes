document.getElementById('randomButton').addEventListener('click', () => {
    const topsDir = './clothes/tops/';
    const pantsDir = './clothes/pants/';
    
    const tops = [
        'top1.jpg',
        'top2.jpg',
        // 他のトップス画像をここに追加
    ];
    
    const pants = [
        'pant1.jpg',
        'pant2.jpg',
        // 他のパンツ画像をここに追加
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

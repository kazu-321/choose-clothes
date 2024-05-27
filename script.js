const owner = 'kazu-321';
const repo = 'choose-clothes';
const topsPath = './clothes/tops';
const pantsPath = './clothes/pants';
let pants = [];
let tops = [];

async function fetchFilesFromGitHub(path) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
    const files = await response.json();
    return files.filter(file => file.type === 'file').map(file => file.download_url);
}

function getRandomClothes() {    
    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    const randomTop = getRandomItem(tops);
    const randomPants = getRandomItem(pants);
    document.getElementById('topImage').src = randomTop;
    document.getElementById('pantsImage').src = randomPants;
}

async function init() {
    tops = await fetchFilesFromGitHub(topsPath);
    pants = await fetchFilesFromGitHub(pantsPath);
}

document.getElementById('randomButton').addEventListener('click', getRandomClothes);
document.addEventListener('DOMContentLoaded', init);
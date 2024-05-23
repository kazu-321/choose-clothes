const owner = 'kazu-321';
const repo = 'choose-clothes';
const topsPath = './clothes/tops';
const pantsPath = './clothes/pants';

async function fetchFilesFromGitHub(path) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
    const files = await response.json();
    return files.filter(file => file.type === 'file').map(file => file.download_url);
}

async function getRandomClothes() {
    const tops = await fetchFilesFromGitHub(topsPath);
    const pants = await fetchFilesFromGitHub(pantsPath);

    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    const randomTop = getRandomItem(tops);
    const randomPants = getRandomItem(pants);

    document.getElementById('topImage').src = randomTop;
    document.getElementById('pantsImage').src = randomPants;
}

document.getElementById('randomButton').addEventListener('click', getRandomClothes);

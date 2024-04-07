
const charsSection = document.getElementById('chars-container');
// Assign API URL to variable:
const charsURL = 'https://hp-api.herokuapp.com/api/characters';

async function getChars() {
    // Fetch API data:
    const response = await fetch(charsURL);

    // Convert API data to JSON:
    const allCharsArr = await response.json();
    
    // Push into iterable array, newCharsArr, all characters that are human & contain an image URL:
    let newCharsArr = [];
    for (let i = 0; i < allCharsArr.length; i++) {
        if (allCharsArr[i].species === 'human' && allCharsArr[i].image.length > 0) {
            newCharsArr.push(allCharsArr[i]);
        }
    }
    return newCharsArr;
}

async function buildPage() {
    const newCharsArr = await getChars();
    // Populate character cards' HTML:
    for (let i = 0; i < newCharsArr.length; i++) {
        // Populate homepage (make cards visible by default)
        charsSection.innerHTML += 
            "<div id='chars-container' data-name='" + newCharsArr[i].name.toLowerCase().replace(/\s/g, '-') + "' data-house='"
            + newCharsArr[i].house.toLowerCase().replace(/\s/g, '-') + "'>" 
                + "<div class='char-img-container'>"
                + "<img src='" + newCharsArr[i].image + "'>"
                + "</div>"
                + "<header class='char-header'>" + newCharsArr[i].name + "</header>"
                + "<p><span>Ancestry: </span>" + newCharsArr[i].ancestry + "</p>"
                + "<p id='house-homepage'><span>House: </span>" + newCharsArr[i].house + "</p>"
                + "<p><span>Actor/Actress: </span>" + newCharsArr[i].actor + "</p>"
            + "</div>"
    }
}
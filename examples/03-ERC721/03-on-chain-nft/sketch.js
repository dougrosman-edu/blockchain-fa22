// wallet string has 42 chars (including the 0x at the front).
// wallet address contains 40 chars (40 bytes)
// const WALLET_ADDRESS = "0xe1aBCE44F4C3dd27B4f700e898b0e28D0e10fa1f"
const WALLET_ADDRESS = "0x80b6De9D077977798f357260F30b985dC7F1Bbb2"
const WALLET_LENGTH = WALLET_ADDRESS.length;


// aesthetic variables taken from wallet address;
let __bgColor;
let __squareFill;
let __squareStroke;
let __squareQuantity;
let __squareSize;

function setup() {
    createCanvas(350, 350);
    

    strokeWeight(3);

    __bgColor = "#" + WALLET_ADDRESS.substring(WALLET_LENGTH - 6, WALLET_LENGTH);

    __squareFill = "#" + WALLET_ADDRESS.substring(WALLET_LENGTH - 6, WALLET_LENGTH - 12);

    __squareStroke = "#" + WALLET_ADDRESS.substring(WALLET_LENGTH - 12, WALLET_LENGTH - 18);

    __squareQuantity = unhex(WALLET_ADDRESS.substring(WALLET_LENGTH - 18, WALLET_LENGTH - 20));
    __squareQuantity = map(__squareQuantity, 0, 256, 1, 256);

    __squareSize = unhex(WALLET_ADDRESS.substring(WALLET_LENGTH - 20, WALLET_LENGTH - 22));
    __squareSize = map(__squareSize, 0, 256, 20, 60);

    background(__bgColor);

    for(let i = 0; i < __squareQuantity; i++) {

        fill(__squareFill);
        stroke(__squareStroke);
        rect(random(width), random(height), __squareSize, __squareSize);
    }


    
    let dataURL = defaultCanvas0.toDataURL();
    const base64 = getBase64StringFromDataURL(dataURL);
    console.log(base64);
}

const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace('data:', '').replace(/^.+,/, '');
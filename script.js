const iataCodes = {
 "832": "GB",
    "390": "A3",
    "053": "EI",
    "845": "P5",
    "555": "SU",
    "044": "AR",
    "942": "VW",
    "139": "AM",
    "394": "AW",
    "124": "AH",
    "514": "G9",
    "465": "KC",
    "760": "UU",
    "657": "BT",
    "636": "BP",
    "226": "2J",
    "381": "SM",
    "190": "TY",
    "014": "AC",
    "427": "TX",
    "999": "CA",
    "146": "XK",
    "101": "EN",
    "996": "UX",
    "057": "AF",
    "730": "GT",
    "098": "AI",
    "120": "JS",
    "675": "NX",
    "258": "MD",
    "643": "KM",
    "239": "MK",
    "572": "9U",
    "186": "SW",
    "086": "NZ",
    "656": "PX",
    "694": "YW",
    "710": "P4",
    "115": "JU",
    "061": "HM",
    "135": "VT",
    "244": "TN",
    "197": "TC",
    "649": "TS",
    "218": "NF",
    "580": "RU",
    "063": "SB",
    "749": "4Z",
    "027": "AS",
    "374": "AP",
    "055": "AZ",
    "574": "4W",
    "110": "UJ",
    "001": "AA",
    "205": "NH",
    "275": "GP",
    "725": "W3",
    "238": "IZ",
    "988": "OZ",
    "032": "KP",
    "558": "5O",
    "767": "RC",
    "369": "5Y",
    "143": "AU",
    "257": "OS",
    "134": "AV",
    "133": "LR",
    "547": "2K",
    "771": "J2",
    "331": "S4",
    "577": "AD",
    "111": "UP",
    "926": "QH",
    "829": "PG",
    "938": "ID",
    "628": "B2",
    "997": "BG",
    "474": "NT",
    "475": "0B",
    "004": "BV",
    "930": "OB",
    "276": "TF",
    "125": "BA",
    "082": "SN",
    "623": "FB",
    "700": "5C",
    "040": "QC",
    "188": "K6",
    "898": "JD",
    "489": "W8",
    "172": "CV",
    "106": "BW",
    "021": "V3",
    "160": "CX",
    "203": "5J",
    "297": "CI",
    "112": "CK",
    "781": "MU",
    "987": "G5",
    "804": "CF",
    "784": "CZ",
    "689": "WX",
    "881": "DE",
    "582": "8Z",
    "230": "CM",
    "395": "XC",
    "923": "SS",
    "831": "OU",
    "136": "CU",
    "078": "CY",
    "064": "OK",
    "006": "DL",
    "936": "D0",
    "155": "ES",
    "467": "T3",
    "077": "MS",
    "114": "LY",
    "176": "EK",
    "071": "ET",
    "607": "EY",
    "551": "YU",
    "615": "QY",
    "104": "EW",
    "695": "BR",
    "783": "E9",
    "023": "FX",
    "260": "FJ",
    "105": "AY",
    "141": "FZ",
    "171": "FT",
    "593": "XY",
    "None": "FH",
    "396": "BF",
    "666": "FU",
    "126": "GA",
    "606": "A9",
    "944": "WH",
    "127": "G3",
    "072": "GF",
    "872": "GX",
    "169": "HR",
    "880": "HU",
    "173": "HA",
    "836": "NS",
    "HFY": "5K",
    "828": "RH",
    "851": "HX",
    "128": "UO",
    "075": "IB",
    "108": "FI",
    "312": "6E",
    "837": "4O",
    "096": "IR",
    "491": "B9",
    "815": "EP",
    "818": "6H",
    "131": "JL",
    "353": "NU",
    "486": "J9",
    "806": "7C",
    "279": "B6",
    "718": "LJ",
    "151": "R5",
    "018": "HO",
    "384": "RQ*",
    "706": "KQ",
    "074": "KL",
    "180": "KE",
    "833": "KY",
    "229": "KU",
    "068": "TM",
    "627": "QV",
    "957": "JJ",
    "035": "4C",
    "462": "XL",
    "045": "LA",
    "692": "PZ",
    "544": "LP",
    "549": "M3",
    "145": "UC",
    "140": "LI",
    "891": "GJ",
    "080": "LO",
    "859": "8L",
    "220": "LH",
    "020": "LH",
    "683": "CL",
    "149": "LG",
    "537": "W5",
    "232": "MH",
    "816": "OD",
    "803": "AE",
    "129": "MP",
    "865": "M7",
    "495": "L6",
    "076": "ME",
    "289": "OM",
    "716": "MB",
    "409": "YM",
    "599": "8M",
    "933": "KZ",
    "703": "NO",
    "477": "NE",
    "325": "NP",
    "316": "5N",
    "476": "Y7",
    "216": "N4",
    "796": "BJ",
    "866": "BK",
    "050": "OA",
    "910": "WY",
    "066": "8Q",
    "OLA": "OF",
    "445": "ZP",
    "770": "EO",
    "624": "PC",
    "685": "NI",
    "079": "PR",
    "214": "PK",
    "403": "PO",
    "408": "M4",
    "031": "PW",
    "433": "P6",
    "081": "QF",
    "157": "QR",
    "QAZ": "IQ",
    "195": "FV",
    "147": "AT",
    "672": "BI",
    "512": "RJ",
    "299": "DR",
    "362": "7R",
    "459": "WB",
    "421": "S7",
    "640": "FA",
    "117": "SK",
    "737": "SP",
    "065": "SV",
    "571": "6S",
    "655": "DV",
    "921": "O3",
    "324": "SC",
    "774": "FM",
    "479": "ZH",
    "876": "3U",
    "501": "7L",
    "629": "MI",
    "618": "SQ",
    "605": "H2",
    "193": "IE",
    "413": "SZ",
    "083": "SA",
    "775": "SG",
    "603": "UL",
    "564": "XQ",
    "871": "Y8",
    "192": "PY",
    "724": "LX",
    "070": "RB",
    "722": "TW",
    "118": "DT",
    "202": "TA",
    "696": "VR",
    "047": "TP",
    "281": "RO",
    "515": "SF",
    "217": "TG",
    "310": "SL",
    "909": "WE",
    "826": "GS",
    "617": "X3",
    "199": "TU",
    "235": "TK",
    "566": "PS",
    "525": "B7",
    "016": "UA",
    "406": "5X",
    "262": "U6",
    "886": "UQ",
    "298": "UT",
    "250": "HY",
    "978": "VJ",
    "738": "VN",
    "932": "VS",
    "795": "VA",
    "228": "UK",
    "036": "Y4",
    "712": "V7",
    "030": "VY",
    "460": "EB",
    "847": "PN",
    "838": "WS",
    "097": "WI",
    "701": "WF",
    "731": "MF",
    "860": "YG",
    "000": "XH",
    "668": "TR",
    "041": "JQ"

};

let counters = {
    Rush: 0,
    Failed: 0,
    Interline: 0,
    Other: 0
};

let processedTags = {
    Rush: [],
    Failed: [],
    Interline: [],
    Other: []
};

function processTag(category) {
    const inputTag = document.getElementById(`inputTag${category}`).value;
    if (inputTag.length !== 10 || isNaN(inputTag)) {
        alert("Please enter a valid 10-digit bag tag number.");
        return;
    }

    const processedTag = transformTag(inputTag);
    if (processedTag) {
        if (processedTags[category].includes(processedTag)) {
            if (!confirm(`The tag "${processedTag}" has already been inputted. Do you want to add it again?`)) {
                return;
            }
        }
        processedTags[category].push(processedTag);
        displayLastTag(processedTag, category);
        displayTags(category);
        updateCounter(category);
        document.getElementById(`inputTag${category}`).value = '';
    } else {
        alert("IATA code not found.");
    }
}

function transformTag(tag) {
    const digits = tag.slice(1);
    const code = digits.slice(0, 3);
    const rest = digits.slice(3);
    
    if (iataCodes[code]) {
        return `${iataCodes[code]}${rest}`;
    } else {
        return null;
    }
}

function displayLastTag(tag, category) {
    const lastTagDiv = document.getElementById(`lastTagInput${category}`);
    lastTagDiv.textContent = `Last tag inputted: ${tag}`;
}

function displayTags(category) {
    const tagsContainer = document.getElementById(`tagsContainer${category}`);
    tagsContainer.innerHTML = '';
    processedTags[category].forEach((tag, index) => {
        const tagBox = document.createElement('div');
        tagBox.className = 'tag-box';
        tagBox.innerHTML = `<span>${tag}</span><button class="remove-btn" onclick="removeTag(${index}, '${category}')">&times;</button>`;
        tagsContainer.appendChild(tagBox);
    });
}

function removeTag(index, category) {
    processedTags[category].splice(index, 1);
    displayTags(category);
    updateCounter(category);
}

function updateCounter(category) {
    const counterDiv = document.getElementById(`counter${category}`);
    counterDiv.textContent = `Tags processed: ${processedTags[category].length}`;
}

function copyToClipboard(category) {
    const tagsString = processedTags[category].join('/');
    navigator.clipboard.writeText(tagsString).then(() => {
        alert('Tags copied to clipboard!');
    }, () => {
        alert('Failed to copy tags.');
    });
}

function clearTags(category) {
    if (confirm("Are you sure you want to clear all tags?")) {
        processedTags[category] = [];
        displayTags(category);
        updateCounter(category);
        document.getElementById(`lastTagInput${category}`).textContent = '';
    }
}

function handleKeyPress(event, category) {
    if (event.key === 'Enter') {
        processTag(category);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const collapsibleButtons = document.querySelectorAll('.collapsible');
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const content = button.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

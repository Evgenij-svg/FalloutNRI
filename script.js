let DATA;

function getFile (fileName) {

    const request = new XMLHttpRequest();

    request.open('GET', fileName);

    request.onloadend = function() {

        parse(request.responseText);
    }

    request.send();
}

getFile('ability.json'); //путь к файлу

function Span(elem){
    const main = document.querySelector('main')

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const h1 = document.createElement('h1');
    h1.textContent = elem.Name
    const Info = document.createElement('div');
    Info.classList.add('Info');
    const InfoText = document.createElement('div');
    InfoText.classList.add('InfoText');

    const description = document.createElement('p');
    description.textContent = elem.description
    const Requirements = document.createElement('span');
    Requirements.textContent = elem.Requirements
    const imgActionBoy = document.createElement('img');
    imgActionBoy.src = elem.src
    InfoText.append(description);
    InfoText.append(Requirements);

    Info.append(InfoText)
    Info.append(imgActionBoy)

    main.append(h1)
    main.append(Info)

}


function parse(obj) {
    const aside = document.querySelector('aside')
    DATA = JSON.parse(obj);

    DATA.forEach(elem => {
        const span = document.createElement('span')
        span.textContent = elem.Name
        span.onclick = function () {
            Span(elem)
        }
        aside.append(span)

    });
}
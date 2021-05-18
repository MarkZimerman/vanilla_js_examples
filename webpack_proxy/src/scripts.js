import parser from './parser';
import watcher from './watcher'; 

window.onload = function() {

    const email = 'admin@mail.ru'
    const emailParser = new parser(email);

    console.log('Email: "' + email + '"');
    console.log('Name: "' + emailParser.name + '"');
    console.log('Domain: "' + emailParser.domain + '"');
    console.log('Correct: ' + emailParser.isCorrect);

    const div = document.createElement('div');
    document.body.appendChild(div);

    const proxy = watcher(div, function(property, value) {
        console.log(`Property "${property}" changed to: "${value}"`);
    });

    proxy.innerHTML = '<b>Hello proxy!</b> <em>Changed block</em>';
    proxy.style.color = 'red';

    // console.log(proxy.innerHTML);

    proxy.querySelector('em').style.color = 'green';
    proxy.classList.add('some');

}


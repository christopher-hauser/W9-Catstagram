import { createMainContent } from './main.js';
import { fetchImage } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();

    // Add changeCat button
    const button = document.createElement("button");
    button.innerText = "Get new cat image"
    document.body.append(button);

    button.addEventListener('click', e => {
        fetchImage();
    })

    // Popularity Score
    let points = 0;
    const score = document.createElement("h2");
    score.innerText = `Popularity Score: ${points}`;
    document.body.append(score);


    // Upvote/Downvote buttons
    const upvote = document.createElement("button");
    upvote.innerText = "Upvote";
    document.body.append(upvote);
    upvote.addEventListener('click', e => {
        points++;
        score.innerText = `Popularity Score: ${points}`
    })

    const downvote = document.createElement("button");
    downvote.innerText = "Downvote";
    document.body.append(downvote);
    downvote.addEventListener('click', e => {
        points--;
        score.innerText = `Popularity Score: ${points}`
    })


    // Form for comments
    const textarea = document.createElement("textarea");
    const submitComment = document.createElement("button");
    submitComment.innerText = "Submit";
    document.body.append(textarea);
    document.body.append(submitComment);

    submitComment.addEventListener('click', e => {
        e.preventDefault();
        const figCaption = document.createElement("figcaption");
        figCaption.innerText = textarea.value;
        console.log(textarea.value);
        const section = document.getElementsByTagName("section")[0];
        section.appendChild(figCaption);
    })

};

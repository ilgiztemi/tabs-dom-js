const history = document.querySelector('.history');
const vision = document.querySelector('.vision');
const goals = document.querySelector('.goals');
const textTitle = document.querySelector('.text-title');
const text = document.querySelector('.text');

const visionObj = {
    textTitle: 'Vision',
    text: 'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.'
};
const historyObj = {
    textTitle: 'History',
    text: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
}
const goalsObj = {
    textTitle: 'Goals',
    text: 'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.'
};
vision.addEventListener('click', () => {
    vision.style.backgroundColor = 'rgb(237, 237, 244)';
    goals.style.backgroundColor = 'inherit';
    history.style.backgroundColor = 'inherit';
    textTitle.innerHTML = visionObj.textTitle;
    text.innerHTML = visionObj.text;
});
goals.addEventListener('click', () => {
    goals.style.backgroundColor = 'rgb(237, 237, 244)';
    vision.style.backgroundColor = 'inherit';
    history.style.backgroundColor = 'inherit';
    textTitle.innerHTML = goalsObj.textTitle;
    text.innerHTML = goalsObj.text;
});
history.addEventListener('click', () => {
    history.style.backgroundColor = 'rgb(237, 237, 244)';
    vision.style.backgroundColor = 'inherit';
    goals.style.backgroundColor = 'inherit';
    textTitle.innerHTML = historyObj.textTitle;
    text.innerHTML = historyObj.text;
});

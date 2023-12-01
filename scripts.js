document.querySelector('.letter').addEventListener('click', () => {
    const paper = document.querySelector('.paper');
    const spotifyWidget = document.querySelector('.spotify-widget iframe');

    // Toggle a visibilidade da carta
    paper.style.opacity = (paper.style.opacity === '0' || paper.style.opacity === '') ? '1' : '0';
    paper.style.visibility = (paper.style.visibility === 'hidden' || paper.style.visibility === '') ? 'visible' : 'hidden';

    // Toggle a visibilidade do widget do Spotify
    spotifyWidget.style.display = (spotifyWidget.style.display === 'none' || spotifyWidget.style.display === '') ? 'block' : 'none';
});

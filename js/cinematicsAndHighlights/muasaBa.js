$("#muasaBa").click(function() {

    clearProgrammingModal();

    printTitle('Muasa Ba MV');
    printIconDivider();
    printEmbedYouTube('ie8TvqOcyBM');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('A music video collaboration with my best friend\'s section 11 - Algorithmians of Plaridel NHS, named Muasa Ba. Muasa Ba is a Bisaya Term for "Hope So", tells a story of a lady who hopes to be part of the life of the person she admires with.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("Creation of this project was taken place a week before the general community quarantine was announced in the locality.")
    )

    printEmptySpace();
});
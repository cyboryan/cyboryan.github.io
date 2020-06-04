$("#forTheNextGeneration").click(function() {

    clearProgrammingModal();

    printTitle('For The Next Generation');
    printIconDivider();
    printEmbedYouTube('eN-ylP0bZCU');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('A short film to remind people to throw their garbages properly.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("Creation of this project was taken place during the Regional Festival of Talents in Maasin City last December 2017.")
    )

    printEmptySpace();
});
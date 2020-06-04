$("#tigbawanonFestival").click(function() {

    clearProgrammingModal();

    printTitle('Tigbawanon Festival 2019');
    printIconDivider();
    printEmbedYouTube('PfMfpAs5d7U');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('A short montage highlighting the events during the Tigbawanon Festival at Plaridel, Baybay City, Leyte')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("This is in collaboration with Czejan Rae that was released last January 23, 2019.")
    )

    printEmptySpace();
});
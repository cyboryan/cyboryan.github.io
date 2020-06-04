$("#linggoNgKabataan").click(function() {

    clearProgrammingModal();

    printTitle('Linggo Ng Kabataan 2018');
    printIconDivider();
    printEmbedYouTube('ST_6-7HwkWI');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('A highlight video highlighting the important events held during the week long celebration of the Linggo ng Kabataan at Plaridel, Baybay City, Leyte. ')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("This project is in collaboration with the Plaridel Sangguniang Kabataan (SK) that was led by the SK Chairperson, John Jade Montuya. Released on August 25, 2018.")
    )

    printEmptySpace();
});
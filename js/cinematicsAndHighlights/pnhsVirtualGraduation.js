$("#pnhsVirtualGraduation").click(function() {

    clearProgrammingModal();

    printTitle('Breaking Free | Plaridel NHS Class of 2020 Tribute');
    printIconDivider();
    printEmbedYouTube('euRPPrStbBM');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('Plaridel NHS tapped me alongside the Supreme Student Government to work on the Virtual Graduation. As a result, I compiled some scenes alongside some photos from the graduates for the special presentation.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("This project is released June 1, 2020 alongside the Virtual Graduation Premiere on Facebook and YouTube.")
    )

    printEmptySpace();
});
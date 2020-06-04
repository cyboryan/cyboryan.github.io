$("#plaridelNHSAlumni").click(function() {

    clearProgrammingModal();

    printTitle('The 7th Grand Alumni Homecoming Celebration');
    printIconDivider();
    printEmbedYouTube('BM3n-o9NAZs');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('The 7th Grand Alumni Homecoming Celebration was held back in January 21, 2018 where alumni of Plaridel National High School from the earliest batch to the recently moved up Grade 11 Students gathered not just for a reunion of the former classmates/batchmates but also to help build up and support school projects through their activities.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("This project was made in collaboration with the Plaridel National High School Alumni Association. This video is released on January 31, 2018.")
    )

    printEmptySpace();
});
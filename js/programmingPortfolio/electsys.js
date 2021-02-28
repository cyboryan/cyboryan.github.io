$("#electsys").click(function() {

    clearProgrammingModal();

    printTitle('ElectSys');
    printIconDivider();
    printPhoto('img/portfolio/electsys.png');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('ElectSys, a short term for Election System, is a web application that makes managing Supreme Student Government Elections effortless as possible. It includes features such as managing list of voters, candidates and parties; processing electoral votes real-time as students cast their electronic ballots; and to generate and print election results upon closing the Election in few clicks.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append('This application is <b>recently implemented</b> during the SSG General Elections in Plaridel National High School last February 11, 2020. Development is temporarily discontinued due to the COVID-19 Pandemic, making the system ineffective with the implementation of distance modular learning.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append('. This application is not available for download, but a demo version will be posted soon.')
    );

    printProgrammingLanguagePhotos('php');
});
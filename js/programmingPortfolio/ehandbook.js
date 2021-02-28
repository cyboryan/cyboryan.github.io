$("#ehandbook").click(function() {

    clearProgrammingModal();

    printTitle('E-Handbook');
    printIconDivider();
    printPhoto('img/portfolio/ehandbook.png');

    /**
     * Add Portfolio Article Content
     */
    $("#portfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append("E-Handbook is a short term for Student's Electronic Handbook serves as an information hub of the students, parents, teachers and stakeholders concerned about Plaridel National High School, its policies, clubs and activities while minimizing printing costs for the school and redistributable throughout Android Devices without hassle.")
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append('The app is released back on June 23, 2017 through the ')
        .append($('<a>')
            .attr('href', 'https://creator.ionic.io/app/login')
            .attr('target', '_blank')
            .text('Ionic Creator')
        )
        .append(' Graphical User Interface at Plaridel National High School together with the help of the Faculty and Staff and the Supreme Student Government of the school.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("The project is currently discontinued in lieu of bigger projects which some parts of this information app will be integrated in. The latest release was back in June 2018 and is now outdated. This may be updated soon.")
    );

    printProgrammingLanguagePhotos('android');
    printProgrammingModalButtons('github');
    
    addModalButtonLink('github', 'E-Handbook');
});
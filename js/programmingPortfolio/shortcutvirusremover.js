$("#shortcutvirusremover").click(function() {

    clearProgrammingModal();

    printTitle('Shortcut Virus Remover');
    printIconDivider();
    printPhoto('img/portfolio/sfr.jpg');

    /**
     * Add Portfolio Article Content
     */
    $("#programmingPortfolioContent").append($('<p>')
        .attr('class', 'mb-3')
        .append('A simple Microsoft Windows Batch Project that simplifies the removal of shortcut virus on modern flash drives and recovers files hidden by the virus. You simply add your drive letter where your flash drive is located then a simple script will remove it for you.')
    )

    .append($('<p>')
        .attr('class', 'mb-3')
        .append("This application was released back on April 17, 2016. It was made due to the increasing number of flash drives affected by the virus at his alma mater. This was discontinued later when his alma mater installed the SMADAV software that automates the process.")
    )

    printProgrammingLanguagePhotos('batch');
    printProgrammingModalButtons('watch','github');
    
    addModalButtonLink('watch', 'https://www.youtube.com/watch?v=RBv3pjjbce8');
    addModalButtonLink('github', 'shortcutvirusremover');
});
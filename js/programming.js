function clearProgrammingModal()
{
    $("#portfolioContent").text('');
}

/**
 * Print Portfolio Title
 */
function printTitle(title)
{
    $("#portfolioContent")
    .append($('<h2>')
        .attr('class','portfolio-modal-title text-secondary text-uppercase mb-0')
        .text(title)
    );
}

/**
 * Print Icon Divider
 */
function printIconDivider()
{
    $("#portfolioContent")
    .append($('<div>')
        .attr('class', 'divider-custom')
        .append($('<div>')
            .attr('class', 'divider-custom-line')
        )
        .append($('<div>')
            .attr('class', 'divider-custom-icon')
            .append($('<i>')
                .attr('class', 'fas fa-star')
            )
        )
        .append($('<div>')
            .attr('class', 'divider-custom-line')
        )
    );
}

/**
 * Print Portfolio Image
 */
function printPhoto(imgSource)
{
    $("#portfolioContent").append($('<img>')
        .attr('class','img-fluid rounded mb-3')
        .attr('src', imgSource)
    )
}

/**
 * Print Logos of Used Langugages
 */
function printProgrammingLanguagePhotos(...langArray)
{
    var prog = $("#portfolioContent");
    prog.append($("<div>")
        .attr('class', 'mb-3 container')
        .append($('<div>')
            .attr('class', 'row justify-content-center')
            .attr('id', 'programmingLanguages')
        )
    );

    var langHandler = $("#programmingLanguages");

    langArray.forEach(function(lang){
        if(lang == 'php') 
        {
            langHandler.append($('<div>')
                .attr('class', 'col-2')
                .append($('<img>')
                    .attr('class', 'img-fluid rounded')
                    .attr('src', 'img/portfolio/php.png')
                    .attr('style', 'width:32px;height:32px;')
                )
            )
        } 
        else if(lang == 'android') 
        {
            langHandler.append($('<div>')
                .attr('class', 'col-2')
                .append($('<img>')
                    .attr('class', 'img-fluid rounded')
                    .attr('src', 'img/portfolio/android.png')
                    .attr('style', 'width:32px;height:32px;')
                )
            )
        } 
        else if(lang == 'batch') 
        {
            langHandler.append($('<div>')
                .attr('class', 'col-2')
                .append($('<img>')
                    .attr('class', 'img-fluid rounded')
                    .attr('src', 'img/portfolio/bat.jpg')
                    .attr('style', 'width:32px;height:32px;')
                )
            )
        } 
    });
}

/**
 * Print Action Buttons
 */
function printProgrammingModalButtons(...actions)
{
    var prog = $("#portfolioContent");
    prog.append($("<div>")
        .attr('class', 'mb-3 container')
        .append($('<div>')
            .attr('class', 'row justify-content-center')
            .attr('id', 'programmingActions')
        )
    );

    actionHandler = $('#programmingActions');

    actions.forEach(function(action){
        if(action == 'watch')
        {
            actionHandler.append($('<a>')
                .attr('style', 'text-decoration:none')
                .attr('id', 'progWatch')
                .attr('target', '_blank')
                .attr('class', 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4')
                .append($('<button>')
                    .attr('class', 'btn btn-primary mb-3 btn-block')
                    .attr('disabled', '')
                    .attr('href', '#')
                    .append($('<i>')
                        .attr('class', 'fas fa-play fa-fw')
                    )
                    .append('Watch App in Action')
                )
            )
        }
        else if(action == 'download')
        {
            actionHandler.append($('<a>')
                .attr('style', 'text-decoration:none')
                .attr('id', 'progWatch')
                .attr('target', '_blank')
                .attr('class', 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4')
                .append($('<button>')
                    .attr('class', 'btn btn-primary mb-3 btn-block')
                    .attr('disabled', '')
                    .attr('href', '#')
                    .append($('<i>')
                        .attr('class', 'fas fa-download fa-fw')
                    )
                    .append('Download Application')
                )
            )
        }
        else if(action == 'github')
        {
            actionHandler.append($('<a>')
                .attr('style', 'text-decoration:none')
                .attr('id', 'progGithub')
                .attr('target', '_blank')
                .attr('class', 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4')
                .append($('<button>')
                    .attr('class', 'btn btn-primary mb-3 btn-block')
                    .attr('disabled', '')
                    .append($('<i>')
                        .attr('class', 'fas fa-dashboard fa-fw')
                    )
                    .append('Check on GitHub')
                )
            )
        }
    });
}

/**
 * Enables Selected Button to redirect you to specified link
 * Only add repository name for github as 'link'
 */
function addModalButtonLink(action, link)
{
    if(action == 'watch')
    {
        $('#progWatch button').removeAttr('disabled')
        $('#progWatch').attr('href', link)
    }
    else if(action == 'download')
    {
        $('#progDownload button').removeAttr('disabled')
        $('#progDownload').attr('href', link)
    }
    else if(action == 'github')
    {
        $('#progGithub button').removeAttr('disabled')
        $('#progGithub').attr('href', 'https://github.com/cyboryan/' + link)
    }
}

/**
 * 
 */
function printEmbedYouTube(id)
{
    var prog = $("#portfolioContent");
    prog.append($("<iframe>")
        .attr('class', 'mb-3')
        .attr('src', 'https://www.youtube.com/embed/' + id)
        .attr('frameborder', '0')
        .attr('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
        .attr('allowfullscreen', '')
        .attr('style', 'width:100%;height:50%;display:block')
    );
}

function printEmptySpace()
{
    var prog = $("#portfolioContent");
    for(i = 0; i < 10; i++) prog.append($("<br>"));
}
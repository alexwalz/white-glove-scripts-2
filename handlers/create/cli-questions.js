module.exports = {

    createQuestions:[

        {
            type: 'input',
            name: 'domain',
            message: 'What is the school domain?'
           }, 

           {
            type: 'input',
            name: 'courseNumber',
            message: 'What is the course number?'
           }, 

           {
            type: 'confirm',
            name: 'csv_upload_confirm',
            message: 'Did you place your csv file into "/logs/assignmentCreation"?'
           },
    ]
}
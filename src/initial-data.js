const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Question 1', isCorrect: true, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'},
        'task-2': { id: 'task-2', content: 'Question 2', isCorrect: true, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'},
        'task-3': { id: 'task-3', content: 'Question 3', isCorrect: false, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'},
        'task-4': { id: 'task-4', content: 'Question 4', isCorrect: false, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'}
    },
    columns: {
        'question' : {
            id: 'question',
            title: 'Question',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'answer1' : {
            id: 'answer1',
            taskIds: [],
        },
        'answer2' : {
            id: 'answer2',
            taskIds: [],
        },
        'answer3' : {
            id: 'answer3',
            taskIds: [],
        },
        'answer4' : {
            id: 'answer4',
            taskIds: [],
        },
    },
    columnOrder: ['question', 'answer1', 'answer2', 'answer3', 'answer4'],
};

export default initialData;
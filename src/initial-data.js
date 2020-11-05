const initialData = {
    slots: [
        {
            id: 'question1',
            type: 'question',
            title: 'Question 1',
            contains: 'option1'
        },
        {
            id: 'question2',
            type: 'question',
            title: 'Question 2',
            contains: 'option2'
        },
        {
            id: 'question3',
            type: 'question',
            title: 'Question 3',
            contains: 'option3'
        },
        {
            id: 'question4',
            type: 'question',
            title: 'Question 4',
            contains: 'option4'
        },
        {
            id: 'slot1',
            type: 'slot',
            title: 'Placeholder 1',
            contains: null
        },
        {
            id: 'slot2',
            type: 'slot',
            title: 'Placeholder 2',
            contains: null
        },
        {
            id: 'slot3',
            type: 'slot',
            title: 'Placeholder 3',
            contains: null
        },
        {
            id: 'slot4',
            type: 'slot',
            title: 'Placeholder 4',
            contains: null
        },
    ],

    options: [
        { id: 'option1', content: 'Option 1'},
        { id: 'option2', content: 'Option 2'},
        { id: 'option3', content: 'Option 3'},
        { id: 'option4', content: 'Option 4'}
    ],
    answers: [],
    isSubmitEnable: false
};

export default initialData;
const initState = {
    projects: [
        { id: 1, title: 'help me find peach', content: 'bla bla bla' },
        { id: 2, title: 'collect all the stars', content: 'bla bla bla' },
        { id: 3, title: 'egg hunt with yoshi', content: 'bla bla bla' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created Project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project Error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer
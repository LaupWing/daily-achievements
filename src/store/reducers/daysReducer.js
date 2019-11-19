const initState = [
        {
            date: 'one',
            learned: [
                {
                    skill: 'Photoshop',
                    whatHaveILearned: {
                        title: '',
                        description: '',
                        sources:[
                            {
                                titel: '',
                                src: '',
                                description: ''
                            }
                        ]
                    }
                },
                {
                    skill: 'Illustrator',
                    whatHaveILearned: {
                        title: '',
                        description: '',
                        sources:[
                            {
                                titel: '',
                                src: '',
                                description: ''
                            }
                        ]
                    }
                }
            ]
        },
        {
            date: 'two',
            learned: [
                {
                    skill: 'Illustrator',
                    whatHaveILearned: {
                        title: '',
                        description: '',
                        sources:[
                            {
                                titel: '',
                                src: '',
                                description: ''
                            }
                        ]
                    }
                },
                {
                    skill: 'CSS',
                    whatHaveILearned: {
                        title: '',
                        description: '',
                        sources:[
                            {
                                titel: '',
                                src: '',
                                description: ''
                            }
                        ]
                    }
                },
            ]
        },

    ]


const daysReducer = (state=initState, action)=>{
    return state
}

export default daysReducer
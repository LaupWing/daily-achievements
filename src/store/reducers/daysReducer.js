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
                    whatHaveILearned: ''
                },
                {
                    skill: 'CSS',
                    whatHaveILearned: ''
                },
            ]
        }
    ]


const daysReducer = (state=initState, action)=>{
    return state
}

export default daysReducer
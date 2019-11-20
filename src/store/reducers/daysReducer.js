const initState = [
        {
            date: 'Tue Nov 19 2019',
            pros: ['Worked out', 'Meditated'],
            cons:['Didnt plan out the day'],
            better:[],
            learned: [
                {
                    skill: 'Photoshop',
                    duration: '',
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
                    duration: '',
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
            date: 'Tue Nov 18 2019',
            pros: [],
            cons:[],
            better:[],
            learned: [
                {
                    skill: 'Illustrator',
                    whatHaveILearned: {
                        title: '',
                        description: '',
                        duration: '',
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
                        duration: '',
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
        {
            date: 'Wed Nov 20 2019',
            pros: [],
            cons:[],
            better:[],
            learned: [
                {
                    skill: 'Illustrator',
                    whatHaveILearned: [
                        {
                            category: 'Pen Tool',
                            learned: 'Press p for pen'
                        },
                        {
                            category: 'Shape Shifter',
                            learned: 'Combine shapes'
                        }
                    ]
                },
                {
                    skill: 'CSS',
                    whatHaveILearned: [
                        
                    ]
                },
            ]
        },

    ]


const daysReducer = (state=initState, action)=>{
    return state
}

export default daysReducer
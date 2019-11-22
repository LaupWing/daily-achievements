const initState = [
        {
            title: 'Illustrator',
            description: '',
            color: '#FF7D00',
            categories:['Pen tool', 'Shape Builder', 'Shape Shift'],
            sources:[
                {
                    title: 'Low Poly Illustrator Tutorial',
                    url: 'https://www.youtube.com/watch?v=O66013QcjWY',
                    date: 'Wed Nov 20 2019',
                    whatHaveILearned:[
                        {
                            category: 'Pen Tool',
                            learned: 'Press p for pen'
                        }
                    ]
                },
                {
                    title: 'Create a Polygon Geometric Gemstone in Illustrator CC',
                    url: 'https://www.youtube.com/watch?v=_C6dp5lnwVc',
                    date: 'Fri Nov 22 2019',
                    whatHaveILearned:[
                        {
                            category: 'Shape Shifter',
                            learned: 'Combine shapes'
                        }
                    ]
                },
            ]
        },
        {
            title: 'Photoshop',
            description: '',
            color: '#0DC3F8',
            categories:[]
        },
        {
            title: 'Javascript',
            description: '',
            color: '#EED818',
            categories:[]
        },
    ]


const skillsReducer = (state=initState, action)=>{
    return state
}

export default skillsReducer
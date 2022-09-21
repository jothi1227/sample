export class Init{
    load(){
        if(localStorage.getItem('issues')===null || localStorage.getItem('issues')===undefined){
            console.log('No Issues Found');
            let issue=[
                {
                    id:1,
                    title:'Network',
                    description:'Slow internet connection'

                },
                {
                    id:2,
                    title:'System',
                    description:'Mail not working'

                },
                {
                    id:3,
                    title:'Monitoring Sheet',
                    description:'Not updated properly'

                },
               
            ];

            localStorage.setItem('issues',JSON.stringify(issue));
            return

        }
        else
        {
            console.log("Found Issues");
        }
    }
}
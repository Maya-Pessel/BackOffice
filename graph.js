
// graph

var ctx = document.getElementById('payschart');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['France', 'Belgique', 'Espagne', 'Pays-Bas', 'Italie'],
        datasets: [
            {
                label: 'Nombre de commandes par pays',
                backgroundColor: 'rgb(255,177,159,0.7)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                data: [168,89,97,127,74]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

var ctx = document.getElementById('statschart');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Bonsai', 'Acacia', 'Boulot', 'P.d.Tomates', 'Basilic', 'Figuier', 'Oeillet', 'Chrysenthème', 'Tournesol'],
        datasets: [
            {
                label: 'Nombre de ventes par produits',
                backgroundColor:[
                    'rgb(242,89,107,0.7)' ,
                    'rgb(242,134,130)' ,
                    'rgb(255,150,139)' ,   
                    'rgb(255,177,159)' ,   
                    'rgb(255,198,160)' ,   
                    'rgb(255,234,175)' ,   
                    'rgb(254,246,191)' ,  
                    'rgb(227,247,252)',
                    'rgb(194,239,249)',
                    'rgb(130,227,245)'  
                ],

                borderWidth: 1,
                data: [145,143,126,189,170,124,156,104,109]
            }
        ]
    },
    options: {
        
    }
})

var ctx = document.getElementById('graphchart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi','Samedi','Dimanche'],
        datasets: [
            {
                label: 'Nombre de commandes par jours',
                backgroundColor: 'rgb(242,134,130)',
                borderColor: 'rgb(242,134,130)',
                data: [48,89,97,127,74,74,31],
                fill: false
            }
            // ,

            // {
            //     label: 'Nombre de commandes par pays',
            //     backgroundColor: 'rgb(242,134,130)',
            //     borderColor: 'rgb(255,177,159)',
            //     data: [74,31,128,120,100,89,66],
            //     fill: false
            // },

            // {
            //     label: 'Nombre de commandes par pays',
            //     backgroundColor: 'rgb(255,234,175)',
            //     borderColor: 'rgb(255,234,175)',
            //     data: [26,123,70,150,56,61,122],
            //     fill: false
            // }


            

        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
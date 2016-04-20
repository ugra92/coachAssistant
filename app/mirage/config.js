export default function() {
    this.get('/players', function () {
        return {
            data: [{
                type: 'player',
                id: 1,
                attributes: {
                    name: 'Lionel',
                    surname: 'Messi',
                    age: 27,
                    position: 'SS',
                    nationality: "Argentina",
                    image: 'http://media2.fcbarcelona.com/media/asset_publics/resources/000/179/590/size_1000x562/1000x562_MESSI.v1439396618.jpg'
                }
            }, {
                type: 'player',
                id: 2,
                attributes: {
                    name: 'Luis',
                    surname: 'Suarez',
                    age: 29,
                    position: 'CF',
                    nationality: "Uruguay",
                    image: 'http://media1.fcbarcelona.com/media/asset_publics/resources/000/179/233/size_1000x562/1000x562_SUAREZ.v1439295123.jpg'
                }
            }, {
                type: 'player',
                id: 3,
                attributes: {
                    name: 'Andres',
                    surname: 'Iniesta',
                    age: 27,
                    position: 'CMF',
                    nationality: "Spain",
                    image: 'http://media3.fcbarcelona.com/media/asset_publics/resources/000/179/582/size_1000x562/1000x562_INIESTA.v1439396180.jpg'
                }
            }]
        };
    });
}

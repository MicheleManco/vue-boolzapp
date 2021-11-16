
var myapp = new Vue({
    el: "#myapp",
data:{
    contacts: [
        {
            name: ' Michele',
            avatar: 'img/avatar_1.jpg',
            visible: false,
            messages: [
                {
                date: ' 10/01/2020 1 5:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 5:50:00',
                text: ' Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 6:15:22',
                text: ' Tutto fatto!',
                status: 'received'
                }
            ],
        },
        {
            name: ' Fabio',
            avatar: ' img/avatar_2.jpg',
            visible: false,
            messages: [
                {
                date: ' 10/01/2020 1 5:30:55',
                text: ' Hai p ortato a s passo i l c ane?',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 5:50:00',
                text: ' Ricordati d i d argli d a m angiare',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 6:15:22',
                text: ' Tutto f atto!',
                status: 'received'
                }
            ],
        },
        {
            name: ' Luisa',
            avatar: ' img/avatar_3.jpg',
            visible: false,
            messages: [
                {
                date: ' 10/01/2020 1 5:30:55',
                text: ' Hai p ortato a s passo i l c ane?',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 5:50:00',
                text: ' Ricordati d i d argli d a m angiare',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 6:15:22',
                text: ' Tutto f atto!',
                status: 'received'
                }
            ],
        },
        {
            name: ' Antonio',
            avatar: ' img/avatar_4.jpg',
            visible: false,
            messages: [
                {
                date: ' 10/01/2020 1 5:30:55',
                text: ' Hai p ortato a s passo i l c ane?',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 5:50:00',
                text: ' Ricordati d i d argli d a m angiare',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 6:15:22',
                text: ' Tutto f atto!',
                status: 'received'
                }
            ],
        }
    ]
},
methods:{
    showChat:function (index) {
        this.contacts[index].visible = true;
    }
}
})


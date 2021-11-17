
var myapp = new Vue({
    el: "#myapp",
data:{
    counterVisible: 0,
    usermex: "",
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
                text: 'ei come stai',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 5:50:00',
                text: ' bene grazie e tu?',
                status: 'received'
                },
                {
                date: ' 10/01/2020 1 6:15:22',
                text: 'benissimo',
                status: 'sent'
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
                text: 'sei andato a fare la spesa?',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 5:50:00',
                text: 'no tra un pò vado',
                status: 'received'
                },
                {
                date: ' 10/01/2020 1 6:15:22',
                text: 'ok basta che non ti dimentichi',
                status: 'sent'
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
                text: 'posso chiamarti?',
                status: 'received'
                },
                {
                date: ' 10/01/2020 1 5:50:00',
                text: 'no ti chiamo io quando ho finito',
                status: 'sent'
                },
                {
                date: ' 10/01/2020 1 6:15:22',
                text: 'va bene aspetterò',
                status: 'received'
                }
            ],
        }
    ]
},
methods:{
    showChat:function (index) {
        this.counterVisible = index;
    },
    sendmex:function () {
        newmex = {
            date: '10/01/2020 1 6:15:22',
            text: this.usermex,
            status: 'sent'
        }
        if (this.usermex !== ""){
            this.contacts[this.counterVisible].messages.push(newmex);
        }
        this.usermex = ""; 
        setTimeout(() =>{ 
            newmex = {
                date: '10/01/2020 1 6:15:22',
                text: "ok",
                status: 'received'
            }
                this.contacts[this.counterVisible].messages.push(newmex);
        }, 1000)
    }
    // addTask: function() {
    //     newTask = {
    //         text: this.textTasks,
    //         done: false
    //     }
    //     if (this.textTasks !== "") {
    //         this.tasks.push(newTask);
    //     }
    //     this.textTasks = "";
    // }
}
})

// ● Aggiunta di un messaggio: l ’utente scrive un t esto nella parte bassa e digitando
// “enter” i l t esto viene aggiunto al t hread sopra, come messaggio verde
// ● Risposta dall’interlocutore: a d ogni i nserimento di un messaggio, l ’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.
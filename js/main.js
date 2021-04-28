/**
 * BOOLZAP
 */

// DAY JS  PLUGIN
dayjs.extend(dayjs_plugin_customParseFormat);


const app = new Vue({
    el: '#app',
    data: {
        // Utente loggato
        user:{
            name: 'Daniele Bruno',
            avatar: '_io',
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    }
                ],
            },
        ],
        indexContact: 0,
        newMessage: '',
        searchString: '',
    },
    methods: {
        
        // Selezione contatto
        selContact (index){
            this.indexContact = index;
        },

        // Invio nuovo messaggio
        sendNewMessage(){
            // Check if it is not empty
            if (this.newMessage != '') {
               
                //ref array messages actived
                const activeMessage = this.contacts[this.indexContact].messages;
                
                // Push new message
                activeMessage.push({
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    message: this.newMessage,
                    status: 'sent',
                });

                // Reset inputbox
                this.newMessage = '';
    
                // Auto Reply
                setTimeout( () => {
                    activeMessage.push({
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        message: "Ueeeee Ueeeee ",
                        status: 'received',
                    })
                }, 1000); // auto reply 1s
            };
        },
        
        // Cerca un contatto
        searchContact() {

            const searchLowerCase = this.searchString.toLowerCase();

            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(searchLowerCase)){
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
    },
});

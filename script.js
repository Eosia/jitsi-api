// config script jitsi

 const domain = 'meet.jit.si';
//const domain = '127.0.0.1:5500';

const options = {
    roomName: 'EosiaDev',
    width: 1200,
    height: 700,
    parentNode: document.querySelector('#meet')
};
const api = new JitsiMeetExternalAPI(domain, options);
import axios from 'axios';

async function sendOTP(otp,rptmail){
    const message = `${otp} is your one-time password for login to Gym Admin Online. It is valid for 5 min. Do not share your OTP with anyone.\n\nGym Admin Online`;
    console.log(rptmail)
    console.log(message);
    console.log(process.env.SENDSMS);

    if (process.env.SENDSMS == "1") {
        const senderId = process.env.TEXTLOCAL_SENDER
        const apiKey = process.env.TEXTLOCAL_KEY
        // Send OTP using Textlocal API
        const response = await axios.post(
            'https://api.textlocal.in/send',
            `apiKey=${apiKey}&numbers=${rptmail}&message=${message}&sender=${senderId}`
        );
        console.log(message)
        console.log(response)
        console.log(response.data.messages);
        if (response.data.errors && response.data.errors.length > 0) {
            console.log(response.data.errors);
            console.log("Error sending OTP");
            return "fail"
        } else {
            console.log("OTP sent successfully")
            return "success"
        }
    }
}
export { sendOTP };
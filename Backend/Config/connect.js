import {connect} from "mongoose";

const connection = async ()=>{
    try {
        await connect(`${process.env.DB_URL}/E-learning`)
        console.log("DB Connected");
        return;
    } catch (error) {
        console.log("Connection Error",error);
    }
}

export default connection
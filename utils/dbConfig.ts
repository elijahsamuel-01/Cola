import { connect } from "mongoose"

const URL: string = "mongodb://127.0.0.1:27017"

export const dbConfig = () => {
    try {
        connect(URL).then(() => {
            console.log("database connected🚀🚀🚀🚀")
        })
    } catch (error) {
        console.log(error)
    }
}
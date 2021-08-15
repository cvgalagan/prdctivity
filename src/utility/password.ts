import Sha256 from "crypto-js/sha256"

const hashPassword = (password: string) => {
    const salt = process.env.PASSWORD_SALT
    const saltedPassword = password + salt
    return Sha256(saltedPassword).toString()
}

export default hashPassword

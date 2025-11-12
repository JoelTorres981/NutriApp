import { sendMailToRecoveryPassword, sendMailToRegister } from "../helpers/sendMail.js"
import Veterinario from "../models/Veterinario.js"

const registro =async(req,res)=>{
    try{
        //Paso 1
        const {email,password}=req.body
        //Paso 2
        if (Object.values(req.body).includes(""))return res.status(400).json({msg:"Los sentimos, debes llenar todos lso campos"})
        const verificarEmailBDD=await Veterinario.findOne({email})
        if(verificarEmailBDD)return res.status(400).json(({msg:"Lo sentimos, el email ya se encuentra registrado"}))
        //Paso 3
        const nuevoVeterinario=new Veterinario(req.body)
        nuevoVeterinario.password = await nuevoVeterinario.encryptPassword(password)
        const token = nuevoVeterinario.createToken()
        await sendMailToRegister(email,token)
        await nuevoVeterinario.save()
        //Paso 4
        res.status(201).json({msg:"Revisa tu correo electronico para confirmar tu cuenta"})
    }
    catch(error){
        res.status(500).json({msg:`❌Error en el servidor -${error}`})
    }
}

const confirmarMail = async (req, res) => {
    // Paso 1 - Obtener datos
    const { token /* la palabra es reservada de la parte de routes (escribir igual) */} = req.params
    // Paso 2 - Validar cuenta
    const veterinarioBDD = await Veterinario.findOne({ token })
    if (!veterinarioBDD) return res.status(404).json({ msg: "Token invalido o cuenta ya confirmada" })
    // Paso 3 - Desarrollar logica
    veterinarioBDD.token = null // Se borra token de la base de datos
    veterinarioBDD.confirmEmail = true // Se confirma la verificacion de email
    await veterinarioBDD.save()
    // Paso 4 - Enviar la respuesta
    res.status(200).json({ msg: "Cuenta confirmada, ya puedes iniciar sesion"})
}

const recuperarPassword = async (req, res) => { 
    try {
        // Paso 1
        const { email } = req.body
        // Paso 2
        if (!email) return res.status(400).json({ msg: "Debes ingresar un correo electrónico" })
        const veterinarioBDD = await Veterinario.findOne({ email })
        if (!veterinarioBDD) return res.status(404).json({ msg: "El usuario no se encuentra registrado" })
        // Paso 3
        const token = veterinarioBDD.createToken()
        veterinarioBDD.token = token
        // correo
        await sendMailToRecoveryPassword(email, token)
        await veterinarioBDD.save()
        // Paso 4
        res.status(200).json({ msg: "Revisa tu correo electrónico para reestablecer tu cuenta" })
    } catch (error) {
    console.error(error)
        res.status(500).json({ msg: `❌ Error en el servidor - ${error}` })
    }
 }

const comprobarTokenPassword = async (req, res) => {
    try {
        // Paso 1
        const {token} = req.params
        // Paso 2
        const veterinarioBDD = await Veterinario.findOne({token})
        if(veterinarioBDD?.token !== token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
        // Paso 3
        // veterinarioBDD?.token = null
        // Paso 4 - Mostrar mensaje de respuesta
        res.status(200).json({msg:"Token confirmado, ya puedes crear tu nuevo password"}) 
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: `❌ Error en el servidor - ${error}` })
    }
}

const crearNuevoPassword = async (req,res)=>{

    try {
        // Paso 1
        const{password,confirmpassword} = req.body
        const { token } = req.params
        // Paso 2 - Validaciones
        if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Debes llenar todos los campos"})
        if(password !== confirmpassword) return res.status(404).json({msg:"Los passwords no coinciden"})
        const veterinarioBDD = await Veterinario.findOne({token})
        if(!veterinarioBDD) return res.status(404).json({msg:"No se puede validar la cuenta"})
        // Paso 3 - Encriptar y borrar token
        veterinarioBDD.token = null
        veterinarioBDD.password = await veterinarioBDD.encryptPassword(password)
        await veterinarioBDD.save()
        // Paso 4 - Mensaje
        res.status(200).json({msg:"Felicitaciones, ya puedes iniciar sesión con tu nuevo password"}) 
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: `❌ Error en el servidor - ${error}` })
    }
}

export {
    registro,
    confirmarMail,
    recuperarPassword,
    comprobarTokenPassword,
    crearNuevoPassword
}
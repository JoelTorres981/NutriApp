import {Router} from 'express'
import { comprobarTokenPassword, confirmarMail, crearNuevoPassword, recuperarPassword, registro } from '../controllers/veterinario_controller.js'
const router = Router()


router.post('/registro',registro)

router.get('/confirmar/:token',confirmarMail)


router.post('/recuperarpassword',recuperarPassword) // Para enviar el correo electronico
router.get('/recuperarpassword/:token',comprobarTokenPassword) // Para poder leer el codigo
router.post('/recuperarpassword/:token',crearNuevoPassword) // Con el codigo crear la nueva contraseña

export default router
import bcrypt from 'bcrypt'
import { usuarioRepository } from '../repositories/usuario.repository.js'
import { generarToken } from '../utils/jwt.js'

export const authService = {
  async login(email, password) {
    // Buscar usuario
    const usuario = await usuarioRepository.findByEmail(email)
    if (!usuario) {
      throw new Error('Credenciales incorrectas')
    }
    
    // Verificar password
    const valido = await bcrypt.compare(password, usuario.password)
    if (!valido) {
      throw new Error('Credenciales incorrectas')
    }
    
    // Generar token con id, email y rol
    const token = generarToken({ 
      id: usuario.id, 
      email: usuario.email,
      rol: usuario.rol
    })
    
    // No enviar la contraseña
    const { password: _, ...usuarioSinPassword } = usuario
    
    return { token, usuario: usuarioSinPassword }
  },
  
  async register(data) {
    // Verificar si ya existe
    const existe = await usuarioRepository.findByEmail(data.email)
    if (existe) {
      throw new Error('El email ya está registrado')
    }
    
    // Hashear password
    const hashedPassword = await bcrypt.hash(data.password, 10)
    
    // Crear usuario solo con los campos permitidos
    const usuario = await usuarioRepository.create({
      email: data.email,
      password: hashedPassword,
      nombre: data.nombre
    })
    
    // Generar token
    const token = generarToken({ 
      id: usuario.id, 
      email: usuario.email,
      rol: usuario.rol
    })
    
    const { password: _, ...usuarioSinPassword } = usuario
    return { token, usuario: usuarioSinPassword }
  }
}

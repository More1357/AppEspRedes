import prisma from '../config/database.js'


export const usuarioRepository = {
  async findByEmail(email) {
    return await prisma.usuario.findUnique({
      where: { email }
    })
  },
  
  async create(data) {
    return await prisma.usuario.create({
      data
    })
  },
  
  async findById(id) {
    return await prisma.usuario.findUnique({
      where: { id },
      include: { proyectos: true }
    })
  },
  
  async update(id, data) {
    return await prisma.usuario.update({
      where: { id },
      data
    })
  },
  
  async delete(id) {
    return await prisma.usuario.delete({
      where: { id }
    })
  }
}

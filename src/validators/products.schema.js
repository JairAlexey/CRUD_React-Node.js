import {z} from 'zod'; //biblioteca para validaciones

export const createProductSchema = z.object({
    name: z.string({
        required_error: "El nombre del producto es requerido"
    }),
    description: z.string({
        required_error: "La descripción del producto es requerida"
    }),
    price: z.number({
        required_error: "El precio del producto es requerido"
    }),
    category: z.string({
        required_error: "La categoría del producto es requerida"
    }),
})
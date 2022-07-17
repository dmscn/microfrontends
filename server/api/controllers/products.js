import { faker } from '@faker-js/faker'
import products from "../data/products.js"

export default function() {
  let listOfProducts = products

  return {
    list: (_req, res) => { 
      return res.status(200).json(({
        result: listOfProducts
      }))
    },
    getSingle: (req, res) => {
      const id = req.params.id
      const product = listOfProducts.find(p => p.id === id)
      return res.status(200).json({
        result: product
      })
    },
    add: (req, res) => {
      const newProduct = {
        ...req.body,
        id: faker.datatype.uuid,
        createdAt: now,
        updatedAt: now,
      }
      listOfProducts = [...listOfProducts, newProduct]

      return res.status(200).json({
        result: newProduct
      })
    },
    update: (req, res) => {
      const updatedProduct = req.body
      newList = listOfProducts.map(p => {
        if(p.id === product.id) {
          return {
            ...p,
            updatedProduct
          }
        }
        return p
      })

      return res.status(200).json({ result: newList })
    },
    remove: (req, res) => {
      const id = req.params.id
      listOfProducts = listOfProducts.filter(p => !(p.id === id))

      return res.status(200).json({ result: {} })
    }
  }
   
}
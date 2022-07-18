import { faker } from '@faker-js/faker'

const { datatype, commerce, image } = faker;

export default Array.from({ length: 200 }).map(() => ({
  id: datatype.uuid(),
  title: commerce.productName(60, 2000),
  price: commerce.price(),
  category: commerce.department(),
  description: commerce.productDescription(),
  image: image.imageUrl(600, 600, 'product,shop,ecommerce', true),
  createdAt: datatype.datetime(),
  updatedAt: datatype.datetime(),
}))
export const ENDPOINTS = {
  register: 'users/register',
  login: 'users/login',
  logout: 'users/logout',
  catalog: 'data/products?distinct=name&sortBy=name',
  createProduct: 'data/products',
	orderProduct: 'data/orders',
  
  details: (productId: string) => `data/products/${productId}`,
  edit: (productId: string) => `data/products/${productId}`,
  delete: (productId: string) => `data/products/${productId}`,
  canOrder: (productId: string, userId: string) => `data/orders?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  ordersForProduct: (productId: string) => `data/orders?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
  getMyProducts: (userId: string) => `data/products?where=_ownerId%3D%22${userId}%22&sortBy=name`,
  search: (query: string) => `data/products?where=name%20LIKE%20%22${query}%22&sortBy=name`,

  //${baseUrl}?where=title%20LIKE%20%22${text}%22%20OR%20category%20LIKE%20%22${text}%22`);
};

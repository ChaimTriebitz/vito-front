const BASE_URL = process.env.REACT_APP_BASE_URL

export const urls = {
   auth: {
      register: `${BASE_URL}/api/auth/register`,
      login: `${BASE_URL}/api/auth/login`
   },
   private: {
      get: `${BASE_URL}/api/private`
   },
   banks: {
      create: `${BASE_URL}/api/banks/create`,
      createMany: `${BASE_URL}api/banks/createMany`,
      get: `${BASE_URL}/api/banks`,
      remove: `${BASE_URL}/api/banks/remove`,
      update: `${BASE_URL}/api/banks/update`
   },
   lenders: {
      create: `${BASE_URL}/api/lenders/create`,
      createMany: `${BASE_URL}api/lenders/createMany`,
      get: `${BASE_URL}/api/lenders`,
      remove: `${BASE_URL}/api/lenders/remove`,
      update: `${BASE_URL}/api/lenders/update`
   },
}


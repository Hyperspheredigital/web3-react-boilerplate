This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Utilities

### Auto Contract Type Generation

Note: After adding in your new contract ABIs (in JSON format) to the `/contracts` folder, `npm run compile-contract-types` to generate the types.

You can import these types when declaring a new Contract hook. The types generated show the function params and return types of your functions, among other helpful types.

```typescript
import MY_CONTRACT_ABI from '../contracts/MY_CONTRACT.json';
import type { MY_CONTRACT } from '../contracts/types';
import useContract from './useContract';

export default function useMyContract() {
  return useContract<MY_CONTRACT>(CONTRACT_ADDRESS, MY_CONTRACT_ABI);
}
```

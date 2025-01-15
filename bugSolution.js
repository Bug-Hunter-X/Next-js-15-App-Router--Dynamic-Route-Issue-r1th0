```javascript
// app/page.js

// Import the `useSearchParams` hook from the react-router-dom library.
import { useSearchParams } from 'next/navigation';

export default function Home() {
  // Use the useSearchParams hook to access the query parameters.
  const [searchParams] = useSearchParams();

  // Get the value of the dynamic route parameter.
  const dynamicRouteParam = searchParams.get('id');

  // Use the dynamic route parameter to render the content.
  return (
    <div>Hello {dynamicRouteParam}</div>
  );
}
```
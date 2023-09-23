/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;

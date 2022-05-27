import AppProvider from './context/provider';
import Library from '../../features/Library'

function App() {
  return (
    <AppProvider>
      <div className="flex justify-center bg-blue-400">
        <div className="w-[960px] max-w-full bg-amber-600 ">
          <Library />
        </div>
      </div>
    </AppProvider>
  )
}

export default App

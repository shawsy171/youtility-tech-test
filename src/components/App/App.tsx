import AppProvider from './context/provider';
import Library from '../../features/Library'
import Books from '../../features/Books'

function App() {
  return (
    <AppProvider>
      <div className="flex justify-center bg-blue-400">
        <div className="flex w-[960px] max-w-full bg-amber-600 ">
          <Library />
          <Books />
        </div>
      </div>
    </AppProvider>
  )
}

export default App

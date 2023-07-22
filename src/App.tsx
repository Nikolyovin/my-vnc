import SideBar from './components/SideBar'
import TheTable from './components/TheTable'
// import { VncDisplay } from 'react-vnc-display'

const App = () => {
    return (
        <div className='bg-slate-900 min-h-[100dvh] flex'>
            <SideBar />
            <TheTable />
            {/* <VncDisplay url='wss://143.62.97.69:5991' /> */}
        </div>
    )
}

export default App

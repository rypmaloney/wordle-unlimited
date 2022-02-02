
import { Switch } from '@headlessui/react'

function ModeToggle(props) {

    const {darkEnabled, setDarkEnabled} = props

  return (
    <Switch.Group>
      <div className="flex items-center mr-2 h-8">
        <Switch.Label className=" mt-1 mr-1 text-white text-sm"> {darkEnabled} mode</Switch.Label>
        <Switch
          checked={darkEnabled}
          onChange={()=>{
            darkEnabled==="dark"? setDarkEnabled("light"):setDarkEnabled("dark")
          }
          }
          className={`${
            darkEnabled ==="light"? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-1`}
        >
          <span
            className={`${
              darkEnabled ==="light" ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}

export default ModeToggle

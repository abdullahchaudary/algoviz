import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
        <nav className="fixed w-full mt-0 px-5 py-2 bg-white border-red-200 dark:bg-red-900 dark:border-red-700">
            <div className="container-fluid flex flex-wrap justify-between items-center mx-auto">
                <div className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AlgoViz</span>
                </div>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto text-white" id="mobile-menu">
                    <ul className="flex flex-col px-3 py-2 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <Link to='/'><li className='flex align-content-center gap-2'>SortingViz</li></Link>
                        <Link to='/searchviz'><li className='flex align-content-center gap-2'>SearchViz</li></Link>
                        <Link to='/'><li className='flex align-content-center gap-2'>PathFinderViz</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}

export default NavBar
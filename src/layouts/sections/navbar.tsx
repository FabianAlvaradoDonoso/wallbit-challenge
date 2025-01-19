import { Link } from 'react-router'
import { ModeToggle } from '@/components/mode-toggle'
import GithubIcon from '@/components/icons/githubIcon'

export const Navbar = () => (
  <nav className="border-gray-200 bg-transparent">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center space-x-4 p-4 md:justify-between">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Wallbit Challenge
        </span>
      </Link>
      <div className="flex flex-row items-center space-x-3" id="navbar-default">
        <a
          href="https://github.com/FabianAlvaradoDonoso/wallbit-challenge"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 dark:text-gray-300"
        >
          <GithubIcon width={30} />
        </a>
        <ModeToggle />
      </div>
    </div>
  </nav>
)

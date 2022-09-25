import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { SunLight, HalfMoon } from 'iconoir-react'

interface PostsListProps {}

const ToggleTheme: NextPage<PostsListProps> = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const themeIcon = () => theme === 'dark' ? <HalfMoon /> : <SunLight />

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button aria-label='DarkModeToggle' type='button' onClick={handleClick}>{themeIcon()}</button>
  )
}

export default ToggleTheme

import {
  NoteAsideChildText,
  NoteAsideContainer,
  NoteAsideMobileIcon,
  NoteAsideText,
} from './NoteAside.style'
import { TreeRoot } from '../lib/types'
import Link from 'next/link'
import React, { useState } from 'react'

const NoteAside = ({ tree }: { tree: TreeRoot }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <NoteAsideContainer visible={isMenuOpen}>
        {tree.map(t => (
          <React.Fragment key={t.title}>
            <Link href={t.urlPath} passHref>
              <NoteAsideText onClick={() => setIsMenuOpen(false)}>{t.title}</NoteAsideText>
            </Link>
            {t.children && t.children.length > 0 && (
              <>
                {t.children.map(c => (
                  <Link key={c.title} href={c.urlPath}>
                    <NoteAsideChildText onClick={() => setIsMenuOpen(false)}>
                      {c.title}
                    </NoteAsideChildText>
                  </Link>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </NoteAsideContainer>
      <NoteAsideMobileIcon onClick={mobileMenuHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#111111"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
        </svg>
      </NoteAsideMobileIcon>
    </>
  )
}

export default NoteAside

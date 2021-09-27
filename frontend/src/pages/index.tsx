import React from 'react'
import {
  TopSection,
  KeyFeaturesSection,
  CodeSection,
  FooterSection,
} from '../sections'
import { PageBar } from './../components'

const HomePage = React.memo<any>(() => {
  const exampleRef = React.useRef<HTMLElement | null>(null)
  const pageBarRef = React.useRef<HTMLElement>()

  const scrollToCodeExample = () => {
    const pageBarHeight = pageBarRef.current?.clientHeight || 0
    const offsetTop =
      exampleRef && exampleRef.current ? exampleRef.current.offsetTop : 0
    window.scrollTo({
      top: offsetTop - (pageBarHeight + 24), // 24 for more spacing
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <PageBar ref={pageBarRef} />
      <TopSection scrollToCodeExample={scrollToCodeExample} />
      <KeyFeaturesSection />
      <CodeSection ref={exampleRef} />
      <FooterSection />
    </div>
  )
})

export default HomePage

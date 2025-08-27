'use client'

import { useEffect, useId, useState } from 'react'
import dynamic from 'next/dynamic'

const Document = dynamic(() => import('react-pdf').then((m) => m.Document), {
  ssr: false
})
const Page = dynamic(() => import('react-pdf').then((m) => m.Page), {
  ssr: false
})

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import './page.css'

const maxWidth = 800

type PDFFile = string | File | null

export default function Sample() {
  const fileId = useId()
  const [file, setFile] = useState<PDFFile>('sample.pdf')
  const [numPages, setNumPages] = useState<number>()

  useEffect(() => {
    ;(async () => {
      const { pdfjs } = await import('react-pdf')
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url
      ).toString()
    })()
  }, [])

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target

    const nextFile = files?.[0]

    if (nextFile) {
      setFile(nextFile)
    }
  }

  function onDocumentLoadSuccess({
    numPages: nextNumPages
  }: {
    numPages: number
  }): void {
    setNumPages(nextNumPages)
  }

  return (
    <div className="Example">
      <header>
        <h1>Sample</h1>
      </header>
      <div className="Example__container">
        {/* <div className="Example__container__load">
          <label htmlFor={fileId}>Load from file:</label>{' '}
          <input id={fileId} onChange={onFileChange} type="file" />
        </div> */}
        <div className="Example__container__document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={maxWidth}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}

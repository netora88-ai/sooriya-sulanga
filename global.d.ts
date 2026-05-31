declare module '*.css'
declare module '*.PNG' {
  const src: import('next/dist/shared/lib/image-external').StaticImageData
  export default src
}

declare module '*.png' {
  const src: import('next/dist/shared/lib/image-external').StaticImageData
  export default src
}

declare module '*.jpeg' {
  const src: import('next/dist/shared/lib/image-external').StaticImageData
  export default src
}

declare module '*.jpg' {
  const src: import('next/dist/shared/lib/image-external').StaticImageData
  export default src
}

declare module '*.webp' {
  const src: import('next/dist/shared/lib/image-external').StaticImageData
  export default src
}

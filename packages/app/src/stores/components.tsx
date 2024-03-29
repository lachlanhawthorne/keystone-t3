import { atom, onSet, } from 'nanostores'

export const LinkComponentProxy = atom<any>({
  component: ({ children, to, styles, hoverStyles, activeStyles, active, ...props }: any) => (
    <a href={to} {...props} style={
      {
        ...styles,
        ':hover': hoverStyles,
        ...(active ? activeStyles : {})
      }
    }>
      {children}
    </a>
  )
})

onSet(LinkComponentProxy, ({ newValue, abort }) => {
  console.log('LinkComponentProxy onSet')
  console.log('newValue', newValue)
})


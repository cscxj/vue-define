import type { FunctionalComponent } from 'vue'

const Define: FunctionalComponent = (props, { slots }) => {
  return slots.default?.(props)
}
export { Define }
export default Define

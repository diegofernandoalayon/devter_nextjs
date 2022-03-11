import Devit from 'components/Devit'
import { useRouter } from 'next/router'
export default function DevitPage (props) {
  console.log(props.id)
  const router = useRouter()
  const { id } = router.query
  console.log(props)
  return (
    <>
      <Devit {...props} />
      wip {id}
    </>
  )
}

export async function getServerSideProps (context) {
  // params, req, res, query => en el context
  const { params, res } = context
  const { id } = params
  const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)

  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props }
  }
  if (res) {
    res.writeHead(301, { location: '/home' }).end()
  }
}

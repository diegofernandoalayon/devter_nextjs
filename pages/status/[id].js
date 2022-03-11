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
DevitPage.getInitialProps = (context) => {
  const { query, res } = context
  const { id } = query
  return fetch(`http://localhost:3000/api/devits/${id}`)
    .then(apiResponse => {
      if (apiResponse.ok) return apiResponse.json()
      if (res) {
        res.writeHead(301, { location: '/home' }).end()
      }
    })
}

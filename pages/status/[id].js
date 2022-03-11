// import { firestore } from 'firebasee/admin'
import Devit from 'components/Devit'
import { useRouter } from 'next/router'
export default function DevitPage (props) {
  // console.log(props.id)
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
// export async function getStaticPaths () {
//   return {
//     paths: [{ params: { id: 'OvEyPwFo5We1JtSQSCyG' } }],
//     fallback: false
//   }
// }

// export async function getStaticProps (context) {
//   // params, req, res, query => en el context
//   const { params } = context
//   const { id } = params

//   return firestore
//     .collection('devits')
//     .doc(id)
//     .get()
//     .then(doc => {
//       const data = doc.data()
//       const id = doc.id
//       const { createdAt } = data
//       if (data) {
//         const props = {
//           ...data,
//           id,
//           createdAt: +createdAt.toDate()
//         }
//         return { props }
//       }
//     }).catch(() => {
//       return { props: {} }
//     })
// }

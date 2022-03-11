import { firestore } from 'firebasee/admin'
export default (req, res) => {
  const { query } = req
  const { id } = query

  firestore
    .collection('devits')
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data
      if (data) {
        res.json({
          ...data,
          id,
          createdAt: +createdAt.toDate()
        })
      }
      res.satus(400).end()
    }).catch(() => {
      res.status(400).end()
    })
}

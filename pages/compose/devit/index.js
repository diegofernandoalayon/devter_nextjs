import AppLayout from 'components/AppLayout'
import Button from 'components/Button'

export default function ComposeDevit () {
  return (
    <>
      <AppLayout>
        <form>
          <textarea placeholder='¿Qué esta pasando?'></textarea>
          <div>
            <Button>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        div{
          padding: 15px;
        }
        textarea{
          border: 0;
          font-size: 21px;
          padding: 15px;
          outline: 0;
          min-height: 200px;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}

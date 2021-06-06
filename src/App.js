import Form from './components/Form'
import Input from './components/Input'

export default function App() {
  return (
    <Form>
      <Input name="name" />
      <Input name="email" />
      <Input name="password" />
      <button type="submit">Enviar</button>
    </Form>
  )
}

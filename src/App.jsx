import Key from './component/Key';
import Counter from './component/Counter'; 
import { Form } from './component/Form';
import { SubscriptionForm } from './component/SubscriptionForm';
import { FormWithRef } from './component/FormWithRef';
import { UncontrolledForm } from './component/UncontrolledForm'

function App() {

  return (
    <div className='App'>
      <Key />
      <Counter />
      <Form />
      <SubscriptionForm />
      <FormWithRef />
      <UncontrolledForm />
    </div>
  )
}

export default App;
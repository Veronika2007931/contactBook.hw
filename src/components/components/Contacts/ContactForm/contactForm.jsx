
const handleSubmit=(event)=>{
    event.preventDefault()
    const form = event.target
    form.reset()
}

<form onSubmit={handleSubmit}>
    <input 
    type="text"
    name='text' 
    placeholder="Enter the contact..."       />
    <Button type='submit'>Add contact</Button>
</form>
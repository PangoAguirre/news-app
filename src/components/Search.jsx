/* eslint-disable react/prop-types */

export function Search({updateWord}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const inputElement = event.target.elements.searchWordInput
        updateWord({newWord: inputElement.value.toString()})
        inputElement.value = ''
      }

    return (
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name='searchWordInput' placeholder='...'/>
          </label>
          <button type='submit'>Buscar</button>
        </form>
    )
}
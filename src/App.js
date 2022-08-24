import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {searchInput: '', wordsList: []}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddButtonClick = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newText = {
      id: v4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newText],
      searchInput: '',
    }))
  }

  renderNoWordsView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </div>
  )

  renderWordsListView = () => {
    const {wordsList} = this.state
    return (
      <ul>
        {wordsList.map(eachItem => (
          <li key={eachItem.id}>
            <p>
              {eachItem.item}: {eachItem.item.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {searchInput, wordsList} = this.state
    return (
      <div className="app-conatiner">
        <div className="left-container">
          <h1>Count the characters like a boss</h1>
          {wordsList.length === 0
            ? this.renderNoWordsView()
            : this.renderWordsListView()}
        </div>
        <div className="right-container">
          <h1>Character Counter</h1>
          <form>
            <input
              type="text"
              placeholder="Enter the Characters here"
              value={searchInput}
              onChange={this.onInputChange}
            />
            <button type="submit" onClick={this.onAddButtonClick}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App

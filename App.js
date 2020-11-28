import SearchResult from './searchResult.js'
import SearchKeyword from './SearchKeyWord.js'

export default function App({$app}){
    this.$app = $app

    this.setState = (nextData) => {
        this.data = nextData
        this.components.forEach(
            (component) => {component.setState && component.setState(this.data)}
        )
    }
    this.components = [
        new SearchKeyword ({
            $app,
            searchData: (data) => {
                this.setState(data)
            }
        }),
        new SearchResult({
            $app,
            data:this.data
        })
    ]
    
    
    

    




}

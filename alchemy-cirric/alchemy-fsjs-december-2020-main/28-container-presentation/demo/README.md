# React Container/Presentation

* presentation/container
  * `ColorDisplay`
    * snapshot test
  * `ColorControls`
    * TDD
      * input has value
      * onChange input invoke function
    * snapshot test
  * `ColorPicker`
    * TDD
      * has text state
      * has color state
      * handleChange updates state
* list
  * `Quote` and `Quotes` list 
  * `Character` and `Characters` list
* async
  * `AllQuotes` container
    * TDD
      * test fetch method
      * test componentDidMount calls fetch method
  * `AllCharacters` container
    * TDD
      * test fetch method
      * test componentDidMount calls fetch method
      * test incrementing page
      * test decrementing page
      * test componentDidUpdate calls fetch function when page changes
    * add paging
    * without `componentDidUpdate`
    * without guard in `componentDidUpdate`
    * with guard in `componentDidUpdate`
* render props
  * `List` with render and component props
* HOC
  * `withList`
  * `withFetch`

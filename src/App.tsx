import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'

function App() {
	return (
		<div className='App'>
			<Accordion title={'Accordion Title'} collapsed />
			<PageTitle title={'Title 1'} />
			<Rating value={3} />
			<PageTitle title={'Title 2'} />
			<Rating value={5} />
			<Accordion title={'Accordion Title 2'} />
		</div>
	)
}

type PageTitlePropsType = {
	title: string
}

function PageTitle(props: PageTitlePropsType) {
	return <h1>{props.title}</h1>
}

export default App
